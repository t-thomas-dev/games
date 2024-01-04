const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "webdev") {
        document.cookie="SessionLoginSuccess-1";
        alert("✅ Login success");
        window.location.replace("https://t-thomas-dev.github.io/games/");
    } else {
        alert("🛑 Incorrect username or password");
    }
})