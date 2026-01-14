function searchText() {
    const text = document.getElementById("textInput").value;
    const keyword = document.getElementById("searchInput").value.trim();
    const resultDiv = document.getElementById("result");
    const countPara = document.getElementById("count");

    if (!keyword) {
        resultDiv.innerHTML = text;
        countPara.textContent = "";
        return;
    }

    const regex = new RegExp(`(${keyword})`, "gi");
    const matches = text.match(regex);

    if (!matches) {
        resultDiv.innerHTML = text;
        countPara.textContent = "No matches found.";
        return;
    }

    const highlightedText = text.replace(regex, `<span class="highlight">$1</span>`);
    resultDiv.innerHTML = highlightedText;
    countPara.textContent = `Matches found: ${matches.length}`;

    // Auto-scroll to first match
    setTimeout(() => {
        const first = resultDiv.querySelector(".highlight");
        if (first) {
            first.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, 100);
}
