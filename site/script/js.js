var correctEmail = 'login@this.com';
var correctPassword = 'password';
var email = document.getElementById('email');
var password = document.getElementById('wachtwoord');
var remember = document.getElementById('remember');

if (localStorage.getItem('email') == '' || localStorage.getItem('email') == null) {
    localStorage.setItem('email', '');
}

if (localStorage.getItem('password') == '' || localStorage.getItem('password') == null) {
    localStorage.setItem('password', '');
}

if (localStorage.getItem('remember') == '' || localStorage.getItem('remember') == null) {
    localStorage.setItem('remember', false);
}

email.value = localStorage.getItem('email');
password.value = localStorage.getItem('password');
remember.checked = localStorage.getItem('remember');

function login() {
    var errorDiv = document.querySelector('.error--list');
    errorDiv.innerHTML = '';
    var error = false;
    linebreak = document.createElement("br");


    if (email.value == '') {
        console.log("E-mail is leeg");
        errorDiv.append('E-mail niet ingevuld');
        errorDiv.appendChild(linebreak);
        error = true;
        errorDiv.style.left = '100px';

    } else {
        console.log("E-mail is niet leeg");
        console.log(email.value);
    }

    if (!email.value.includes('@') && !email.value == '') {
        console.log("E-mail niet goed ingevuld");
        errorDiv.append('E-mail niet goed ingevuld');
        errorDiv.appendChild(linebreak);
        error = true;
        errorDiv.style.left = '80px';
    }

    if (password.value == '') {
        console.log("Password is leeg");
        errorDiv.append('Wachtwoord niet ingevuld');
        error = true;
        errorDiv.style.left = '80px';
    } else {
        console.log("Password is niet leeg");
        console.log(password.value);
    }

    if (email.value == correctEmail && password.value == correctPassword) {
        errorDiv.style.left = '80px';
    } else if (email.value != correctEmail && password.value != correctPassword && error == false) {
        console.log('Verkeerde codes');
        errorDiv.style.left = '40px';
        errorDiv.append('E-mail of wachtwoord is niet correct');
        error = true;
    }

    if (remember.checked) {
        localStorage.setItem('remember', true);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
    } else {
        localStorage.setItem('remember', false);
        localStorage.setItem('email', '');
        localStorage.setItem('password', '');
    }

    if (!error) {
        location.href = 'kies-patient.html';
    }
    event.preventDefault();
    return false;
}