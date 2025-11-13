// Get the form element
const form = document.getElementById("loginForm");

// Add event listener for submit
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page refresh

  // Get input values
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Show the inputs
  alert("Email: " + email + "\nPassword: " + password);

  // Also print in console (optional)
  console.log("Email:", email);
  console.log("Password:", password);
