/* Problem Description
Write a function that takes an integer and returns the number of 1 bits present in its binary representation.


Problem Constraints
1 <= A <= 109


Input Format
First and only argument contains integer A


Output Format
Return an integer */

const oneBitCount = num => {
    let count = 0;
    for (let i = 0; i < 32; i++) {
        if ((num>>i) & 1 === 1) count++;
    }

    console.log(`Number of 1 bits in ${num} is ${count}`);
}

oneBitCount(22);