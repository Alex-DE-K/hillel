const userLogin = prompt ("Pls enter Login");
let userPassword = 0;

if (userLogin === 'admin') {
    userPassword = prompt ("Pls enter the password");

        // if (userPassword === 'BlackMaster') {
        //     alert ("wellcome");
        // } else if (userPassword === null){
        //     alert ("exit");
        // } else {
        //     alert ("wrong password");
        // }

        switch (userPassword) {
            case 'BlackMaster':
                alert ("wellcome");
                break;
            case null:
                alert ("exit");
                break;
            default: 
                alert ("wrong password");
                break;
        }

} else if (userLogin === null) {
    alert ("exit");
} else {
    alert ("user unknown");
}
