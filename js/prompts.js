function savePrompt(){

let text = document.getElementById("promptText").value;

if(!text) return;

let data = JSON.parse(localStorage.getItem("savedPrompts")) || [];

data.unshift(text);

localStorage.setItem("savedPrompts", JSON.stringify(data));

loadPrompts();

}

function loadPrompts(){

let data = JSON.parse(localStorage.getItem("savedPrompts")) || [];

let html = "";

data.forEach(p => {

html += `
<div class="card">
${p}
</div>
`;

});

document.getElementById("promptOutput").innerHTML = html;

}
