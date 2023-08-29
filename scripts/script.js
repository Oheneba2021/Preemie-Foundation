/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

const toggleButton = document.getElementById('toggleButton');
const navigationMenu = document.querySelector('#myDropdown');

// Hide the navigation menu on page load for larger screens
window.addEventListener('load', function () {
    if (window.innerWidth < 1050) {
        navigationMenu.style.display = 'none';
    }
});
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// blur hero on scroll
window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var blurValue = scrollTop / 500; // Adjust this value to control the blur intensity
    document.querySelector('.hero').style.filter = 'blur(' + blurValue + 'px)';
});

function toggleMenu() {
    var navItems = document.querySelector('.nav-items');
    navItems.classList.toggle('open');
}
// input button functionality
const inputField = document.getElementById("inputField");

// Set the initial value in the input field to one of the buttons' values
inputField.value = "100";

// Function to set the input field value based on the clicked button
function setInputValue(value) {
    inputField.value = value;
}

// Function to open the input field for custom entry
function openCustomInput() {
    inputField.value = ""; // Clear the input field
    inputField.removeAttribute("readonly"); // Allow user input
    inputField.focus(); // Focus on the input field
}