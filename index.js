const hamburger = document.querySelector(".hamburger");
//console.log(hamburger)
const navMenu = document.querySelector(".nav-item");
hamburger.addEventListener("click", function () {
    // Toggle the visibility of nav-items
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    if (navMenu.style.display === "none") {
        navMenu.style.display = "block";
    } else {
        navMenu.style.display = "none";
    }
});
