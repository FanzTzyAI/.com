function saveToStore(category, data){

let store = JSON.parse(localStorage.getItem("aiStore")) || {};

if(!store[category]){
store[category] = [];
}

store[category].unshift(data);

localStorage.setItem("aiStore", JSON.stringify(store));

loadStore();

}

function loadStore(){

let store = JSON.parse(localStorage.getItem("aiStore")) || {};

let html = "";

Object.keys(store).forEach(cat => {

html += `<h3>📁 ${cat}</h3>`;

store[cat].forEach(item => {

html += `
<div class="card">
${item}
</div>
`;

});

});

document.getElementById("storeOutput").innerHTML = html;

}
