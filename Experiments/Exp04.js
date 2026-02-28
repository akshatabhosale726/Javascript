function SubmitButtonClick(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    //to clear old message
    document.getElementById('nameError').innerHTML="";
    document.getElementById('emailError').innerHTML="";
    document.getElementById('passwordError').innerHTML="";

    let isValid = true;
    if(name == ""){
        document.getElementById('nameError').innerHTML="Name field is required."
        isValid= false;
    }
      if(email !== "" && email.includes("@") && email.includes(".") && email.indexOf("@") > 0 && email.indexOf(".") > email.indexOf("@")){
        document.getElementById('emailError').innerHTML="Email field is required."
        isValid = false;
   }
    if(password ==""){
        document.getElementById('passwordError').innerHTML="Password field is required."
    }

}