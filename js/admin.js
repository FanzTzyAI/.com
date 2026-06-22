function loadAdminStats(){

let chat = JSON.parse(localStorage.getItem("chatHistory")) || [];
let notes = JSON.parse(localStorage.getItem("notes")) || [];

document.getElementById("totalChats").innerText = chat.length;
document.getElementById("totalNotes").innerText = notes.length;

}
