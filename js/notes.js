function saveNote(){

let note = document.getElementById("noteInput").value;

if(!note) return;

let notes = JSON.parse(localStorage.getItem("notes")) || [];

notes.unshift({
text: note,
date: new Date().toLocaleString()
});

localStorage.setItem("notes", JSON.stringify(notes));

loadNotes();

}

function loadNotes(){

let notes = JSON.parse(localStorage.getItem("notes")) || [];

let html = "";

notes.forEach(n => {

html += `
<div class="card">
<p>${n.text}</p>
<small>${n.date}</small>
</div>
`;

});

document.getElementById("noteOutput").innerHTML = html;

  }
