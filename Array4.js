

function countWords(s) { 
    // Split the string space and count the length of the results array
    let words = s.split(' ');
    return words.length;
}

console.log(countWords("Geeks"));  // Output: 1
console.log(countWords("World is hello"));  // Output: 3