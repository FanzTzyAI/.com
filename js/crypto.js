const cryptoOutput =
document.getElementById("cryptoOutput");

function profitCalculator(){

let buy =
prompt("Harga beli");

let sell =
prompt("Harga jual");

let amount =
prompt("Jumlah coin");

let profit =
(sell-buy)*amount;

cryptoOutput.innerHTML =
`<h2>Profit</h2>
Rp ${profit}`;
}

async function cryptoAnalysis(){

let coin =
prompt("Nama Coin");

let result =
await askAI(
`Analisis sederhana coin ${coin}`
);

cryptoOutput.innerHTML =
result;
}

async function riskAnalysis(){

let coin =
prompt("Nama Coin");

let result =
await askAI(
`Analisis risiko investasi ${coin}`
);

cryptoOutput.innerHTML =
result;
}

async function cryptoNews(){

let result =
await askAI(
"Buat ringkasan berita crypto terbaru"
);

cryptoOutput.innerHTML =
result;
}
