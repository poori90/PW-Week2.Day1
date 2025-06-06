//Classroom Assignment   : 1   Strings in JS -  Palindrome 


function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log("The Reveresed String is : " + reversed);
  return reversed;
}

function isPalindrome(str) {
  const reversedStr = reverseString(str);
  return str === reversedStr;
}

const testString = "madam";
console.log("Is Palindrome:", isPalindrome(testString)); 

const testString2 = "hello";
console.log("Is Palindrome:", isPalindrome(testString2));