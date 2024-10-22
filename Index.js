function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (username === "admin" && password === "password123") {
        alert("Login successful!");
        return true; // Allow form submission
    } else {
        errorMessage.textContent = "Invalid username or password!";
        return false; // Prevent form submission
    }
}

