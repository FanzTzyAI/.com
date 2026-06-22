function addNotification(message){

let notifications =
JSON.parse(
localStorage.getItem(
"notifications"
)
) || [];

notifications.unshift({

message,
time:new Date().toLocaleString()

});

localStorage.setItem(
"notifications",
JSON.stringify(notifications)
);

}
