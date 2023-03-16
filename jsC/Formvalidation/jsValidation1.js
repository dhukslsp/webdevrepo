function validateForm() {
    // validating name
  let name = document.forms["myForm"]["fname"].value;
  if (name == "") {
    alert("Form must be filled out");
  }
  else{
    // alert(name);
  }
function checkEmail(Email){
    for(let i = 0;i<Email.length;i++){
        if(Email[i] == "@"){
            return true;
        };
    }
    return false;
}
function validatePhoneNo(phone){
    if(phone.length<10 ||phone.length>10){
        return false;
    }
    else{
        return true
    }
}
function validatePassword(password){
    if(password.length<10){
        return "password should be less then 10 ";
    }
    else{
        let capitals = 0; //for caunting the no of capital letters
        for(let i = 0;i<password.length;i++){
            if(password[i] === password[i].toUpperCase()){
                capitals++;
            }            
        }
        if(capitals>0){

        }
        else{
            return "Password should have a capital letter";
        }
    }
    return true;
}
//   vlidating email
let Email = document.forms["myForm"]["Email"].value;
if(Email === ""){
    alert("Fill E mail section");
}
else if(checkEmail(Email)){

}
else{
    alert("Please do use @ in the E mail");
};
// end in validating emial
// start validating phone
let phone = document.forms["myForm"]["Phone"].value;
if(validatePhoneNo(phone)){

}
else{
    alert("The Phone no is eith grater than or less than 10 Digits");
}
let password = document.forms["myForm"]["password"].value;
if(validatePassword(password)!= true){
    alert(validatePassword(password))
}
else{

}
}