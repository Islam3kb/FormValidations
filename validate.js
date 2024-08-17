const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

// add event
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});
const sendData = (sRate, count) => {
  if (sRate === count) {
    alert("registration successfull");
    swal("Welcom!", "Registration Successfull", "success");
  }
};
// for final data validation
const successMsg = () => {
  let formCon = document.getElementsByClassName("form-control");

  var count = formCon.length - 1;

  for (var i = 0; i < formCon.length; i++) {
    if (formCon[i].className === "form-control success") {
      var sRate = 0 + i;
      sendData(sRate, count);
    }
  }
};

//  more email validate
const isEmail = (emailVal) => {
  var atsymbol = emailVal.indexOf("@");
  if (atsymbol < 1) return false;
  var dot = emailVal.lastIndexOf(".");
  if (dot < atsymbol + 2) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
};

// define the validate function
const validate = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  // validate username
  if (usernameVal === "") {
    setErrorMsg(username, "username cannot be blank");
  } else if (usernameVal.length < 2) {
    setErrorMsg(username, "username min 3 char");
  } else {
    setSuccessMsg(username);
  }
  // validate email
  if (emailVal === "") {
    setErrorMsg(email, "email cannot be blank");
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, "not a valid Email");
  } else {
    setSuccessMsg(email);
  }

  // validate phone
  if (phoneVal === "") {
    setErrorMsg(phone, "phone number cannot be blank");
  } else if (phoneVal.length < 11) {
    setErrorMsg(phone, "not a valid phone number");
  } else {
    setSuccessMsg(phone);
  }

  // validate password
  if (passwordVal === "") {
    setErrorMsg(password, "Password cannot be blank");
  } else if (passwordVal.length < 5) {
    setErrorMsg(password, "password minimum 6 char");
  } else {
    setSuccessMsg(password);
  }
  // validate confirm password
  if (cpasswordVal === "") {
    setErrorMsg(cpassword, "Confirm password cannot be blank");
  } else if (cpasswordVal.length < 5) {
    setErrorMsg(cpassword, "Confirm password minimum 6 char");
  } else {
    setSuccessMsg(cpassword);
  }

  successMsg();
};

function setErrorMsg(input, errormsgs) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errormsgs;
}

function setSuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
