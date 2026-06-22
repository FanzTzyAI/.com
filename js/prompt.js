function savePrompt(){

let promptText =
document.getElementById(
"promptText"
).value;

let prompts =
JSON.parse(
localStorage.getItem(
"savedPrompts"
)
) || [];

prompts.unshift(promptText);

localStorage.setItem(
"savedPrompts",
JSON.stringify(prompts)
);

}
