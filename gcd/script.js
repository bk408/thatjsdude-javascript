// GCD: greatest common divisor

// using Euclidean algorithm

function GCD(a, b) {
  // using Euclidean algorithm
  while (b !== 0) {
    let temp = b;
    b = a % b;
    temp = a;
  }
  return a;
}

const num1 = 80;
const num2 = 160;

const result = GCD(num1, num2);

console.log("GCD of", num1, "and", num2, "is", result);

/*
 # What we are doing in this code:- 
   
  We are trying to find greatest common divisor of two number. 

  # How we are doing:- 
  
  Basically, this piece of code repeatedly divides the larger number by the smaller number, 
  and each time it replaces the larger number with the smaller one until the remainder becomes zero.
  Then, it returns the last non-zero remainder, which is the greatest common divisor (GCD).


   # Process to perform the logic:- 

   1. Function define with two parameter a, b
   2. Using Euclidean Algorithm  ( yu-cle-di-an ) where 
    (a) we keep dividing the larger number by smaller number
    (b) we continue doing this until the remainder of the division becomes zero
    (c) The divisor at the point is the greatest common divisor (gcd)

  3. After the loop finishes ( when the remainder becomes zero), we return the last divisor which is our gcd  

 */
