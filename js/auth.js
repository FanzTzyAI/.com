function register(){

let username =
document.getElementById("username").value;

let password =
document.getElementById("password").value;

if(!username || !password){

alert("Lengkapi data");
return;

}

const user = {
username,
password,
joinDate:new Date().toLocaleDateString()
};

localStorage.setItem(
"fanztzy_user",
JSON.stringify(user)
);

alert("Registrasi berhasil");

}

function login(){

let username =
document.getElementById("username").value;

let password =
document.getElementById("password").value;

const user =
JSON.parse(
localStorage.getItem("fanztzy_user")
);

if(
user &&
user.username===username &&
user.password===password
){

localStorage.setItem(
"isLoggedIn",
"true"
);

location.href="profile.html";

}else{

alert("Login gagal");

}
}
