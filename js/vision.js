async function analyzeImage(){

const file =
document.getElementById("image")
.files[0];

if(!file){

alert("Pilih gambar");
return;

}

document.getElementById(
"visionOutput"
).innerHTML =
"Analisis gambar memerlukan API Vision";

}
