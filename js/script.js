const fromText = document.querySelector(".from-text"),
toText = document.querySelector(".to-text"),
selectTag = document.querySelectorAll("select"),
translateBtn = document.querySelector("button");

selectTag.forEach((tag, id)=> {
    for( const country_code in countries ){
        // selectin English by default as FROM language and Slovak as TO language
        let selected;
        if(id == 0 && country_code == "en-GB") {
            selected = "selected";
        } else if (id == 1 && country_code == "sk-SK") {
            selected = "selected";
        }
        let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option); //adding options tag inside select tag
    }
});

translateBtn.addEventListener("click", () => {
    let text = fromText.value,
    traslateFrom = selectTag[0].value, //gettubg fromSelect tag value
    traslateTo = selectTag[1].value;    //Getting toSelect tag value
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${traslateFrom}|${traslateTo}`;
    // fetching api response and returning it with parsing into js obj
    // and in another then metod receiving that obj
    fetch(apiUrl).then(res => res.json()).then(data => {
        toText.value = data.responseData.translatedText;
    })
});