function login(form) {
 event.preventDefault();
 var login_username = form.log_username.value,
  login_password = form.log_password.value;
 var form = document.getElementById("login");
 // If confirm password not entered 
 if ((login_username.length == 0) && (login_password.length == 0)) {
  alert("Please enter login credentials... BITCH");
  return false;
 }
 //If username blank
 else if (login_username.length == 0) {
  alert("Please enter your username.");
  return false;
 }
 // If password not entered 
 else if (login_password.length == 0) {
  alert("Please enter your password.");
  return false;
 }
 else {
  alert("You are now logged in!")
  return true;
 }
}

function register(form) {
 event.preventDefault();
 var register_password = form.reg_password.value,
  register_firstname = form.firstname.value,
  register_lastname = form.lastname.value,
  register_username = form.reg_username.value;

 var form = document.getElementById("register");
 // If confirm password not entered 
 if (register_firstname.length == 0)
  alert("Please enter your first name");
 // If confirm password not entered 
 else if (register_lastname.length == 0)
  alert("Please enter your last tname");
 // If confirm password not entered 
 else if (register_username.length == 0)
  alert("Please enter your username");
 // If password not entered 
 else if (register_password.length == 0)
  alert("Please enter Password");
 // If same return True. 
 else {
  alert("You are registered")
  return true;
 }
}