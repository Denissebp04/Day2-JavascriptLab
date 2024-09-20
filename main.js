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


// Part II Practical Math


// Info
const dt = 1500 
const V1 = 55
const v2 = 60
const v3 = 75
const gal1 = 30
const gal2 = 28
const gal3 = 23 
const budget = 175
const galPrice = 3


// Question 1: How many gallons of fuel will you need for the entire trip?

// total gallon #1
const totalGal1 = dt / gal1 ;
console.log(totalGal1) 

// total price need for gallon #1
const totalPrice1 = totalGal1 * galPrice ;
console.log(totalPrice1)

// total gallon #2
const totalGal2 = dt / gal2 ;
console.log(totalGal2) 

// total price need for gallon #2
const totalPrice2 = totalGal2 * galPrice ;
console.log(totalPrice2)

// total gallon #3
const totalGal3 = dt / gal3 ;
console.log(totalGal3) 

// total price need for gallon #3
const totalPrice3 = totalGal3 * galPrice ;
console.log(totalPrice3)

// Question 2: Will your budget be enough to cover the fuel expense?

// We need the total fuel budget needed for fuel not to exceed our actual fuel budget
// which options gives us the most speed without exceeding the budget?
const budgetUpdated = totalPrice1 <= budget && totalPrice2 <= budget && totalPrice3 <= budget; 
console.log(budgetUpdated)
const option1 = totalPrice1 <= budget ;
console.log(option1)
const option2 = totalPrice2 <= budget ;
console.log(option2)
const option3 = totalPrice3 <= budget ;
console.log(option3)

// Option1 and option2 are the only options within our budget
// However between the two of them the fastest way seems to be option2 since its traveling at a higher speed

// Question 3 : How long will the trip take, in hours?
 const TotalTime = dt / v2 ;
 console.log(TotalTime)

    

