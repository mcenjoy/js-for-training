//==================Return the Nth Even Number========================
//https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript

const nthEven = (inputNumber) => (inputNumber - 1) * 2;

//==================Opposites Attract==================================
// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 !== 0;
}

//Not Recommended
function lovefunc(flower1, flower2) {
  return !!((flower1 + flower2) % 2);
}

//========================Even or Odd - Which is Greater?================
//https://www.codewars.com/kata/57f7b8271e3d9283300000b4/train/javascript

function evenOrOdd(str) {
  let sumEven = 0;
  let sumOdd = 0;

  for (const char of str) {
    const digit = parseInt(char, 10);
    if (digit % 2 === 0) {
      sumEven += digit;
    } else {
      sumOdd += digit;
    }
  }

  if (sumEven > sumOdd) {
    return "Even is greater than Odd";
  } else if (sumOdd > sumEven) {
    return "Odd is greater than Even";
  }
  return "Even and Odd are the same";
}

//====================Evens and Odds====================================
//https://www.codewars.com/kata/583ade15666df5a64e000058/train/javascript

// First Solution
function evensAndOdds(digit) {
  if (digit % 2 === 0) {
    return digit.toString(2);
  }
  return digit.toString(16).toLowerCase();
}
//Second Solution
const newEvensAndOdds = (digit) =>
  digit % 2 === 0 ? digit.toString(2) : digit.toString(16).toLowerCase();
//const evensAndOdds = (digit) => digit.toString(n % 2 ? 16 : 2);

//===========Training JS #10: loop statement --for===========================
//https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript

function pickIt(arr) {
  let odd = [],
    even = [];
  for (let x of arr) {
    (i % 2 ? odd : even).push(x);
  }

  return [odd, even];
}
