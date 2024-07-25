function checkDivisibility(num: number): string {
    const digits = num.toString().split('').map(digit => parseInt(digit));
    let sumOfDigits = 0;
    let alternatingSum = 0;
    let sign = 1;  // This will alternate between +1 and -1

    for (let i = digits.length - 1; i >= 0; i--) {
        sumOfDigits += digits[i];
        alternatingSum += digits[i] * sign;
        sign *= -1;  // Alternate the sign
    }

    const divisibleBy3 = sumOfDigits % 3 === 0;
    const divisibleBy11 = alternatingSum % 11 === 0;

    if (divisibleBy3 && divisibleBy11) {
        return 'fizzbuzz';
    } else if (divisibleBy3) {
        return 'fizz';
    } else if (divisibleBy11) {
        return 'buzz';
    } else {
        return 'baz';
    }
}

function fizzBuzzBaz(arr: number[]): string[] {
    return arr.map(checkDivisibility);
}

// Examples
const input = [2, 3, 10, 11, 12, 22, 297];
const output = fizzBuzzBaz(input);
console.log(output);  // Output: ['baz', 'fizz', 'baz', 'buzz', 'fizz', 'buzz', 'fizzbuzz']
const input1 = [1, 9, 13, 23, 33, 66, 55];
const output1 = fizzBuzzBaz(input1);
console.log(output1);  // Output: [ 'baz', 'fizz','baz', 'baz','fizzbuzz', 'fizzbuzz','buzz']
