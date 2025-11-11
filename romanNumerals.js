/** 
Pseudocode
# Make a variable called output and make it an empty string

# Create map that translates the number value for the roman numeral (give me the key for the value passed)

# create the priority order in which to evaluate the number

# for each value in romanNumeralPriorityOrder do the folloing
  - give me the value in number form for for the value from romanNumeralPriorityOrder
  - Give me the number rounded down for 
  
  */
// Question:

const player = {
    name: "John"
}

const currentPlayer = player['name']



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

  for (const romanNumeral of romanNumeralPriorityOrder) {  // Goes throught the priority list starting with M
   
    const numberEquivalent = romanNumeralToArabic[romanNumeral]; // Finds the integer value of the current numeral

    const count = Math.floor(num / numberEquivalent);  // Finds how many times the numeral count goes into num

    if (count === 0) continue; // to exit earlier if it doesnt fit

    for (let i = 0; i < count; i++) {  // ++ increment by 1

      output += romanNumeral;

    }

    num -= count * numberEquivalent;

    if (num === 0) break;
    
  }

  return output;

}


function toRoman(num) {  // Copy and pasted the code from toRomanLazy function
    let output = "";
  const romanNumeralToArabic = {  
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

  for (const romanNumeral of romanNumeralPriorityOrder) { 
    const numberEquivalent = romanNumeralToArabic[romanNumeral];
    const count = Math.floor(num / numberEquivalent);

    if (num === 0) continue;

    for (let i = 0; i < count; i++) {
      output += romanNumeral;
    }
    num -= count * numberEquivalent;

    if (num === 0) break;
  }
  return output;
}
console.log(toRoman(944))
module.exports = { toRoman, toRomanLazy };


