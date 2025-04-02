document.addEventListener("DOMContentLoaded", function () {
        const menuIcon = document.querySelector(".menu-icon");
        const navLinks = document.querySelector(".nav-links");
    
        menuIcon.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    
    
    // Show thank-you popup
    setTimeout(() => {
        document.querySelector(".thank-you-popup").style.display = "block";
    }, 2000);
});
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery-item img");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.innerHTML = `<img src="${img.src}" alt="Enlarged Image">`;
            lightbox.style.display = "flex";
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
});
