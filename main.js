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