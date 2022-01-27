const userLogin = prompt ("Pls enter Login");

if (userLogin === 'admin') {
    userPassword = prompt ("Pls enter the password");

        if (userPassword === 'BlackMaster') {
            alert ("wellcome");
        } else if (userPassword === null){
            alert ("exit");
        } else {
            alert ("wrong password");
        };   

} else if (userLogin === null) {
    alert ("exit");
} else {
    alert ("user unknown");
};