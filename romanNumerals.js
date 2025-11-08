/** 
Pseudocode
Make a variable called output and make it an empty string

*/

function toRomanLazy(num) {  // `toRomanLazy` that takes in a single input, `num`(an arabic number)
  let output = "";  // Created output as an empty string
  const romanNumeralToArabic = {  // Our list of roman numerals translated into integers
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  const romanNumeralPriorityOrder = ["M", "D", "C", "L", "X", "V", "I"];  // Used a list to clarify the priority order of numerals

  for (const romanNumeral of romanNumeralPriorityOrder) {  // For loop to iterate through the different numerals
    const arabicEquivalent = romanNumeralToArabic[romanNumeral];  
    const count = Math.floor(num / arabicEquivalent);

    for (let i = 0; i < count; i++) {
      output += romanNumeral;
    }
    num -= count * arabicEquivalent;

    if (num === 0) {
      break;
    }
  }
  return output;
}


function toRoman(num) {  // Copy and pasted the code from toRomanLazy function
    let output = "";
  const romanNumeralToArabic = {  // Added the modern roman numerals listed in step 2 (IV IX XL CD CM)
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
    IV: 4,
    IX: 9,
    XL: 40,
    CD: 400,
    CM: 900,  
  };
  const romanNumeralPriorityOrder = ["M", "CM", "D", "CD", "C", "L", "XL", "X", "IX", "V", "IV", "I"];  // Added the modern roman numerals listed in step 2 (IV IX XL CD CM)

  for (const romanNumeral of romanNumeralPriorityOrder) { // G
    const arabicEquivalent = romanNumeralToArabic[romanNumeral];
    const count = Math.floor(num / arabicEquivalent);

    for (let i = 0; i < count; i++) {
      output += romanNumeral;
    }
    num -= count * arabicEquivalent;

    if (num === 0) {
      break;
    }
  }
  return output;
}
// console.log(toRoman(944))
module.exports = { toRoman, toRomanLazy };
