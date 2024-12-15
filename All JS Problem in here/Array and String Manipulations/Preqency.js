// Count the Frequency of Characters in a String
function charFrequency(str) {
    return [...str].reduce((freq, char) => {
        freq[char] = (freq[char] || 0) + 1;
        return freq;
    }, {});
}
console.log(charFrequency("hello")); // { h: 1, e: 1, l: 2, o: 1 }