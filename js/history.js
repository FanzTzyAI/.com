function loadHistory(){

let history =
JSON.parse(
localStorage.getItem("chatHistory")
) || [];

let html="";

history.forEach(item=>{

html += `
<div class="history-card">

<h3>${item.question}</h3>

<p>${item.answer}</p>

<small>${item.time}</small>

</div>
`;

});

document.getElementById(
"historyOutput"
).innerHTML=html;

}
