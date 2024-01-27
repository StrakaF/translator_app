const fromText = document.querySelector(".from-text"),
toText = document.querySelector(".to-text"),
selectTag = document.querySelectorAll("select"),
exchangeIcon = document.querySelector(".exchange"),
translateBtn = document.querySelector("button"),
icons = document.querySelectorAll(".row i");

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

exchangeIcon.addEventListener("click", () => {
    // exchange of languages and text areas
    let tempText = fromText.value, //text
    tempLang = selectTag[0].value;  //lang
    fromText.value = toText.value;  //text
    selectTag[0].value = selectTag[1].value;  //lang
    toText.value = tempText;   //text
    selectTag[1].value = tempLang;  //lang
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

icons.forEach(icon => {
    icon.addEventListener("click", ({target}) => {
        if(target.classList.contains("fa-copy")){
            if(target.id == "from") {
                navigator.clipboard.writeText(fromText.value);
            } else {
                navigator.clipboard.writeText(toText.value);
            }
        } else {
            
        }
    });
});