# Trackm8
Technical assessment by TrackM8

Test.ts contains the solution for the first task.

Task 1
Consider a sequence of integers A1, A2, ... for which An = A(n-1) + A(n-2) for all n > 2. You are given the first two elements of the sequence A1 and A2, and the index n.
Write a function to output the n-th element of the sequence. The function will take a single argument consisting of a single string which contains integers A1, A2 and n separated by single spaces.
Example:	Input 	   '1 2 5'
		Output	   8


Test2.ts contains the solution for the second task.

Task 2
You are given an array of strings. Each array element contains one or several words separated with single spaces.
Write a function to reverse the order of the words in each element of the array. Additionally where a word contains a sequence of the same character, replace the sequence with * characters of the same length.
Example:	Input	   [ 'Hello World', 'Bye World', 'Useless World' ]
Output	   [ 'World He**o', 'World Bye', 'World Usele**' ]



Test3.ts contains the solution for the third task.

Task 3
To see if a number is divisible by 3, you need to add up the digits of its decimal notation, and check if the sum is divisible by 3.
To see if a number is divisible by 11, you need to split its decimal notation into pairs of digits (starting from the right end), add up corresponding numbers and check if the sum is divisible by 11.
Given an array of integers, write a function that tests each integer for their divisibility into 3 and 11 using the above methods.
The function must return a new array containing the results:
    - If the integer is divisible by 3, the result is 'fizz'
    - If the integer is divisible by 11, the result is 'buzz'
    - If the integer is divisible by both 3 and 11, the result is 'fizzbuzz'
    - If the integer isn't divisible by 3 or 11, the result is 'baz'

Example:	Input	   [ 2, 3, 10, 11, 12, 22, 297 ]
Output   [ 'baz', 'fizz', 'baz', 'buzz', 'fizz', 'buzz', 'fizzbuzz' ]
