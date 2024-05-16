// swap two numbers without using a temporary variable

let a = 5;
let b = 10;

console.log("Before Swapping");
console.log("a =", a);
console.log("b =", b);

a = a + b;
b = a - b;
a = a - b;

console.log("After Swapping");
console.log("a =", a);
console.log("b =", b);

/* Behind the scenes 

# Before Swapping:- 

 a = 5
 b = 10

 # After Operations:- 
 a becomes a + b, so a is 15  (5 + 10) = 15
 b becomes a - b, so b is 5   (15 - 10) = 5
 a becomes a - b, so a is 10  (15 - 5) = 10

 # After Swapping:- 

 a = 10
 b = 5
  

*/
