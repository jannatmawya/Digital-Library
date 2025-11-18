const loginbtn = document.getElementById("login");

loginbtn.addEventListener("click",()=>{
    loginbtn.textContent = "My Profile";
});

const borrowbtn = document.getElementById("Borrowbtn");

borrowbtn.addEventListener("click",()=>{
    borrowbtn.textContent = "Request Sent";
});