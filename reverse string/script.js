

// reverse a string

// Approach 1: using the split(), reverse() & join() method

function reverseStr(str) {
    return str.split('').reverse().join('')
}

console.log(reverseStr("hello"));


// Approach 2: using a loop

function reverseStr(str) {
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--){
        reversed += str[i]
    }
    return reversed
}


console.log(reverseStr("world"));