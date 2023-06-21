/* Problem Description
Given an array of integers, every element appears thrice except for one, which occurs once.

Find that element that does not appear thrice.

NOTE: Your algorithm should have a linear runtime complexity.

Could you implement it without using extra memory?




Problem Constraints
2 <= A <= 5*106

0 <= A <= INTMAX



Input Format
First and only argument of input contains an integer array A.



Output Format
Return a single integer. */

// function singleNumber2(arr) {
//     let n = arr.length;
//     let result = 0;
//     let x;
//     let sum;

//     for (let i = 0; i < 32; i++) {
//         sum = 0;
//         x = (1 << i)
//         for (let j = 0; j < n; j++) {
//             if (arr[j] & x) sum++;
//         }
//         if (sum % 3) result |= x;
//     }

//     return result;
// }

// console.log(singleNumber2([2,3,2,9,2,5,3,5,3,5]))

function singleNumber2(arr) {
    let n = arr.length;
    let result = 0;
    let x;
    let sum;

    for (let i = 0; i < 32; i++) {
        sum = 0;
        x = 1 << i;

        for (let j = 0; j < n; j++) {
            if (arr[j] & x) sum++;
        }

        if (sum % 3) result |= x;
    }

    return result;
}

console.log(singleNumber2([2,3,2,9,2,5,3,5,3,5]))