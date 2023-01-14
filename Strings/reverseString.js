// Reverse the String

// Problem Description

/* You are given a string A of size N.

Return the string A after reversing the string word by word.

NOTE:

A sequence of non-space characters constitutes a word.
Your reversed string should not contain leading or trailing spaces, even if it is present in the input string.
If there are multiple spaces between words, reduce them to a single space in the reversed string. */

// Problem Constraints
// 1 <= N <= 3 * 105

// Input Format
// The only argument given is string A.

// Output Format
// Return the string A after reversing the string word by word.

// Example Input
/* Input 1:
    A = "the sky is blue"
Input 2:
    A = "this is ib" */

// Example Output
/* Output 1:
    "blue is sky the"
Output 2:
    "ib is this"    */


// SOLUTION

const reverseTheString = str => {
    let stringArray = str.split(' ');
    let result = stringArray[stringArray.length - 1] + ' ';

    for (let i = stringArray.length - 2; i > 0; i--) {
        result += stringArray[i] + ' ';
    }

    result += stringArray[0];

    return result;
}

console.log(reverseTheString('night is dark and full of terror'));