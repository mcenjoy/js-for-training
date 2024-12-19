//===================Personalized Message=================================
// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

const greet = (name, owner) => `Hello ${name === owner ? "boss" : "guest"}`;

//=============================Convert a string to an array============
//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

const stringToArray = (string) => string.split(" ");

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
  