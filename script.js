document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = contactForm.elements[0].value;
        const email = contactForm.elements[1].value;
        const message = contactForm.elements[2].value;

        // Simple validation
        if (name && email && message) {
            // Form submission logic here (e.g., send data to server or display success message)
            alert(`Thank you, ${name}! Your message has been sent.`);
            
            // Clear the form
            contactForm.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
});
