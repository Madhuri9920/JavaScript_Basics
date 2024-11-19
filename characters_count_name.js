
// characters count name

 // let text = "Hello World";
 // let length = text.length;

// get the count using for loop 

// for ( let counter = 5; counter <= 100; counter++ ) {
    // console.log(`The number is ${counter}`);
    
    // length of the string by using count

     // let str = "Hello, world!";
     // let length = str.length; // Directly access the length property
     // console.log(length); // Output: 13

     let str = "Hello, world!";
     let splitArray = str.split('');  // Split by every character 
     let totalLength = splitArray.reduce((acc, char) => acc + 1, 0);  // Sum the length of all characters
     console.log(totalLength); // Output: 13

     // split('') splits the string "Hello, world!" into an array of individual characters: ['H', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd', '!'].
     // reduce() is used to sum up the total length by counting each character
     // The result of this operation is 13, which is the same as str.length.

