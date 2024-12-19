//===================Messi goals function=================================
//https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) =>
  laLigaGoals + copaDelReyGoals + championsLeagueGoals;

//Not Recommended
function goals(...goalsArray) {
  return goalsArray.reduce((total, goals) => total + goals, 0);
}

//===================Return Negative=================================
//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

const makeNegative = (num) => -Math.abs(num);
//const makeNegative = (num) => (num > 0 ? -num : num);

//===========Terminal game move function========================================
//https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

const move = (position, roll) => position + roll * 2;

//================Keep Hydrated!====================================
// https://www.codewars.com/kata/keep-hydrated-1/train/javascript

function litres(time) {
  return Math.floor(time / 2);
}

//Not Recommended
function litres(time) {
  return ~~(time * 0.5);
}

//========================Four Seven================
//https://www.codewars.com/kata/5ff50f64c0afc50008861bf0

function fourSeven(n) {
  const nums = { 4: 7, 7: 4 };
  return nums[n] || 0;
}

//======================Double the integer=======================
//https://www.codewars.com/kata/53ee5429ba190077850011d4/

const doubleInteger = (intNumber) => intNumber * 2;

//=======================Twice as old=======================
//https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

const twiceAsOld = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - 2 * sonYearsOld);

//==================What's the real floor?========================
//https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

const getRealFloor = (n) => (n > 0 ? (n >= 13 ? n - 2 : n - 1) : n);

//==================Clock==========================================
//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

const past = (h, m, s) => (h * 3600 + m * 60 + s) * 1000;

//==================Is n divisible by x and y?===========================
//https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

const isDivisible = (n, x, y) => n % x === 0 && n % y === 0
//There's no need to use a ternary operator to return the same boolean value.
