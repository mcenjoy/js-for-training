//======================Understanding closures - the basics==============
//https://www.codewars.com/kata/56b71b1dbd06e6d88100092a/train/javascript

const buildFun = (n) => Array.from({ length: n }, (_, i) => () => i);