function toggleTheme(){

document.body.classList.toggle(
"dark-mode"
);

localStorage.setItem(
"theme",
document.body.classList.contains(
"dark-mode"
)
);

}

window.onload = () => {

const dark =
localStorage.getItem("theme");

if(dark === "true"){

document.body.classList.add(
"dark-mode"
);

}

};
