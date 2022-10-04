function generatePassword() {
  var numericvalues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercasevalues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercasevalues = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialvalues = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleCharacters = [];

  // creating prompts for password generator
  characternumbers = prompt("Choose between 8-128 characters.");
  if (characternumbers < 8 || characternumbers > 128) {
    return "Please choose a valid number of characters.";
  } else if (isNaN(characternumbers)) {
    characternumbers = prompt("Please enter a valid number.");
  }
  else {
    alert("Your password will be " + characternumbers + " characters long.");
    
  }

  lowercase = confirm("Lowercase characters?");
  if (lowercase) {
    var turnToLowercase = alert("Lowercase characters were selected.");
  }
  else {
    alert("No lowercase characters were used.");
  }

  uppercase = confirm("Uppercase characters?");
  if (uppercase) {
    alert("Uppercase characters were selected.");
  }
  else {
    alert("No uppercase characters were used.");
  }

  hasNumbers = confirm("Numbers?");
  if (hasNumbers) {
    alert("Numbers were selected.");
  }
  else {
    alert("No numbers were used.");
  }

  hasSpecial = confirm("Special characters?");
  if (hasSpecial) {
    alert("Special characters were selected.");
  }
  else {
    alert("No special characters were used.");
  }

  if (lowercase === false && uppercase === false && hasNumbers === false && hasSpecial === false) {
    return "Please select at least one character type.";
  };

  // selected group characters
  if (lowercase) {
    possibleCharacters = possibleCharacters.concat(lowercasevalues);
  }
  if (uppercase) {
    possibleCharacters = possibleCharacters.concat(uppercasevalues);
  }
  if (hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numericvalues);
  }
  if (hasSpecial) {
    possibleCharacters = possibleCharacters.concat(specialvalues);
  }

  // pick characters for new passwords
  let finalPassword = ""
  for (let i = 0; i < characternumbers; i++) {
    let rng =[Math.floor(Math.random() * possibleCharacters.length)];
    // or finalPassword += possibleCharacters[rng];
    finalPassword = finalPassword + possibleCharacters[rng];
  }
  return finalPassword;
};

// generate element
var Btn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// generate button
Btn.addEventListener("click", writePassword);