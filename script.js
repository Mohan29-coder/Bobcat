// script.js
function registerUser() {
    const user = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    if (!user.email || !user.password) {
        alert("Please fill all fields");
        return;
    }
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration success ✅");
    window.location = "login.html";
}

function loginUser() {
    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPassword").value;
    const saved = JSON.parse(localStorage.getItem("user"));
    if (saved && saved.email === email && saved.password === pass) {
        alert("Login success ✅");
        window.location = "dashboard.html";
    } else {
        alert("Invalid login ❌");
    }
}