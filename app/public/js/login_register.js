function login(form) {
 var login_username = form.log_username.value,
  login_password = form.log_password.value;
 var form = document.getElementById("login_form");
 // If confirm password not entered 
 if ((login_username.length == 0) && (login_password.length == 0)) {
  event.preventDefault();
  alert("Please enter login credentials.");
  return false;
 }
 //If username blank
 else if (login_username.length == 0) {
  event.preventDefault();
  alert("Please enter your username.");
  return false;
 }
 // If password not entered 
 else if (login_password.length == 0) {
  event.preventDefault();
  alert("Please enter your password.");
  return false;
 }
 else {
  return true;
 }
}

function register(form) {
 var password1 = form.reg_password1.value,
  password2 = form.reg_password2.value,
  register_name = form.name.value,
  register_username = form.reg_username.value,
  register_email = form.email.value;

 var email_regex = /^[a-zA-Z0-9\._%+-]+@[A-Za-z0-9.-]+[\.A-Za-z]{2,3}$/;
 var password_regex = /^((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,})$/;

 var form = document.getElementById("register_form");
 // If confirm password not entered 
 if (register_name.length == 0) {
  event.preventDefault();
  alert("Please enter your first and last name.");
  return false;
 }
 // If confirm password not entered 
 if (register_email.length == 0 || email_regex.test(register_email.match)) {
  event.preventDefault();
  alert("Please enter a valid email address.");
  return false;
 }
 // If confirm password not entered 
 if (register_username.length == 0) {
  event.preventDefault();
  alert("Please enter a username.");
  return false;
 }
 // If password not entered 
 if (password1.length < 8) {
  event.preventDefault();
  alert("Password must be at least 8 characters.");
  return false;
 }
 if (password2.length < 8 || password2.length == 0) {
  event.preventDefault();
  alert("Please enter confirmation password.");
  return false;
 }
 if (password_regex.test(password1) == false) {
  event.preventDefault();
  alert("Invalid Password! Password must include:\n1 uppercase\n1 number\n1 special character.");
  return false;
 }
 if (password1 != password2) {
  event.preventDefault();
  alert("Passwords don't match. Try again!");
  return false;
 }
 // If same return True. 
 return true;
}

function openNav() {
 document.getElementById("mySidenav").style.width = "250px";
 document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
 document.getElementById("mySidenav").style.width = "0";
 document.getElementById("main").style.marginLeft = "0";
}

function registerClass() {

}