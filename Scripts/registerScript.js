window.onload = function(){

    //Disable the submit button until all mandatory fields are filled
    $("#registerButton").prop('disabled', true);
    $(".register-mandatory").on("keyup", validateRegisterForm);

};

//Called each time data in a field has been changed
function validateRegisterForm() {

    var formElements = $(".register-mandatory");

    var submitButton = $("#registerButton");
    var usedElsCounter = 0;

    //Check if all mandatory fields have been filled
    for (var i = 0; i < formElements.length; i++) {
        if ($(formElements[i]).val().length > 0) {
            usedElsCounter++;
        }
    }
    //Enable the submit button if all mandatory fields have been filled
    if (usedElsCounter === (formElements.length)) {
        submitButton.prop('disabled', false);
    }
    else {
        submitButton.prop('disabled', true);
    }

}
