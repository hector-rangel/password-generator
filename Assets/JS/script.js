// Assignment code here
var useLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var useSpecial = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var useNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getPasswordOptions() {
  var passLength = parseInt(prompt("How long do you want your password to be?"));
  if (isNaN(passLength) === true) {
    alert("Must be a number!");
    return
  }
  if (passLength < 8 || passLength > 128) {
    alert("Must be at least 8 characters, and less than 128");
    return
  }

  var hasSpecialChar = confirm("Do you want to use special characters?");

  var hasNumberChar = confirm("Do you want to use numbers?");

  var hasLowerChar = confirm("Do you want to use lower case letters?");

  var hasUpperChar = confirm("Do you want to use upper case letters?");

  if (!hasSpecialChar && !hasNumberChar && !hasLowerChar && !hasUpperChar)
  {
    alert("password must include at least one of the following lowercase, uppercase, special or number");
    return;
}

// storing the user input into an object
var passwordOptions = {
  passLength: passLength,
  hasSpecialChar: hasSpecialChar,
  hasNumberChar: hasNumberChar,
  hasLowerChar: hasLowerChar,
  hasUpperChar: hasUpperChar
}
return passwordOptions;
};

function getRandomArrayEl(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randEl = arr[randIndex];
  return randEl;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword () {
  var options = getPasswordOptions();
  var result = [];
  var possibleChar = [];
  var guaranteedChar = [];
  if (options.hasSpecialChar) {
    possibleChar = possibleChar.concat(useSpecial);
    guaranteedChar.push(getRandomArrayEl(useSpecial))
  }
  if (options.hasNumberChar) {
    possibleChar = possibleChar.concat(useNumber);
    guaranteedChar.push(getRandomArrayEl(useNumber))
  }
  if (options.hasLowerChar) {
    possibleChar = possibleChar.concat(useLower);
    guaranteedChar.push(getRandomArrayEl(useLower))
  }
  if (options.hasUpperChar) {
    possibleChar = possibleChar.concat(userUpper);
    guaranteedChar.push(getRandomArrayEl(userUpper))
  }
  for (var i = 0; i < options.passLength; i++) {
    var randomPassword = getRandomArrayEl(possibleChar);
    result.push(randomPassword);
  }
  return result.join('');
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

