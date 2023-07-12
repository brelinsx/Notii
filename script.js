// JavaScript para desplazamiento suave al hacer clic en los enlaces de navegación
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");
  
    for (const link of links) {
      link.addEventListener("click", smoothScroll);
    }
  
    function smoothScroll(event) {
      event.preventDefault();
  
      const targetId = this.getAttribute("href");
      const targetPosition = document.querySelector(targetId).offsetTop;
  
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  });
  