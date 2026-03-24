// Smooth scroll when clicking "Book Now"
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});




// Simple alert when page loads
window.addEventListener('load', () => {
    console.log("Website loaded successfully 🚀");
});




// Example: Click on a service card
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        alert("Contact us to book this service!");
    });
});