// Problem 3
// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]
// Do this Problem using Arrow function.



let Output = []
let Input = ["MA", "SA", "I", "SCH", "OOL"]

Input.map((elm) => {
     let ans = elm.toLocaleLowerCase()
     Output.push(ans)
})
console.log(Output);