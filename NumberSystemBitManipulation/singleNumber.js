/* Problem Description
Given an array of integers A, every element appears twice except for one. Find that integer that occurs once.

NOTE: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?



Problem Constraints
1 <= |A| <= 2000000

0 <= A[i] <= INTMAX



Input Format
The first and only argument of input contains an integer array A.



Output Format
Return a single integer denoting the single element. */

const singleNumber = arr => {
    let res = arr[0];
    for (let i = 1; i < arr.length; i++) {
        res = res ^ arr[i]; //Since XOR of a number with itself is always 0, the only number left will be the number that has single occurrence.
    }

    console.log(`Number with one occurrence is ${res}`);
}

let array = [1,2,3,2,1];
singleNumber(array);