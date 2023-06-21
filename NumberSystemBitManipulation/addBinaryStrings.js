/* Problem Description
Given two binary strings A and B. Return their sum (also a binary string).


Problem Constraints
1 <= length of A <= 105

1 <= length of B <= 105

A and B are binary strings



Input Format
The two argument A and B are binary strings.



Output Format
Return a binary string denoting the sum of A and B */

// function addBinary(a, b) {
//   let i = a.length - 1; // set i to the end index of a
//   let j = b.length - 1; // set j to the end index of b
//   let sum = ""; // initialize an empty string for our result
//   let carry = 0; // set the carry to 0

//   while (i >= 0 || j >= 0) {
//     // loop while either a or b has digits to process
//     const x = parseInt(a[i] || "0"); // set x to the digit at index i of a, or 0 if i is out of bounds
//     const y = parseInt(b[j] || "0"); // set y to the digit at index j of b, or 0 if j is out of bounds
//     const s = x + y + carry; // calculate the sum of the digits and the carry
//     sum = (s % 2) + sum; // add the rightmost digit of the sum to the beginning of the result string
//     carry = Math.floor(s / 2); // calculate the new carry value
//     i--; // move to the next digit of a
//     j--; // move to the next digit of b
//   }

//   if (carry) {
//     // if there is a carry left after processing all the digits of a and b
//     sum = carry + sum; // add the carry to the beginning of the result string
//   }

//   return sum; // return the result string
// }

const addBinary = (str1, str2) => {
  let i = str1.length - 1;
  let j = str2.length - 1;
  let sum = '';
  let carry = 0;

  while (i >= 0 || j >= 0) {
    let x = parseInt(str1[i] || '0');
    let y = parseInt(str2[j] || '0');
    let s = x + y + carry;
    sum = (s%2) + sum;
    carry = Math.floor(s/2);
    i--;
    j--;
  }

  if (carry) sum = carry + sum;

  console.log(`Sum of ${str1} & ${str2} is ${sum}`);
}

addBinary('1011', '1101');