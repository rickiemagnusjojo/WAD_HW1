const dropdownContent = document.getElementById("dropdown");
const userLogo = document.getElementById("userLogo");

//open or close dropdown
userLogo.addEventListener("click", function(event) {
    event.stopPropagation();
    dropdownContent.classList.toggle("show");
});

//close dropdown when clicking outside
document.addEventListener("click", function(event) {
    if (!dropdownContent.contains(event.target)) {
        dropdownContent.classList.remove("show");
    }
});