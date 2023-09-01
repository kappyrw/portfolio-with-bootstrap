document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const globalError = document.getElementById("globalError");

    form.addEventListener("submit", function (event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        globalError.textContent = "";

        if (name.trim() === "") {
            nameError.textContent = "Name is required";
            event.preventDefault();
        }

        if (email.trim() === "") {
            emailError.textContent = "Email is required";
            event.preventDefault();
        } else if (!isValidEmail(email)) {
            emailError.textContent = "Invalid email format";
            event.preventDefault();
        }

        if (message.trim() === "") {
            messageError.textContent = "Message is required";
            event.preventDefault();
        }

        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            globalError.textContent = "Please fill in all required fields.";
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
