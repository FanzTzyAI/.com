function addEvent(){

let title = document.getElementById("eventTitle").value;
let date = document.getElementById("eventDate").value;

if(!title || !date) return;

let events = JSON.parse(localStorage.getItem("events")) || [];

events.push({title, date});

localStorage.setItem("events", JSON.stringify(events));

loadEvents();

}

function loadEvents(){

let events = JSON.parse(localStorage.getItem("events")) || [];

let html = "";

events.forEach(e => {

html += `
<div class="card">
<h3>${e.title}</h3>
<p>${e.date}</p>
</div>
`;

});

document.getElementById("eventOutput").innerHTML = html;

}
