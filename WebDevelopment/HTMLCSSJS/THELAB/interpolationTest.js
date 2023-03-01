//EXAMPLE ONE
const fullname="Abdul Rawoof"
const company = "Tutorials Point"
let salary = 18000
let increment = 2000
let mail = 'abdul@gmail.com'

console.log(`Employee name is ${fullname} and the company is ${company}
Salary of ${fullname} after increment is ${increment}:${salary+increment}
Contact details of ${fullname} is ${mail}`)


console.log("------------------------")


//EXAMPLE TWO
const name1="Abdul "
const name2="Rawoof"
fullname2 = `${name1+name2}`
const company2 = "Tutorials Point"
let salary2 = 18000
let increment2 = 2000
let mail2 = 'abdul@gmail.com'
let experience = 3
console.log("String Concatenate: Full name is",`${name1 + name2}`)
console.log("String Interpolation:",`Employee name is ${fullname2} and the company is ${company2}`)
console.log("Using Ternary Operator:",`Salary if increment is done based on experience ${experience > 2 ? 20000 : 18000}`)

console.log("------------------------")
let grade = 98;
let fname = "Mich"
console.log(`My name is ${fname} and my grade is ${grade}. If my grade is ${grade} then i have ${grade > 80 ? "Passed" : "Failed"}.`)//the first option in the ternary operators is always the true one. 
