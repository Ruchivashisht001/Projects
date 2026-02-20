const form = document.querySelector(".details");
const inputs = document.querySelectorAll(".field");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isvalid = true;
    inputs.forEach(function (input) {
        if (input.value.trim() === "") {
            isvalid = false;
            input.style.border = "2px solid red";
        }
        else {
            input.style.border = "2px solid green";
        }

        if (input.type === "email") {
            if (!isvalidEmail(input.value)) {
                isvalid = false;
                alert("Please enter a valud email");
                input.style.border = "2px solid red";
            }
        }
        if (input.value.trim() === "") {
            isvalid=false;
            input.style.border = "2px solid red";
        } else {
            input.style.border = "2px solid green";
        }
    });
    if (isvalid) {
        alert("Form submitted successfully");
        form.reset();
    }
});
