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
    } else {
        console.log("E-mail is niet leeg");
        console.log(email.value);
    }

    if (password.value == '') {
        console.log("Password is leeg");
        errorDiv.append('Wachtwoord niet ingevuld');
        error = true;
    } else {
        console.log("Password is niet leeg");
        console.log(password.value);
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