function saveSettings(){

const settings = {

displayName:
document.getElementById(
"displayName"
).value,

language:
document.getElementById(
"language"
).value

};

localStorage.setItem(
"settings",
JSON.stringify(settings)
);

alert("Pengaturan disimpan");

}
