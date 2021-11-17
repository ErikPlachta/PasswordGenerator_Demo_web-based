/* Defining OOP

    1. On load
      - _build()
        creates on click event listener for button

    2. User clicks button with id #generate
      - get_Password()
          on click runs

    3. User gets prompts

    4. Password is generated in HTML
      - set_Password()

*/

/*
  1. On Load 
      - GLOBAL VARIABLES
*/


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", get_GeneratedPassword);



/*
  2. User clicks on Generate Password
    
*/

// Once Generated, write password to the #password input
function get_GeneratedPassword() {
  // var password = _generatePassword();
  var passwordText = document.querySelector("#password").value= _generatePassword();

  // passwordText.value = password;
}

/* 
  PRIVATE FUNCTIONS
*/

// Manages generating password
function _generatePassword() {
  /* Reads user args, sends results */
  
  // Made True if at least 1 checkbox is clicked
  var decided = false; 
  
  // Get input 
  var choices = _get_UserInput();
  var choices_validated = _get_ValidationResults(choices);

  return choices;
}

// Reads user input
function _get_UserInput(){
  // Object holding User Input results

  // Get's values from HTML Document and stores in object for validation
  var choices = {
      // 1. Lowercase boolean #choice_AlphaLowercase
      choice_AlphaLowercase : (document.querySelector("#choice_AlphaLowercase").checked),
      // 2. Capital boolean  #choice_AlphaUppercase
      choice_AlphaUppercase : (document.querySelector("#choice_AlphaUppercase").checked),
      // 3. Numeric boolean #choice_Numeric
      choice_Numeric : (document.querySelector("#choice_Numeric").checked),
      // 4 Special Characters boolean #choice_SpecialChar
      choice_SpecialChar : (document.querySelector("#choice_SpecialChar").checked),
      // 5 verify password length #choice_Length
      choice_Length : (document.querySelector("#choice_Length").value),
  };
  
  // verify if choice was made
  var $results = _get_ValidationResults(choices);

  // GET the password generated
  
  //return password to HTML
  return $results;
};

function _get_ValidationResults(choices){
  
  var $results = [
    //boolean variable to see if EU made choice.
    choice_WasMade_bool = false,
    // list holding key names for reference of what to generate from.
    choices_Selected = ["test"],
  ];
  
  // Itterate thru keys in obj choices
  Object.keys(choices).forEach( function(key) {  
    // For everything except for length
    //if (key != "choice_Length") {
      // check to see if at least 1 value is selected
      if (choices[key] != true){
        // If YES, user made a choice so true
        $results.choice_WasMade_bool = true;
        // console.log(key, choices[key]);
      } 
      // else {
      //   console.log(key, choices[key]);
      // }
      
    });
  
  // Object.keys(choices).forEach( function(key) {
  //   console.log(key, choices[key]);
  // });

  return $results;
};

// Builds password based on user input
function _set_Password(choices){
  
  var generatedPassword = '';
  
  /* DEFINING LOCAL VARIABLES TO POPULATE PASSWORDS */
  var char_AlphaLowercase = 'abcdefghijklmnopqrstuvwxyz';
  var char_AlphaUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var char_Numeric = '0123456789';
  var char_Special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  return generatedPassword;
}