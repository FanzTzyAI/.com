const studyOutput =
document.getElementById("studyOutput");

async function summarizeText(){

let text = prompt("Masukkan teks");

let result = await askAI(
`Ringkas teks berikut:\n${text}`
);

studyOutput.innerHTML =
`<h2>Ringkasan</h2><p>${result}</p>`;
}

async function generateQuestion(){

let topic = prompt("Materi?");

let result = await askAI(
`Buat 10 soal tentang ${topic}`
);

studyOutput.innerHTML =
`<h2>Soal</h2><p>${result}</p>`;
}

async function generateAnswer(){

let question = prompt("Pertanyaan?");

let result = await askAI(question);

studyOutput.innerHTML =
`<h2>Jawaban</h2><p>${result}</p>`;
}

async function translator(){

let text = prompt("Teks");

let result = await askAI(
`Terjemahkan ke bahasa Inggris:\n${text}`
);

studyOutput.innerHTML =
`<h2>Terjemahan</h2><p>${result}</p>`;
}

async function smartCalculator(){

let formula = prompt("Hitung");

let result = await askAI(
`Hitung hasil dari ${formula}`
);

studyOutput.innerHTML =
`<h2>Hasil</h2><p>${result}</p>`;
}

async function flashcardGenerator(){

let topic = prompt("Materi");

let result = await askAI(
`Buat flashcard belajar tentang ${topic}`
);

studyOutput.innerHTML =
`<h2>Flashcard</h2><p>${result}</p>`;
}
