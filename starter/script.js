// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  
  //prompt the user to enter a password between 10 and 64 characters.
   var passwordLength = prompt('Please enter a number between 10 and 64 to generate your password');

    if (passwordLength < 10 || passwordLength > 64) {
      alert('Please enter a valid number between 10 and 64');
  } else if (isNaN(passwordLength)) {
      passwordLength = prompt('Please enter a valid number');
  } else {
      alert('Your password will be ' + passwordLength + ' characters long');
  };

  //asking the user if he/she would like to include lowercase characters.
  var lower = confirm('Would you like your password to contain lower case letters?');

    if(lower) {
      alert('Your password will have lowercase characters');
  } else {
      alert('Your password will NOT have lowercase characters');
  };

  //asking the user if he/she would like to include uppercase characters.
  var upper = confirm('Would you like your password to contain upper case letters?');

    if (upper) {
      alert('Your password will have uppercase characters');
  } else {
      alert('Your password will NOT have uppercase characeters');
  };
  

  //asking the user if he/she would like to include special characters.
  var spec = confirm('Would you like your password to contain special characters?');

    if (spec) {
      alert('Your password will have special characters');
  } else {
      alert('Your password will NOT have special characters');
  };


  //asking the user if he/she would like to include numbers in the password
  var numbers = confirm('Would you like your password to contain numbers?');

    if (numbers) {
      alert('Your password will have numbers')
  } else {
      alert('Your password will NOT have numbers');
  };


  //checking if at least one character type is selected if not alerting to do so.
    if (lower === false && upper === false && spec === false && numbers === false){
      alert('! Please select at least one character type !');
  };

  return [passwordLength,lower,upper,spec,numbers];
};


// Function for getting a random element from an array
function getRandom(arr) {
  var randomCharacter = arr[Math.floor(Math.random() * arr.length)];
    return randomCharacter;
}

// Function to generate password with user input
function generatePassword() {
var userPassword = getPasswordOptions();
}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);