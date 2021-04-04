
$(document).ready(function(){
    $('#birth-date').mask('00/00/0000');
    $('#whatsApp').mask('(00) 00000-0000');
    $('#email').mask("A", {
        translation: {
            "A": { pattern: "/[\w@\-.+]/", recursive: true }
        },
    })
  });

/*informations selectors */
var forms = document.querySelector("#aula-experimental-form");
var sendButton = document.querySelector("#btnSend");
var birthDate = document.getElementById("birth-date");
var whatsApp = document.getElementById("whatsApp");
var email = document.getElementById("exampleInputEmail1");

/*errors selectors */
var nameError = document.querySelector("#name-error");
var lastNameError = document.querySelector("#lastName-error");
var birthdayError = document.querySelector("#birthday-error");
var whatsAppError = document.querySelector("#whatsApp-error");
var emailError = document.querySelector("#email-error");
var levelError = document.querySelector("#level-error");

var map = new Map();
var isFieldOk = false;

/** Creating FieldMaps */
map.set("name", isFieldOk);
map.set("lastName", isFieldOk);
map.set("birthday", isFieldOk);
map.set("whatsApp", isFieldOk);
map.set("email", isFieldOk);
map.set("level", isFieldOk);

forms.name.addEventListener("blur", function () {
    isFieldOk = validation(forms.name);
    map.set("name", isFieldOk);
    setTextError(isFieldOk, nameError);
    buttonEnableDisable();

});

forms.lastName.addEventListener("blur", function () {
    isFieldOk = validation(forms.lastName);
    map.set("lastName", isFieldOk);
    setTextError(isFieldOk, lastNameError);
    buttonEnableDisable();
});

forms.birthday.addEventListener("click", function () {
    forms.birthday.placeholder = "dd/mm/aaaa";
});

forms.birthday.addEventListener("blur", function () {
    isFieldOk = validation(forms.birthday);
    map.set("birthday", isFieldOk);
    setTextError(isFieldOk, birthdayError);
    verifyBirthdateContent(forms.birthday, birthdayError);
    buttonEnableDisable();
});

forms.whatsApp.addEventListener("click", function () {
    forms.whatsApp.placeholder = "(00) 00000-0000";
});


forms.whatsApp.addEventListener("blur", function () {
    isFieldOk = validation(forms.whatsApp);
    map.set("whatsApp", isFieldOk);
    setTextError(isFieldOk, whatsAppError);
    verifyWhatsAppContent(forms.whatsApp, whatsAppError);
    buttonEnableDisable();
});

forms.email.addEventListener("blur", function () {
    isFieldOk = validation(forms.email);
    map.set("email", isFieldOk);
    setTextError(isFieldOk, emailError);
    verifyEmailContent(forms.email, emailError);
    buttonEnableDisable();
});

forms.level.addEventListener("blur", function () {
    isFieldOk = validation(forms.level);
    map.set("level", isFieldOk);
    setTextError(isFieldOk, levelError);
    buttonEnableDisable();
});

function validation(received) {
    var receivedValue = received.value;
    if (receivedValue.length == 0 || receivedValue == "Como considera seu inglês?*") {
        received.style.border = "1px solid red";
        return false;
    } else {
        received.style.border = "1px solid grey";
        return true;
    }
}

function setTextError(isValid, errorId) {
    if (!isValid) {
        errorId.textContent = "O campo é obrigatório.";
    } else {
        errorId.textContent = "";
    }
}

function buttonEnableDisable() {
    if (!Array.from(map.values()).includes(false)) {
        sendButton.disabled = false;
    } else {
        sendButton.disabled = true;
    }

}

function verifyBirthdateContent(birthdate, errorId) {
    if(birthdate.value.length < 10) {
        map.set("birthday", false);
        errorId.textContent = "Data inválida";
        birthdate.style.border = "1px solid red";
        
    }
}

function verifyWhatsAppContent(whatsApp, errorId) {
    if(whatsApp.value.length < 15) {
        map.set("whatsApp", false);
        errorId.textContent = "Número inválido";
        whatsApp.style.border = "1px solid red";
        
    }
}

function verifyEmailContent(email, errorId) {

    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regex.test(String(email.value).toLowerCase())) {
        map.set("email", false);
        errorId.textContent = "E-mail inválido";
        email.style.border = "1px solid red";
    }
}

/**send */
sendButton.addEventListener("click", function () {
    document.location.reload(true);
});