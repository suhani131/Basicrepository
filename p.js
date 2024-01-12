function validateForm() {
  var firstName = document.getElementById("firstname").value;
  
  var lastname = document.getElementById("lastname").value;
  var course = document.getElementById("course").value;
  var Gender = document.getElementById("Gender").value;
  var Phone = document.getElementById("Phone").value;
  var Address  = document.getElementById("Address ").value;
  var Email= document.getElementById("Email").value;
  var Password= document.getElementById("Password").value;
  var ReTypePassword= document.getElementById("Re-type password").value;

  if (firstName === "") {
    alert ("please enter your first name")
    return false;
  }

  

  if (lastname === "") {
    alert ("please enter your last name")
    return false;
  }

  if (course === "") {
    alert ("please enter your course ")
    return false;
  }

  if (Gender === "") {
    alert ("please enter your gender")
    return false;
  }

  if (Phone === "") {
    alert ("please enter your Phone no.")
    return false;
  }

  if (Address === "") {
    alert ("please enter your Address")
    return false;
  }

  if (Email === "") {
    alert ("please enter your Email")
    return false;
  }

  if (Password.length < 6) {
    alert ("please enter your Password in 6 characters")
    return false;
  }

  if (ReTypePassword === "") {
    alert ("please enter your Re-type password")
    return false;
  }

  var genderChecked = false;
  var genderInputs = document.querySelectorAll('input[name="gender"]');
  for (var i = 0; i < genderInputs.length; i++) {
    if (genderInputs[i].checked) {
      genderChecked = true;
      break;
    }
  }

  return genderChecked; // Form submission is allowed
}