window.onload = function () {

    //Disable the submit button until all mandatory fields are filled
    $("#submitButton").prop('disabled', true);
    $(".form-el").on("keyup", validateAbstractForm);

};

//Called each time data in a field has been changed
//TO DO: Some code repeated in registerScript.js - change if possible
function validateAbstractForm() {

    var formElements = $(".form-el");
    var submitButton = $("#submitButton");
    var fileUploadTab = $("#fileUploadTab");
    var textUploadTab = $("#textUploadTab");
    var usedElsCounter = 0;

    //Check if all mandatory fields have been filled
    for (var i = 0; i < formElements.length; i++) {
        if ($(formElements[i]).val().length > 0) {
            usedElsCounter++;
        }
    }

    //Enable the submit button if all mandatory fields have been filled
    if ((textUploaded() || fileUploaded()) && (usedElsCounter === formElements.length - 1)) {
        submitButton.prop('disabled', false);
    }
    else {
        submitButton.prop('disabled', true);
    }

}

function textUploaded() {

    var fileUploadTab = $("#fileUploadTab");
    var textUploadTab = $("#textUploadTab");

    //Disable the file upload tab if text has been uploaded
    if ($("#textUploadBox").val().length > 0) {
        disableElement(fileUploadTab, "You cannot submit a file if you have already entered abstract text.");
        return ($("#titleInput").val().length > 0);
    }
    else {
        enableElement(fileUploadTab);
        return false;
    }

}

function fileUploaded() {

    var fileUploadTab = $("#fileUploadTab");
    var textUploadTab = $("#textUploadTab");

    if ($("#fileInput").val().length > 0) {
        disableElement(textUploadTab, "You cannot submit abstract text if you have already uploaded a file.");
        return true;
    }
    else {
        enableElement(textUploadTab);
        return false;
    }

}

function disableElement(el, hoverMessage) {
    el.prop('disabled', true);
    el.addClass("tab-disabled");
    el.attr("title", hoverMessage);
}

function enableElement(el) {
    el.prop('disabled', false);
    el.removeClass("tab-disabled");
    el.attr("title", "");
}