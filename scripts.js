// This can be used to handle form submissions or other dynamic events in the future.
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting JMR Auto Detailing! We'll get back to you soon.");
});