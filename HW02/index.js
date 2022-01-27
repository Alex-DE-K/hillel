const userLogin = prompt ("Pls enter Login");

if (userLogin === 'admin') {
    userPassword = prompt ("Pls enter the password");
    

}
else if (userLogin === null) {
    alert ("exit");
}
else {
    alert ("user unknown");
}