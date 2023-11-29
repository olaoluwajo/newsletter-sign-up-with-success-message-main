const signupContainer = document.querySelector(".signup-container");
const submitButton = document.getElementById("subscribe");
const emailInput = document.getElementById("email");
const validEmailSpan = document.getElementById("validEmail");
const generatedEmail = document.getElementById("generated-email");

// let emailValue = emailInput.value;

function isValidEmail(email) {
    // symbols to check if the email is valid
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitButton.addEventListener("click", () => {
    // Check if the email is valid
    if (!isValidEmail(emailInput.value)) {
        //show the error message
        validEmailSpan.style.display = "block";
    } else {
        //hide the error message
        validEmailSpan.style.display = "none";
        //hide the signup container
        signupContainer.style.display = "none";
        // Show the success page here
        success.style.display = "block";
        generatedEmail.innerHTML = emailInput.value;
    }
});

const success = document.getElementById("success-page");
const dismissButton = document.getElementById("dismiss-btn");

dismissButton.addEventListener("click", () => {
  location.reload();
})
