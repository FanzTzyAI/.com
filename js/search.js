function globalSearch(){

let keyword = document.getElementById("searchInput").value.toLowerCase();

let chat = JSON.parse(localStorage.getItem("chatHistory")) || [];
let notes = JSON.parse(localStorage.getItem("notes")) || [];

let result = "";

chat.forEach(c => {
if(c.question?.toLowerCase().includes(keyword)){
result += `<div class="card">💬 ${c.question}</div>`;
}
});

notes.forEach(n => {
if(n.text?.toLowerCase().includes(keyword)){
result += `<div class="card">📝 ${n.text}</div>`;
}
});

document.getElementById("searchOutput").innerHTML = result || "Tidak ditemukan";
}
