const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Show Input Error Message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show Success Outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check Username
function checkUsername(username) {
    if (username.value.trim() === "") {
        showError(username, "Username is required");
    } else {
        checkLength(username, 3, 15);
    }
}

// Check Email is Valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else if (email.value.trim() === "") {
        showError(input, "Email is required");
    } else {
        showError(input, "Email is not valid");
    }
}

// Check Password
function checkPassword(password) {
    if (password.value === "") {
        showError(password, "Password is required");
    } else {
        checkLength(password, 6, 25);
    }
}

// Check Confirm Password
function checkPassword2(password2) {
    if (password2.value === "") {
        showError(password2, "Password confirmation is required");
    } else {
        checkPasswordsMatch(password, password2);
    }
}

// Check Passwords Match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match");
    } else {
        showSuccess(input2);
    }
}

// Get Field Names
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check Input Length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Event Listener
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkUsername(username);
    checkEmail(email);
    checkPassword(password);
    checkPassword2(password2);
})