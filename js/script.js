const fromText = document.querySelector(".from-text"),
selectTag = document.querySelectorAll("select"),
translateBtn = document.querySelector("button");

selectTag.forEach((tag, id) => {
    for (const country_code in countries) {
    let selected;
    if (id == 0 && country_code == "en-US") {
        selected = "selected";
    } else if (id == 1 && country_code == "es-ES") {
        selected = "selected";
    }
    let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`;
    tag.insertAdjacentHTML("beforeend", option);
    }
});

translateBtn.addEventListener("click", () => {
    let text = fromText.value,
    translateFrom = selectTag[0].value,
    translateTo = selectTag[1].value;
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    fetch(apiUrl).then(res => res.json()).then(data => {
        console.log(data);
    });
});