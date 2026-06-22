const creatorOutput =
document.getElementById("creatorOutput");

async function captionTikTok(){

let topic = prompt("Topik video?");

let result = await askAI(
`Buat caption TikTok viral tentang ${topic}`
);

creatorOutput.innerHTML =
`<h2>Caption TikTok</h2><p>${result}</p>`;
}

async function videoIdea(){

let niche = prompt("Niche konten?");

let result = await askAI(
`Berikan 10 ide video ${niche}`
);

creatorOutput.innerHTML =
`<h2>Ide Video</h2><p>${result}</p>`;
}

async function generateHashtag(){

let topic = prompt("Topik?");

let result = await askAI(
`Buat 30 hashtag viral untuk ${topic}`
);

creatorOutput.innerHTML =
`<h2>Hashtag</h2><p>${result}</p>`;
}

async function scriptNarration(){

let topic = prompt("Tema narasi?");

let result = await askAI(
`Buat script narasi YouTube tentang ${topic}`
);

creatorOutput.innerHTML =
`<h2>Script Narasi</h2><p>${result}</p>`;
}

async function instagramBio(){

let niche = prompt("Niche akun?");

let result = await askAI(
`Buat bio Instagram profesional untuk ${niche}`
);

creatorOutput.innerHTML =
`<h2>Bio Instagram</h2><p>${result}</p>`;
}

async function imagePrompt(){

let topic = prompt("Tema gambar?");

let result = await askAI(
`Buat prompt AI image generator untuk ${topic}`
);

creatorOutput.innerHTML =
`<h2>Prompt AI</h2><p>${result}</p>`;
  }
