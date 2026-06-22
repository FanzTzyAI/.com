function exportHistory(){

let history =
localStorage.getItem(
"chatHistory"
);

const blob =
new Blob(
[history],
{
type:"text/plain"
}
);

const url =
URL.createObjectURL(blob);

const a =
document.createElement("a");

a.href = url;
a.download =
"FanzTzyAI_History.txt";

a.click();

}
