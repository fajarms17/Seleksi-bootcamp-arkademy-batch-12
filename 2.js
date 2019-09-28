function isAcceptedUsername(username){
    var Regex = /^[a-z A-Z]{6,6}$/ ;
    return Regex.test(username);
}

if(isAcceptedUsername("Fajarm")){
    alert("Username is valid");

}else{
    alert("Username is invalid");
}

function isAcceptedPassword(password){
    var Regex = /^7[a-z A-Z 0-9 \W]{5,10}$/ ;
    return Regex.test(password);
}

if(isAcceptedPassword("p@ssWord9")){
    alert("Password is valid");

}else{
    alert("Password is invalid");
}
