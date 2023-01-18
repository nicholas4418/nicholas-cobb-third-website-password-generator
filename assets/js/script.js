// Assignment Code
var generateBtn = document.querySelector("#generate");
// variables to hold the lower, upper, special, and number characters for password generation
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "`", "~"]
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var passLimit = (prompt("Please choose the length of your password! [Must be between 8 and 128 characters!]"));

  //while loop used to allow the user to try again if they input a value that is out of the scope of what is listed
  while (passLimit < 8 || passLimit > 128) {
    //alert displays if user value is out of scope
    alert("ERROR: Selected value is out of boundaries! Please Try Again!");
    var passLimit = (prompt("Please choose the length of your password! [Must be between 8 and 128 characters!]"));
  }
  //alert displays if user value is within scope
  alert("Confirmed: Password Length set to " + passLimit);

  //This series of "confirms" will allow the user to choose the parameters for the password
  var confirmLow = confirm("Would you like your password to contain lowercase characters?");

  if (confirmLow == true) {
    alert("Confirmed: Password will contain lowercase characters!");
  } else if (!confirmLow) {
    alert("Confirmed: Password will NOT contain lowercase characters!");
  }

  var confirmUp = confirm("Would you like your password to contain uppercase characters?");

  if (confirmUp == true) {
    alert("Confirmed: Password will contain uppercase characters!");
  } else if (!confirmUp) {
    alert("Confirmed: Password will NOT contain uppercase characters!");
  }

  var confirmNums = confirm("Would you like your password to contain numbers?");

  if (confirmNums == true) {
    alert("Confirmed: Password will contain numbers!");
  } else if (!confirmNums) {
    alert("Confirmed: Password will NOT contain numbers!");
  }

  var confirmSpec = confirm("Would you like your password to contain special characters?");

  if (confirmSpec == true) {
    alert("Confirmed: Password will contain special characters!");
  } else if (!confirmSpec) {
    alert("Confirmed: Password will NOT contain special characters");
  }




  //This while loop will allow the user to choose the parameters again if they select no for everything.
  while (!confirmLow && !confirmUp && !confirmNums && !confirmSpec) {
    alert("ERROR: You must select at least one parameter to generate password!");
    var confirmLow = confirm("Would you like your password to contain lowercase characters?");

    if (confirmLow == true) {
      alert("Confirmed: Password will contain lowercase characters!");
    } else if (!confirmLow) {
      alert("Confirmed: Password will NOT contain lowercase characters!");
    }

    var confirmUp = confirm("Would you like your password to contain uppercase characters?");

    if (confirmUp == true) {
      alert("Confirmed: Password will contain uppercase characters!");
    } else if (!confirmUp) {
      alert("Confirmed: Password will NOT contain uppercase characters!");
    }

    var confirmNums = confirm("Would you like your password to contain numbers?");

    if (confirmNums == true) {
      alert("Confirmed: Password will contain numbers!");
    } else if (!confirmNums) {
      alert("Confirmed: Password will NOT contain numbers!");
    }

    var confirmSpec = confirm("Would you like your password to contain special characters?");

    if (confirmSpec == true) {
      alert("Confirmed: Password will contain special characters!");
    } else if (!confirmSpec) {
      alert("Confirmed: Password will NOT contain special characters");
    }

  }

  alert("Generating Password!");

  //initialize array that will store selected parameter characters
  var passChars = [];

  //The following if statements control what kind of characters are added to the passChars variable
  if (confirmLow == true) {
    passChars = passChars.concat(lowerChars);
  }

  if (confirmUp == true) {
    passChars = passChars.concat(upperChars);
  }

  if (confirmNums == true) {
    passChars = passChars.concat(nums);
  }

  if (confirmSpec == true) {
    passChars = passChars.concat(specChars);
  }

  //initialized prePass variable to be filled with randomly selected chars from the passChars array, based on user selected limit
  var prePass = "";

  //This for loop will randomly select characters from the passChars array and add them to the prePass variable, limited by the password length selected by the user earlier.
  for (var i = 0; i < passLimit; i++) {
    prePass = prePass + passChars[Math.floor(Math.random() * passChars.length)];
  }

  return prePass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
