var token;
var tokenCount;
var attempts = 0;
var timeleft = 30;
var send = true;

var bEmail;
var ownerEmail;
var smsCode;

function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    return true;
  } else {
    alert("Invalid email address!");

    input.focus();

    return false;
  }
}

function ValidatePhone(input) {
  var validRegex = /^[0-9]+$/;

  if (input.value.match(validRegex)) {
    if (input.value.length < 5 || input.value.length > 15) {
      alert("Invalid number");
      return false;
    } else {
      return true;
    }
  } else {
    alert("Invalid number");

    input.focus();

    return false;
  }
}

function openPrompt() {
  var modal = document.getElementById("myModal");

  modal.style.display = "block";
}

function openNewPrompt() {
  var modal = document.getElementById("newModal");

  modal.style.display = "block";
}

function Cancel() {
  var modal = document.getElementById("myModal");

  modal.style.display = "none";
}

function confirmNewPass() {
  var pass = document.getElementById("pass").value;
  var vpass = document.getElementById("vpass").value;

  if (pass != vpass) {
    alert("Password and verify password should match");
    return;
  } else if (pass.length < 8) {
    alert("Password cannot be less than 8 characters");
    return;
  }
}

var passCheck = function () {
  if (
    document.getElementById("pass").value ==
    document.getElementById("vpass").value
  ) {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML = "matching";
  } else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerHTML = "not matching";
  }
};

function submitWithSMS() {
  openNewPrompt();

  // var sms = document.getElementById('otp');
  // var email = document.getElementById('ownerEmail');

  // var branchEmail = document.getElementById('branchEmail');

  // if (ValidateEmail(email) === false) {

  //     return;
  // }

  // if (ValidateEmail(branchEmail) === false) {

  //     return;
  // }

  // if (ValidatePhone(sms) === false) {

  //     return;
  // }
}

function sendDetails() {
  openPrompt();
}
