// Assignment code here
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function generatePassword() {
  var allCharacters = prompt("choose a length of at least 8 characters and no more than 128");
  if (
    allCharacters < 8 || allCharacters > 128) {
    alert("please, try again");
    return generatePassword();
  }
  var includeLower = confirm("Do you want to add a lowercase?");
  var includeUpper = confirm("Do you want to use a uppercase");
  var special = confirm("Do you want to use special characters");
  var num = confirm("Do you want to use a number");
  if (
    !includeLower && !includeUpper && !special && !num
  )
  {
    alert("password must include at least one of the following lowercase, uppercase, special or number");
  return generatePassword();
  };
};




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
