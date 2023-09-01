
function formValidation()
{
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.querySelector("input[name='name']");
    const emailInput = document.querySelector("input[name='emeil']"); // Typo in the HTML attribute, should be 'email'
    const messageInput = document.querySelector("textarea[name='msg']");
    const sendButton = document.getElementById("send");
    const globalError = document.getElementById("globalError");

    form.addEventListener("submit", function (event) {
        const name = nameInput.value;
        const email = emailInput.value;
        const message = messageInput.value;

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
            event.preventDefault();
        }
    });
}
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
