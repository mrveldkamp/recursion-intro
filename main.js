// RECURSION

// Simple Definition: A function calling itself
// Key Points:  A BASE CASE & A RECURSIVE CASE

// EXAMPLE - COUNTDOWN

// // Iterative Countdown
// function iterativeCountdown(n) {
//     while (n > 0) {
//         console.log(n);
//         n--;
//     }
//     console.log("Blast Off!")
// }

// iterativeCountdown(10);

// // Recursive Countdown
// function recursiveCountdown(n) {
//     // Base Case
//     if (n == 0) {
//         console.log("Blast Off!");
//     } else {
//         // Recursive Case
//         console.log(n);
//         recursiveCountdown(n - 1);
//     }
// }

// recursiveCountdown(10);


// Iterative Binary Search
function binarySearch(anArray, item) {
    let li = 0;
    let ui = anArray.length - 1;

    while (li <= ui) {
        let mi = Math.floor((li + ui) / 2);
        if (anArray[mi] == item) {
            return mi;
        } else if (item < anArray[mi]) {
            ui = mi - 1;
        } else {
            li = mi + 1;
        }
    }

    return -1;
}

// Recursive Binary Search
function binarySearch(anArray, item, low, high) {
    // // Base Case 1 - Found it
    let mi = Math.floor((low + high) / 2);
    if (anArray[mi] == item) {
        return mi;
    }
    
    // Base Case 2 - Nothing to look at
    if (high < low) {
        return -1;
    }
    
    // Recursive Case
    if (item < anArray[mi]) {
        // Search lower half and return the result
        return binarySearch(anArray, item, low, mi - 1);
    } else {
        // Search upper half and return the result
        return binarySearch(anArray, item, mi + 1, high);
    }
}

let index = binarySearch([1,2,3,4,5], 5, 0, 4);
console.log(index);
