const output = document.getElementById("output");

function randomScore(){
return Math.floor(Math.random()*5);
}

function showPrediction(){

let team1 = prompt("Tim Pertama");
let team2 = prompt("Tim Kedua");

if(!team1 || !team2) return;

output.innerHTML = `
<h2>Prediksi Skor</h2>
<p>${team1} ${randomScore()} - ${randomScore()} ${team2}</p>
`;
}

function showWorldCup(){

let teams = [
"Brazil",
"Argentina",
"France",
"England",
"Germany",
"Portugal",
"Spain",
"Indonesia"
];

let champion = teams[Math.floor(Math.random()*teams.length)];

output.innerHTML = `
<h2>🏆 Simulasi Piala Dunia</h2>
<p>Juara Dunia:</p>
<h1>${champion}</h1>
`;
}

function generateTournament(){

let teams = prompt("Jumlah Tim");

if(!teams) return;

let result = "";

for(let i=1;i<=teams;i+=2){

result += `
Match ${i/2+1}<br>
Tim ${i} vs Tim ${i+1}<br><br>
`;
}

output.innerHTML = `
<h2>📋 Jadwal Turnamen</h2>
${result}
`;
}

function generateLineup(){

output.innerHTML = `
<h2>⚽ Formasi 4-3-3</h2>

GK

LB CB CB RB

CM CM CM

LW ST RW
`;
}

async function generateNews(){

output.innerHTML = "Membuat berita...";

const promptText =
"Buat berita sepak bola profesional sepanjang 200 kata";

const result = await askAI(promptText);

output.innerHTML = `
<h2>📰 Berita AI</h2>
<p>${result}</p>
`;
              }
