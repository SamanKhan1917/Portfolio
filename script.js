// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Thank you for your message! I will get back to you soon.'); // Show a thank you message
    this.reset(); // Reset the form fields
});

// Project Card Hover Animation
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)'; // Scale up the card on hover
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)'; // Scale back to original size
    });
});
