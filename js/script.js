const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        document.cookie="SessionLoginSuccess-1";
        alert("✅ Login success");
        location.reload();
    } else {
        alert("🛑 Incorrect username or password");
    }
})