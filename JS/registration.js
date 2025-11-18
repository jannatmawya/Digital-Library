// Get the form element
const form = document.getElementById("registrationForm");

// Add event listener for submit
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Collect all input values
  const name = document.getElementById("name").value;
  const university = document.getElementById("university").value;
  const email = document.getElementById("email").value;
  const country = document.getElementById("country").value;
  const password = document.getElementById("password").value;

  // Show the collected data
  alert(
    "Registration Info:\n" +
    "Name: " + name + "\n" +
    "University: " + university + "\n" +
    "Email: " + email + "\n" +
    "Country: " + country + "\n" +
    "Password: " + password
  );

  // (Optional) You can log in console
  console.log("Full Name:", name);
  console.log("University:", university);
  console.log("Email:", email);
  console.log("Country:", country);
  console.log("Password:", password);

  // (Optional) Store in localStorage
  // localStorage.setItem("userName", name);
  // localStorage.setItem("userEmail", email);
});