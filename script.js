document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form data
    const name = event.target[0].value;
    const email = event.target[1].value;
    const message = event.target[2].value;

    // Here you can implement logic to send the data to your server
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Clear the form fields
    event.target.reset();
    alert("Thank you for your message!"); // Simple alert on submission
});
