

// How would you reverse words in a sentence?


function reverseWords(sentence) {
    return sentence.split(' ').reverse().join('')
}

console.log(reverseWords("Hello world!"));

/*
  This problem statement are similar to reverse string but the only difference is that in reverse string we are reverse the whole string
  but here we are just reverse the sentence, that's why we use split(" ")

  # Logic for the problem:-
   
   
   1. split the sentence into words
   2. Reverse the array 
   3. Join the words back into a string

 */