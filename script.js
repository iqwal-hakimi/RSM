// Mobile Menu Button
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
    alert("Mobile menu will be added in the next version.");
});

// Smooth button animation
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-4px)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0)";
    });
});