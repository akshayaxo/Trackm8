function findNthElement(input: string): number {
    // Parse the input string
    const parts = input.trim().split(' ');

    const A1 = parseInt(parts[0]);
    const A2 = parseInt(parts[1]);
    const n = parseInt(parts[2]);

    // If n is 1 or 2, return A1 or A2 respectively
    if (n === 1) {
        return A1;
    } else if (n === 2) {
        return A2;
    }

    // Initialize the first two elements of the sequence
    let prev1 = A1;
    let prev2 = A2;
    let current = 0;

    
    for (let i = 3; i <= n; i++) {
        current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
    }

    return current;
}

// Examples
const input = "1 2 5";
const result = findNthElement(input);
console.log(result);  // Output: 8
const input1 = "2 6 5";
const result1 = findNthElement(input1);
console.log(result1);  // Output: 22
