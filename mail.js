document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_4uhu11a", "template_wxbclki", this)
    .then(function(response) {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset(); // Clear form after sending
    }, function(error) {
        alert("Failed to send message. Please try again.");
        console.error("Error:", error);
    });
});
