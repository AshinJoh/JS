a = 3
b = 4

console.log(a + b)
console.log(a * b)
console.log(a / b)
console.log(a - b)


// Below example is to learn the scope of let keyword
let x = 10
console.log(x)
if (true) {
    let x = 20;  // This x is different from the x declared above
    console.log(x);  // Output: 20
}

console.log(x);  // Output: 10

let str = Ashin
console.log(str)

str = "xyz"
console.log(str)