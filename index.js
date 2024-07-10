
function validateForm() {
  let isValid = true;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const successMessage = document.getElementById('successMessage');

  nameError.innerText = "";
  emailError.innerText = "";
  messageError.innerText = "";
  successMessage.innerText = "";

  // Name validation (can be adjusted for length requirement)
  if (name.trim() === "") {
      nameError.innerText = "Please enter your name.";
      isValid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      emailError.innerText = "Please enter a valid email address.";
      isValid = false;
  }

  // Message validation (can be adjusted for minimum length)
  if (message.trim() === "") {
      messageError.innerText = "Please enter your message.";
      isValid = false;
  }


  if (isValid) {
   
    if (isValid) {
        alert("Your review has been submitted successfully!");
    }

}

return isValid;
}

function showSuccessMessage() {
const successMessage = document.getElementById('successMessage');
successMessage.style.display = 'block'; // Make the message visible

// Display the message for 3 seconds
setTimeout(function() {
    successMessage.style.display = 'none';
}, 3000); // Ensures the message stays visible for 3 seconds
}