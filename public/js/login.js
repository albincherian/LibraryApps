// let mail = document.getElementById("name");
// let err = document.getElementById("err");
// function emailValidation(){
//     let regex = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\.-]+).(.[a-z]{2,3}).(.[a-z]{2,3})?$/
//     if(regex.test(mail.value)){
//         // err.innerHTML = "Valid";
//         // err.style.color ="green";
//         return true;
//     }

//     else{
//         // err.innerHTML ="Invalid";
//         // err.style.color = "red";
//         alert("Email Id is not valid!!!");
//         return false;
//     }
// }


function passwordValidation() {
    var str = document.getElementById('str');
    var strongRgx = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRgx = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRgx = new RegExp("(?=.{5,}).*", "g");
    var pwd = document.getElementById("pwd");
    if (pwd.value.length == 0) {
        str.innerHTML = 'Type Password';
    } else if (false == enoughRgx.test(pwd.value)) {
        str.innerHTML = '<span style="color:red"><b>add more characters</b></span>';
        return false;
    } else if (strongRgx.test(pwd.value)) {
        str.innerHTML = '<span style="color:green"><b>Strong!</b></span>';
        return true;
    } else if (mediumRgx.test(pwd.value)) {
        str.innerHTML = '<span style="color:orange"><b>Medium!</b></span>';
        return false;
    } else {
        str.innerHTML = '<span style="color:red"><b>Weak!</b></span>';
        return false;
    }
}