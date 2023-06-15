
var invalid = "Please provide valid email.";
var valid = " Email is valid";
var empty = "Email is empty ";
var errorIcon = document.getElementsByClassName("error-icon");

function validation() {
  var pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$";
  var email = document.getElementById("email").value;
  if (email == null || email == "") {
    document.getElementById("error").innerHTML = empty;
  } else if (email.match(pattern)) {
    document.getElementById("error").innerHTML = valid;
    document.getElementById("error").style.color = "green";
  } else {
    document.getElementById("error").innerHTML = invalid;
    errorIcon[0].style.display = "inline";
  }
}
