function startVoice(){

const recognition =
new webkitSpeechRecognition();

recognition.lang="id-ID";

recognition.start();

recognition.onresult =
function(event){

document.getElementById("voiceText")
.value =
event.results[0][0].transcript;

};
}

function speakText(){

const text =
document.getElementById("voiceText")
.value;

const speech =
new SpeechSynthesisUtterance(text);

speechSynthesis.speak(speech);
}
