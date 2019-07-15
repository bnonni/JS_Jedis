function login(form) {
 var login_username = form.log_username.value,
  login_password = form.log_password.value;
 var form = document.getElementById("login_form");
 // If confirm password not entered 
 if ((login_username.length == 0) && (login_password.length == 0)) {
  alert("Please enter login credentials.");
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
  return true;
 }
}

function register(form) {
 var register_password = form.reg_password.value,
  register_firstname = form.firstname.value,
  register_lastname = form.lastname.value,
  register_username = form.reg_username.value;

 var form = document.getElementById("register_form");
 // If confirm password not entered 
 if (register_firstname.length == 0) {
  alert("Please enter your first name");
  return false;
 }
 // If confirm password not entered 
 if (register_lastname.length == 0) {
  alert("Please enter your last name");
  return false;
 }
 // If confirm password not entered 
 if (register_username.length == 0) {
  alert("Please enter your username");
  return false;
 }
 // If password not entered 
 if (register_password.length == 0) {
  alert("Please enter your password");
  return false;
 }
 // If same return True. 
 return true;
}