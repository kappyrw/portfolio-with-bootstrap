
function validateForm() {
    const name = document.forms["contactForm"]["name"].value;
    const email = document.forms["contactForm"]["email"].value;
    const message = document.forms["contactForm"]["msg"].value;

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address in lowercase.");
        return false;
    }

    // Validate message length
    if (message.length > 600) {
        alert("Message should not exceed 600 characters.");
        return false;
    }

    // Check if all fields are filled
    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out.");
        return false;
    }

    return true;
}
