document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.main-menu').classList.toggle('show');
});
    // Function to handle form submission
    
function handleSubmit(event) {
    event.preventDefault(); 
        var nameInput = document.getElementById('name');
        var emailInput = document.getElementById('email');
        var phoneInput = document.getElementById('phone');
        var msgTextarea = document.getElementById('msg');
        var successMessage = document.getElementById('success');
        var errorMessage = document.querySelector('.danger');

        if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '' || msgTextarea.value === '') {
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
        } else {
            errorMessage.style.display = 'none';

            successMessage.style.display = 'block';

            setTimeout(function () {
                nameInput.value = '';
                emailInput.value = '';
                phoneInput.value = '';
                msgTextarea.value = '';
                successMessage.style.display = 'none';
            }, 2000);
        }
    }

    var form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);

// Get a reference to the "Go to Top" button and set its click event
const goTopButton = document.getElementById("goTopButton");
goTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top smoothly
});

// Show or hide the button based on the user's scroll position
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
        goTopButton.style.display = "block";
    } else {
        goTopButton.style.display = "none";
    }
});
