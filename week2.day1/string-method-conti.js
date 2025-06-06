
/* String Declaration  :

1. String Litral
2. Object Literal */

//String Literal - " " ,'' ,``  // String pool memory //storing same value of two different variables in single address

let firstName = `Testleaf`;
let username = `Testleaf`;
console.log(firstName);
console.log(username);



//String Object  //Heap Memory it gets stored in two different memory addresses

let firstName1 = new String("Testleaf");
let userName1 = new String("Testleaf");
console.log(firstName1);
console.log(userName1);


//                                                                      Week2- Day 1 -  continueation

// Escape Sequence
let testtype='It\' is a regression testing';
console.log(testtype);

let stringType = "Hello, this is a \"double quote\"";
//Note  : (\)backslash to get your  ' ,  " "  get enabled inside a string
console.log(stringType);


//Concatenation   - concat()

let testcaseName = "create a new lead";
let testcaseId =123;

let result=testcaseId.toString().concat(testcaseName);

console.log(result);

//with +

let result1 = testcaseId + "-"+ testcaseName+";passed in the last execution";
console.log(result1);

//Template literal    `${}` , " " , ''

let testcases = 200;
let output= `There are ${testcases} testcases`
console.log(output);


//length
//length starts from 1 , and index starts from  0

let coursename = "playwright";
console.log(`The length of the string id ${coursename.length}`);


//charAt

console.log(`The charAt of 3 f the string id ${coursename.charAt(3)}`);

//IndexOf

console.log(`The Index of  w  is ${coursename.indexOf('w')}`);

//includes  - true /false

console.log(`includesof method of a letter   ${coursename.includes('p')}`);

//split // array can be userdefiened -  instgead of array - i can give like - splitcomapanyarray

let companyname = "Qeagle Assurance Limited";
let array =companyname.split("");
console.log(array);
//join method to join the letters in the array

//slice
let courseName1 = "PlaywrightJS"
let outputSlice= courseName1.slice(2,-1); //(-4,-2)
console.log(outputSlice);

/* Note :  start index is included and endindex is not included also,it is optional(endindex)
Negative index is allowed counts from the end from -1 (reverse (end of string is starts from -1,-2,-3,-4 .....   starting index is 0,1,2,3,4,....*/   


//substring

/* 1. start index is included and end index is not included also it is optional
2. Does not support negative index , instead it treats as "0" 
3. Swapping can be done between your Index 
 */

let outputSubstring1=coursename.substring(3,5);
let outputSubstring2=coursename.substring(5,-3);
console.log(outputSubstring1);
console.log(outputSubstring2);

 