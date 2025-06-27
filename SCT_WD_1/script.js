window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}); 
document.getElementById("contact").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent actual form submission
      alert("Message sent successfully!");
      this.reset(); // Optional: reset the form after submission
    });
    