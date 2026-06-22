function saveSettings(){

const settings = {
displayName: document.getElementById("displayName").value,
language: document.getElementById("language").value
};

localStorage.setItem("settings", JSON.stringify(settings));

alert("Pengaturan disimpan");

}

function resetAll(){

if(confirm("Reset semua data?")){

localStorage.clear();
alert("Data direset");
location.reload();

}

}
