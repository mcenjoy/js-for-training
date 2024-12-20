//==========================Convert Number to String======================
//https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript

//Easy
const numberToString = (num) => num.toString(); //toString() Method
const str = String(num); //String() Function

//Elegant
const numberToStringLit = `${num}`; //String Template Literals (Backticks)
const numberToStringCon = num + ""; //Concatenation with an Empty String

//Convert boolean values to strings 'Yes' or 'No'

const boolToWord = (bool) => (bool ? "Yes" : "No");

//==========================Convert String toNumber=======================
//https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript

//Easy
const stringToNumber = (str) => parseFloat(str); //parseInt() or parseFloat() Methods
const stringToNumberNF = (str) => Number(str); //Number() Constructor

//Elegant
const stringToNumberUP = +str; //Using Unary Plus (+)

//===================Personalized Message=================================
// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

const greet = (name, owner) => `Hello ${name === owner ? "boss" : "guest"}`;

//=============================Convert a string to an array============
//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

const stringToArray = (string) => string.split(" ");

//============================Remove String Spaces=======================
//https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

const noSpace = (strWithSpaces) => strWithSpaces.replace(/\s+/g, ""); //RegExp
const nonWhitespace = str.match(/\S/g).join(""); //Using match()

//===========================Reverse a String=============================
//https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

//String -> Array -> String
const solution = (str) => str.split("").reverse().join("");

//Loop
function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

//Recursion
function reverseStringRecursion(str) {
  return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");

//===========================Reverse Words===============================
//https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/javascript

const reverseWords = (str) => str.split(" ").reverse().join(" ");

//Recursion
const reverseWordsRec = (str) => {
  const words = str.split(" ");
  if (words.length === 1) {
    return str;
  }
  return words.pop() + " " + reverseWords(words.join(" "));
};

//=======================Remove First and Last Character=================
//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

const removeChar = (str) => str.slice(1, -1);
const removeCharReg = (str) => str.replace(/^./, "").replace(/.$/, "");

// "1,2,3,4,5"  =>  "2 3 4" && "","1", "1,2"  =>  NULL
//https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

function array(string) {
  const arr = string.split(",");
  return arr.length <= 2 ? null : arr.slice(1, -1).join(" ");
}
//============================DNA to RNA Conversion=======================
//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

const DNAtoRNA = (dna) => dna.replace(/T/g, "U");
// const DNAtoRNA = dna => dna.split('T').join('U')

//========================Hello, Name or World!========================
//https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript

function hello(name) {
  if (!name || name.trim() === "") {
    return "Hello, World!";
  }
  const formattedName = name
    .trim()
    .toLowerCase()
    .replace(/^./, (char) => char.toUpperCase());

  return `Hello, ${formattedName}!`;
}

//==================Add Length===========================================
//https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript

// Example 1: Using `.map()`
function addLengthMap(str) {
  //return str.split(" ").map((num) => `${num} ${num.length}`);
  console.log(str.split(" ").map((num) => num + " " + num.length));
}

// Example 2: Using `.forEach()` to modify the original array
function addLengthForReach(str) {
  let words = str.split(" ");

  words.forEach((el, index, arr) => {
    arr[index] = el + " " + el.length;
  });
  console.log(words);
}

// Example 3: Using a `for` loop to rewrite the array
function addLengthLoop(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i] + " " + words[i].length;
  }
  console.log(words);
}

addLengthMap("you will win");
addLengthForReach("you will win");
addLengthLoop("you will win");

//===============================Abbreviate a Two Word Name============
//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

const abbrevName = (name) =>
  name.charAt(0).toUpperCase() +
  "." +
  name.charAt(name.indexOf(" ") + 1).toUpperCase();

function abbrevNamewithSplit(name) {
  const [firstName, lastName] = name.split(" ");
  return (
    firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase()
    //(nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  );
}

//=========================Is the string uppercase?================================
//https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript

String.prototype.isUpperCase = function() {
  // Remove all non-alphabetic characters, convert to uppercase, and check if they match
  const cleanedString = this.replace(/[^A-Za-z]/g, "");
  return cleanedString === cleanedString.toUpperCase();
};

String.prototype.isUpperCase = function () {
  return /^[A-Z]*$/.test(this.replace(/[^A-Za-z]/g, ""));
};
