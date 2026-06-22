const gamesOutput =
document.getElementById("gamesOutput");

function guessNumber(){

const secret =
Math.floor(Math.random()*10)+1;

let guess =
prompt("Tebak angka 1-10");

if(Number(guess)===secret){

gamesOutput.innerHTML =
"<h2>Benar 🎉</h2>";

}else{

gamesOutput.innerHTML =
`<h2>Salah</h2>
Angka yang benar ${secret}`;

}
}

async function smartQuiz(){

let topic =
prompt("Topik kuis");

let result =
await askAI(
`Buat kuis 5 soal tentang ${topic}`
);

gamesOutput.innerHTML =
`<h2>Kuis</h2>${result}`;
}

function gachaSimulator(){

const rewards = [
"SSR Player",
"Legend Player",
"Epic Player",
"Rare Player",
"Common Player"
];

const reward =
rewards[
Math.floor(Math.random()*rewards.length)
];

gamesOutput.innerHTML =
`<h2>Hasil Gacha</h2>
<h1>${reward}</h1>`;
}

async function footballManager(){

let club =
prompt("Nama klub");

let result =
await askAI(
`Buat simulasi karir manager sepak bola untuk ${club}`
);

gamesOutput.innerHTML =
result;
}

async function rpgGame(){

let action =
prompt("Apa yang ingin dilakukan?");

let result =
await askAI(
`RPG Fantasy. Pemain memilih ${action}`
);

gamesOutput.innerHTML =
result;
}
