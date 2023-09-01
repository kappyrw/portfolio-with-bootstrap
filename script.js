
  function formValidation() {
    // Get form elements
    var name = document.forms["contactForm"]["Name"].value;
    var email = document.forms["contactForm"]["Email"].value;
    var message = document.forms["contactForm"]["Message"].value;

    // Regular expression for email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if name, email, and message are not empty
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return false;
    }

    // Check if the email is valid using regex
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return false;
    }

    // If all validations pass, the form will submit
    return true;
  }

