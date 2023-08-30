function sendDataToServer() {
    const formData = new FormData(form);

    emailjs.init("ys-tUEoTEGxuKvpCA"); // 

    const templateParams = {
        to_email: "kappyrwanda@gmail.com",
        from_name: formData.get("name"),
        from_email: formData.get("emeil"),
        message: formData.get("msg")
    };

    emailjs.send("ys-tUEoTEGxuKvpCA", "template_n5tmq4p", templateParams)
        .then(function(response) {
            console.log("Email sent:", response);
            alert("Message sent successfully!");
        })
        .catch(function(error) {
            console.error("Error sending email:", error);
            alert("Error sending message.");
        });
}
