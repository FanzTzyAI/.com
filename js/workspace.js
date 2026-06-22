async function runWorkspace(){

let prompt =
document.getElementById(
"workspacePrompt"
).value;

let result =
await askAI(prompt);

document.getElementById(
"workspaceOutput"
).innerHTML =
result;

saveChat(
prompt,
result
);

increaseStat(
"chat"
);

}
