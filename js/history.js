function saveChat(question,answer){

let history =
JSON.parse(
localStorage.getItem("chatHistory")
) || [];

history.unshift({

question,
answer,
time:new Date().toLocaleString()

});

localStorage.setItem(
"chatHistory",
JSON.stringify(history)
);

}
