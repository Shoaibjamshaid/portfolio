// =========================
// PORTFOLIO JAVASCRIPT
// =========================

console.log("Portfolio website loaded successfully!");

// Add a small scroll effect to the header
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});