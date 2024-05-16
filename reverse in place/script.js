
// Approach - 1 :-

function reverseInPlace(str) {
    return str.split(" ").reverse().join(" ").split('').reverse().join('')
}


console.log(reverseInPlace("I am the good boy"));



// Approach - 2 :-

function reverseInPlace(str) {
       return str.split(" ").map(function (word) {
        // reverse each word
        return word.split("").reverse().join("")
    }).join(" ")
}

console.log(reverseInPlace("I am the good boy"));


// Approach - 3 :-


function reverseInPlace(str) {
  // Split the string into an array of words
  var words = str.split(" ");

  // Reverse each word in the array

  var reverseWords = words.map(function (word) {
    // Reverse the characters of each word
    return word.split("").reverse().join("");
  });

    // Join the reversed words back into a string
    
    var reversedStr = reverseWords.join(" ")

    return reversedStr
}

console.log(reverseInPlace("I am the good boy"));


// All the approach are same but the way of writing the code is different