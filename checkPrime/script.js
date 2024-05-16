// Check Prime

// How would you verify a prime number?

// Ans: A prime number is that number which is greater than by 1. Also It can divisible by 1 and itself.  2 is the smallest prime number

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  if (num <= 3) {
    return true;
  }

  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

const checkFn = 10;

console.log(isPrime(checkFn));

/*
# Steps to solve this logic

Fist we check if num is less than or equal to 1 or not if yes then return false because prime number always greater than 1
Second we check if num is 2 or 3 because 2 & 3 are smallest prime number
Third we check if num is divided by 2 & 3 then it will equal to 0 or not. If it is zero then return false
Fourth we use loop where again we check if we divide the num from i & i+2 then it will equal to 0 or not. If it is zero then return false
Fifth If any of the condition is correct then return true
 */
