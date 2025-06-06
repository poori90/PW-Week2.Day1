// Class Assignment 1 

//String Reversal 

 
 //output :  "faeltset"

function reverseString(str) {
    let reversed="";
     
 for(let i=str.length-1; i>=0; i--){
    reversed += str[i];
 }
 return reversed;
}
let companyName1="Testleaf";
let reversedString = reverseString(companyName1);
console.log(reversedString);
//---------------------------------------------------------------
//openly for loop 
let name= "This is big sentence to be reversed";
    let revname ="";
    for(let i = name.length-1 ;i>=0 ; i--){
        revname += name[i];
}
    console.log(revname);

// String reverse

s = "Sauce lab code"
s2 = ''
for(i=s.length; i>=0;i--){
    s1 = s.charAt(i)
    
    s2 = s2 + s1
}

console.log(s2)

/* Output:
edoc bal ecuaS */


//  Using split, reverse and Join methods 

//reverse() is method for Arrays not for strings

let reverse = name.split("").reverse().join("");
console.log(reverse);
