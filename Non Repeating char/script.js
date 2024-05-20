// find the first non repeating char in a string

function firstNonRepeatChar(str) {
  const charMap = new Map();

  // Step-1: Populate the Map with character counts and their first occurrence index

  for (let i = 0; i < str.length; i++) {
    const char = str[i]; // Extract the character at the current index i

    if (char !== " ") {
      // ignoring the white space
      if (charMap.has(char)) {
        const charInfo = charMap.get(char);
        charInfo.count += 1;
      } else {
        charMap.set(char, { count: 1, index: i });
      }
    }
  }

  /* 1. in this code first we check if current char is not having a space (" ");
       2. now we check if char is already exist in charMap
       3. If the character is already available in the Map then it retrieves the associated object (charInfo) which contains the count and index
       4. and the char count is incremented by 1 and indicating that the character has been encountered again.
       5. If char does not exist then it will add or create a new entry of count and index

      #  Purpose
The purpose of this code is to build a frequency map (charMap) that:

Tracks how many times each character appears in the string.
Records the index of the first occurrence of each character.
    */
    
    
    // Step-2: Find the first non-repeating character


    let firstNonRepeatChar = null;
    let minIndex = Infinity;

    for (const [char, { count, index }] of charMap.entries()) {
        if (count === 1 && index < minIndex) {
            firstNonRepeatChar = char;
            minIndex = index
        }
    }

    return firstNonRepeatChar;
}

console.log(
  firstNonRepeatChar("the quick brown fox jumps then quickly blow air")
);;
