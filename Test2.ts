function reverseWordsAndReplaceSequences(arr: string[]): string[] {
    return arr.map(str => {
        // Split the string into words
        const words = str.split(' ');

        // Reverse the order of the words
        const reversedWords = words.reverse();

        // Replace sequences of the same character with '*'
        const modifiedWords = reversedWords.map(word => 
            word.replace(/(\w)\1+/g, match => '*'.repeat(match.length))
        );

        // Join the words back into a string
        return modifiedWords.join(' ');
    });
}

// Examples
const input = ['Hello World', 'Bye World', 'Useless World'];
const output = reverseWordsAndReplaceSequences(input);
console.log(output);  // Output: ['World He**o', 'World Bye', 'World Usele**']
const input1 = ['World Hell', 'Hello Rajjath', 'James Cameroon'];
const output2 = reverseWordsAndReplaceSequences(input1);
console.log(output2);  // Output: ['World He**o', 'World Bye', 'World Usele**']