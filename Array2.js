
function countZeroes(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count = arr.length - i; 
            break;
        }
    }
    return count;
}
console.log(countZeroes([1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]));  // Output: 3
