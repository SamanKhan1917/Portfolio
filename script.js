document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;

        // Simple validation
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // You can add code here to send form data to a server, e.g., using fetch or XMLHttpRequest
        console.log("Form submitted:", {
            name: name,
            email: email,
            message: message,
        });

        // Reset form fields after submission
        form.reset();
        alert("Thank you for your message, " + name + "!");
    });
});
