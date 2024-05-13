const numbers = [1, 2, 3, 4, 5]

//11111111111111111111111111
// vezme array, prozene to funkci a vrati novy array s upravenymi hodnotami
const squares = numbers.map(function(num) {
    return num * num
}) 
console.log(squares)

//222222222222222222222222222
//pouziva stejny input
const letters = ['a', 'b', 'c']
const combined = numbers.map((x, i) => x + letters[i])
console.log(combined)

//333333333333333333333333333
const strings = ['llama', 'honeybadger', 'doesnt', 'give', 'a', 'shit']
const lengths = strings.map(function(str) {
    return str.length
})

console.log(lengths)