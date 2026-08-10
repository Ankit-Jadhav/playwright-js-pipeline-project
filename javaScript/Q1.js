// Q1: Write a JavaScript function to check whether all occurrences of one character appear before another character in a string.
// Example: "aaabb" → true, "ababa" → false
function checkCharacterOrder(str, char1, char2) {
    const last1 = str.lastIndexOf(char1);
    const first2 = str.indexOf(char2);

    if (last1 === -1 || first2 === -1) {
        return true; // If either character is not found, return true
    }
    return last1 < first2;    
}

console.log(checkCharacterOrder("aaabb", "a", "b")); // true
console.log(checkCharacterOrder("ababa", "a", "b")); // false
console.log(checkCharacterOrder("abcde", "a", "e")); // true
console.log(checkCharacterOrder("abcde", "e", "a")); // false
console.log(checkCharacterOrder("abcde", "x", "y")); // true
console.log(checkCharacterOrder("aaaa", "a", "b")); // true
console.log(checkCharacterOrder("bbbb", "a", "b")); // true