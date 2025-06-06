//  Home Assignment          :    2     String    -  More String functions 


// Example:1

const s = "Hello World";
const word = s.split(" ");
console.log(word);
let lastWord = word[word.length -1 ];
const len = lastWord.length;
console.log("The last word is : " + lastWord);

console.log("The length of the last word : " + lastWord + "is  " +len);

//return(lastWord,len);

function findLastWordAndLength(sentence) {
  if (!sentence || sentence.trim() === "") {
    return { lastWord: "", length: 0 };
  }

  const words = sentence.trim().split(" ");
  const lastWord = words[words.length - 1];
  const length = lastWord.length;

  return { lastWord, length };
}

// Example usage:
const sentence = "This is a sample sentence";
const result = findLastWordAndLength(sentence);
console.log("Last word:", result.lastWord);
console.log("Length of last word:", result.length);

//Example:2

const s2 = " fly me to the moon ";
function findLenOfLastWord(s2){
    if(!s2 || s2.trim()===""){
        return{lasW: "" ,lenth:0};
}

const wod = s2.trim().split(" ");
const lasW = wod[wod.length-1];
const leng = lasW.length;

return{ lasW , leng };
}
const res = findLenOfLastWord(s2);
console.log("Last Word is :  " , res.lasW);
console.log("Lenth of the Last word is  : " , res.leng);


// //Example:3

function isAnagram(str1, str2) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Check if the lengths are different
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Sort the strings
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false

