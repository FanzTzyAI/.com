const defaultAchievements = [
"Chat Pertama",
"10 Chat",
"Football Expert",
"Creator Master",
"Study Champion",
"Crypto Trader",
"Gamer Pro"
];

function unlockAchievement(name){

let data = JSON.parse(localStorage.getItem("achievements")) || [];

if(!data.includes(name)){

data.push(name);

localStorage.setItem("achievements", JSON.stringify(data));

addNotification("🏆 Achievement: " + name);

}

}

function loadAchievements(){

let data = JSON.parse(localStorage.getItem("achievements")) || [];

let html = "";

defaultAchievements.forEach(a => {

let unlocked = data.includes(a);

html += `
<div class="card">
<h3>${a}</h3>
<p>${unlocked ? "✅ Unlocked" : "🔒 Locked"}</p>
</div>
`;

});

document.getElementById("achievementList").innerHTML = html;

}
