

// Approach: 1
function FibonacciNumber(n) {
    if (n <= 1) {
       return n 
    } else {
        return FibonacciNumber(n - 1) + FibonacciNumber(n  - 2)
    }
}

console.log(FibonacciNumber(7));

// Approach: 2 => more efficient way to solve this

function FibonacciNumber(n) {
    let fib = [0, 1]
    for (let i = 2; i <= n; i++){
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib[n]
}

console.log(FibonacciNumber(7));


/*

Fibonacci is a sequence of numbers where each number is the sum of the two preceding ones, starting with 0 and 1. 
So, it goes like this: 0, 1, 1, 2, 3, 5, 8, 13, and so on. 
It's like adding the two previous numbers to get the next one. That's the essence of Fibonacci!

         Mathematically, the Fibonacci sequence is defined recursively by the formula:

       F(n) = F(n - 1) + F(n - 2)

       with initial conditions: 

       F(0) = 0
       F(1) = 1
 */