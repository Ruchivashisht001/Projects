// alert("js connected");
const form= document.getElementById("myform");
form.addEventListener("submit", function(e){
    // alert("Form submit event working");
e.preventDefault();

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const nameError = document.getElementById("nameError"); 
const emailError = document.getElementById("emailError"); 
const passwordError = document.getElementById("passwordError"); 

nameError.innerText= "";
emailError.innerText = "";
passwordError.innerText = "";
let valid = true;
if (name.value === "") {
    nameError.innerText = "Name is required";
    // alert("Name empty");
    valid = false;
} 

//     alert("name filled");
// }
if (email.value === "") {
    emailError.innerText = "Email is required";
    valid = false;
}
if (password.value.length < 6) {
    passwordError.innerText = "Password must be at least 6 characters";
    valid = false;
}

if (valid) {
    alert("Form submitted successfully");
    form.reset();
}
});