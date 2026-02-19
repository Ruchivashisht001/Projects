const form = document.querySelector(".details");
const inputs = document.querySelectorAll(".name");

form.addEventListener("submit", function(e){
  e.preventDefault();
});
let isvalid = true;
inputs.forEach(function (input) {
    if (input.value.trim()=== ""){
        isvalid = false;
        input.style.border = "2px solid red";
    }
    else{
       input.style.border = "2px solid green";
    }
});
