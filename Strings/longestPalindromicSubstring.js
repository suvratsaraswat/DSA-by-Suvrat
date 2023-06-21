// Longest Palindromic Substring

/* 
Problem Description
Given a string A of size N, find and return the longest palindromic substring in A.

Substring of string A is A[i...j] where 0 <= i <= j < len(A)

Palindrome string:
A string which reads the same backwards. More formally, A is palindrome if reverse(A) = A.

Incase of conflict, return the substring which occurs first ( with the least starting index).



Problem Constraints
1 <= N <= 6000



Input Format
First and only argument is a string A.



Output Format
Return a string denoting the longest palindromic substring of string A.



Example Input
A = "aaaabaaa"


Example Output
"aaabaaa"


Example Explanation
We can see that longest palindromic substring is of length 7 and the string is "aaabaaa".
*/

const longestPalindromicSubstring = str => {
    let subStr = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < 2; j++) {
            left = i;
            right = left + j;

            while (str[left] && str[left] == str[right]) {
                left--;
                right++;
            }

            if (right - left - 1 > subStr.length) {
                subStr = str.slice(left+1, right);
            }
        }
    }

    return subStr;
}

console.log(longestPalindromicSubstring('aaaabaaa'));