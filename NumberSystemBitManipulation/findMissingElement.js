/* This code finds the missing element in an array of integers from 1 to n, where one element is missing. It XORs all the elements from 1 to n together, then XORs that result with all the elements in the input array. Since XORing a number with itself results in 0, only the missing element will be left in the final result.

Here's how the code works in detail:

1. `const findMissingElement = (arr, n) => {...}` declares a function called `findMissingElement` that takes an input array `arr` and an integer `n` as parameters.

2. `let res = 0;` initializes a variable called `res` to 0. This variable will be used to store the result of the XOR operations.

3. `for (let i = 1; i <= n; i++) {...}` loops through all the integers from 1 to n, inclusive.

4. `res ^= i;` XORs the current value of `i` with the current value of `res` and stores the result back in `res`. This accumulates the XOR'd values of all the integers from 1 to n.

5. `for (let i = 0; i < arr.length; i++) {...}` loops through all the elements in the input array `arr`.

6. `res ^= arr[i];` XORs the current value of `arr[i]` with the current value of `res` and stores the result back in `res`. This accumulates the XOR'd values of all the elements in `arr`.

7. The missing element is the final value of `res`, so `console.log(`Missing element is ${res}`);` prints the result to the console.

For example, if `findMissingElement([1,2,4,3,6],6)` is called, the output will be "Missing element is 5", since 5 is the only element missing from the array. */

const findMissingElement = (arr, n) => {
    let res = 0;
    for (let i = 1; i <= n; i++) {
        res ^= i;
    }
    for (let i =0; i <arr.length; i++) {
        res ^= arr[i];
    }

    console.log(`Missing element is ${res}`);
}

findMissingElement([1,2,4,3,6],6);