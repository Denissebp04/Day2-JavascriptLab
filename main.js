//

// const myName = "Denisse"
// console.log(myName)


// Part I Math Problems


// Initial Numbers to add up to 50
const n1 = 13;
const n2 = 12;
const n3 = 11;
const n4 = 14;
// arithmatic operator
const isSum50 = (n1 + n2 + n3 + n4);
console.log(isSum50)
// Comparison
console.log(isSum50 == 50);

// At least two odd numbers
// We use modulus to check if something is odd
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd);

// No number larger than 25
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25);

// Check all unique numbers
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique);

// Results into a single variable 
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
console.log(isValid)

// Should not be done this way since it over complicates it
// Better to break it into smaller, more manageable pieces
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
console.log(dontDoThis)

// Check all numbers divisible by 5
const divisibleBy5 = n1 % 5 == 0 && n2 % 5 == 0 && n3 % 5 ==0 && n4 % 5 == 0;
console.log(divisibleBy5)

// First Larger than Last
const largerThan = n1 > n4;
console.log(largerThan)

// Arithmetic Chain
const ArithmeticChain = ((n1 - n2) * n3) % n4;
console.log(ArithmeticChain)

// Change isOver25
const isOver26 = n1 + n2 + n3 + n4 > 26;
console.log(isOver26)