let email = document.getElementById("email");
let error = document.getElementById("error");
function validateEmail(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\.-]+).(.[a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        error.innerHTML = "Valid";
        error.style.color ="green";
        return true;
    }

    else{
        alert("Enter the email id correctly in format : example@mail.com");
        return false;
    }
}


function passwordstrength() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{5,}).*", "g");
    var pwd = document.getElementById("pwd");
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Type Password';
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:red"><b>add more characters</b></span>';
        return false;
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green"><b>Strong!</b></span>';
        return true;
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange"><b>Medium!</b></span>';
        return false;
    } else {
        strength.innerHTML = '<span style="color:red"><b>Weak!</b></span>';
        return false;
    }
}

function confirmpassword(){
    var password = document.getElementById("pwd");
    var confirmpassword = document.getElementById("cmpwd");
    var err = document.getElementById("err");
    if (password.value != confirmpassword.value){
        err.innerHTML="invalid";
        err.style.color = "red";
        // alert("Passwords do not match");
        return false;
     
    }
    else{
        err.innerHTML = "valid";
        err.style.color = "green";
        return true;
    }
}
function fillall(){
    let x = validateEmail();
    let y = passwordstrength();
    let z = confirmpassword();

    if (x == false){
        // alert("Enter the email correctly in format : example@mail.com");
        return false;

    }

    else if(y == false){
        alert("Enter a strong password");
        return false;
    }
    else if (z == false){
        alert("Re-Enter the same password");
        return false;
    }
    else{
        return true;
    }
}