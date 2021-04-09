var inputArea = document.querySelector("#input-area");
var outputArea = document.querySelector("#output-area");
var btnTranslate = document.querySelector("#btn-translate");

var serverURL = "https://api.funtranslations.com/translate/gungan.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

btnTranslate.addEventListener("click",function(){
	var inputText = inputArea.value;
	console.log(inputText)
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputArea.innerText = translatedText;
        })
        .catch(errorHandler)
})