document.getElementById("submitButton").addEventListener("click", function(){
    formValidation();
});

function formValidation(){
    var firstNameInput = document.getElementById("first-name").value.trim();
    var firstNameError = document.getElementById("fn-error");

    var lastNameInput = document.getElementById("last-name").value.trim();
    var lastNameError = document.getElementById("ln-error");
    
    var regex = /^[A-Za-z\-]+$/; // Regular expression allowing only letters and dashes
    var validator = true;

    if (!firstNameInput) {
        document.getElementById('first-name').style.border = "1px solid red";
        document.getElementById('fn-error').innerHTML = "*";
        validator = false;
    } 
    else if (!regex.test(firstNameInput)){
        document.getElementById('fn-error').innerHTML = "* Your first name must not include special characters";
        validator = false;
    }
    
    return validator;
}
