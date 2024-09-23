// Smooth scrolling for anchor links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Optional: Add form submission handling if needed
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Here you can handle form submission, e.g., send data via AJAX
    alert("Your message has been sent!");
    this.reset(); // Reset form after submission
});
