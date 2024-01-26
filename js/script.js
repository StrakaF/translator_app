const fromText = document.querySelector(".from-text"),
selectTag = document.querySelectorAll("select"),
translateBtn = document.querySelector("button");

selectTag.forEach((tag, id)=> {
    for( const country_code in countries ){
        // selectin English by default as FROM language and Hindi as TO language
        let selected;
        if(id == 0 && country_code == "en-GB") {
            selected = "selected";
        } else if (id == 1 && country_code == "hi-IN") {
            selected = "selected";
        }
        let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option); //adding options tag inside select tag
    }
});

translateBtn.addEventListener("click", () => {
    let text = fromText.value;
    console.log(text);
});