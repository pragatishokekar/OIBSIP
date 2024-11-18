const validEmail = "test@example.com";
const validPassword = "password123";

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (email === validEmail && password === validPassword) {
        // Redirect with email as query parameter
        window.location.href = `dashboard.html?email=${encodeURIComponent(email)}`;
    } else {
        error.textContent = "Invalid email or password.";
    }
});
