function validate() {
    var username = document.getElementById('uname');
    var password = document.getElementById('pass');

    if (username.value.trim() == "" || password.value.trim() == "") {
        alert('Invalid username or password');

        username.style.border = 'red 2px solid';

        username.value = "";
        password.value = "";
        return false;
    }
    else {
        //alert('Successful')
        alert('Login Successful' + "  " + 'Username::' + username.value + "  "
            + 'Password::' + password.value);

        username.value = "";
        return true;
    }
}