function countWords(sentence) {
    const words = sentence.toLowerCase().match(/\b\w+\b/g); 
    const wordCount = {};

    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    return wordCount;
}
console.log(countWords("This is a test. This test is fun!"));