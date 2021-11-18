//*--------------------------------------------------------------------------*//
//-- 1. Grab el from HTML for JS
    
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", get_GeneratedPassword);


//*--------------------------------------------------------------------------*//
//-- 2. User clicks on Generate Password
    

// Once Generated, write password to the #password input
function get_GeneratedPassword() {
  // var password = _generatePassword();
  var passwordText = document.querySelector("#password").value= generatePassword();

  // passwordText.value = password;
}

/*----------------------------------------------------------------------------*/
//--  PRIVATE FUNCTIONS

/*----------------------------------------------------------------------------*/
//--  Manages generating password
function generatePassword() {
  /* Reads user args, sends results */
  
  //payload to html
  results = ''; 
  // Get input 
  var choices = get_UserInput();
  // Made True if at least 1 checkbox is clicked
  var choice_WasMade_bool = check_ChoiceWasMade(choices);
  if (choice_WasMade_bool) {
    if (check_PasswordLength(choices.choice_Length)) {
      // results = "worked";
      results = get_Password(choices);
    }
    else {
      results = "User made a choice, but password length not within params.";
    }
  } else {
    results = "User MUST select an option first.";
  }

  return results;
}

/*----------------------------------------------------------------------------*/
//-- Reads user input
function get_UserInput(){
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
  
  return choices;
};

/*----------------------------------------------------------------------------*/
//--verify if eu made choice
function check_ChoiceWasMade(choices){
  
  var choice_WasMade_bool = false; //boolean variable to see if EU made choice.
  
  Object.keys(choices).forEach( function(key) {  
    // For everything except for length
    if (key != "choice_Length") { 
      // check to see if at least 1 value is selected   
      if (choices[key].toString() == "true"){ // If TRUE, user made a choice so true
        choice_WasMade_bool = true;
        
      }
    };
  });
  return choice_WasMade_bool;
};
/*----------------------------------------------------------------------------*/
//-- verify length in parameters
function check_PasswordLength(choice_Length){
  var min = 8;
  var max = 128;
  choice_Length_bool = false;
  if (choice_Length >= min && choice_Length <= max){
    choice_Length_bool = true;
  }
  return choice_Length_bool;
};


/*----------------------------------------------------------------------------*/
//-- Builds password based on user input
function get_Password(choices){
  
  //String holder to be returned as password
  var generatedPassword = '';
  
  // OBJ to hold potential characters for building password
  var options = {
    choice_AlphaLowercase : "abcdefghijklmnopqrstuvwxyz",
    choice_AlphaUppercase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    choice_Numeric : "0123456789",
    choice_SpecialChar : " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
  }

  // String holder for charactres based on EU's selection. ( To be split to array below)
  var char_UserSelected = ""; 
  Object.keys(choices).forEach( function(key) {
    // if I need to pull values for spec characters
    if(key in options){
      // and user requested it
      if(choices[key]){
        // build string to pick from
        char_UserSelected = char_UserSelected +options[key];
      }
    }
  });
  
  for (var i=0; i < choices.choice_Length; i++){
    generatedPassword = generatedPassword + (char_UserSelected[Math.floor(Math.random() * char_UserSelected.length)]);
  }
  
  
  return generatedPassword;
};

