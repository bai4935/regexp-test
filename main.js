const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// // const regexp = new RegExp('the', 'gi')
// console.log(str.match(regexp))
//g 모두 찾기 i 대문자 소문자 구별 X
const regexp = /fox/gi
// console.log(regexp.test(str))
console.log(str.replace(regexp, 'AAA'))
console.log(str)

const regexp1 = 
console.log(str.match(/the/g))

console.log(str.match(/\b\w{2,3}\b/g))

const h = `  the hello  world   !`

console.log(h.replace(/\s/g, ''))

console.log(str.match(/(?<=@).{1,}/))