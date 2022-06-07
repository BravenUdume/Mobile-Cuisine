
document.getElementById("createBtn").onclick = 
function(){
    location.href = "create.html";
}

document.getElementById("loginBtn").onclick = 
function(){
    location.href = "login.html";
}


document.querySelector("login_button").onclick = 
function loginDetailsSave(){
    let usernameTest = window.setItem("username", document.getElementById("username").value);

    console.log(usernameTest);
}
