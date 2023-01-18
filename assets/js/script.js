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
  while(passLimit < 8 || passLimit > 128) {
    //alert displays if user value is out of scope
    alert("ERROR: Selected value is out of boundaries! Please Try Again!");
    var passLimit = (prompt("Please choose the length of your password! [Must be between 8 and 128 characters!]"));
  }
    //alert displays if user value is within scope
    alert("Confirmed: Password Length set to " + passLimit);

    var confirmLow = confirm("Would you like your password to contain lowercase characters?");
    var confirmUp = confirm("Would you like your password to contain uppercase characters?");
    var confirmNums = confirm("Would you like your password to contain numbers?");
    var confirmSpec = confirm("Would you like your password to contain special characters?");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
