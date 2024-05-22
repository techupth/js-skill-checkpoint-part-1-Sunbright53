let checkPasswordStrength = (userPassword) => {
  if (userPassword.length < 6) {
    return "Weak";
  } else if ((userPassword.length = 6 && userPassword.length < 10)) {
    return "Medium";
  } else {
    return "Strong";
  }
};
let userPassword1 = "swnalWadqQ";
console.log(checkPasswordStrength(userPassword1));

let userPassword2 = "TechUp";
console.log(checkPasswordStrength(userPassword2));

let userPassword3 = "abcde";
console.log(checkPasswordStrength(userPassword3));
