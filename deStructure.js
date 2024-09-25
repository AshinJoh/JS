
// ARRAY DESTRUCTURING
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b)


const colors =["red","green","blue","white","black"];
[colors[0], colors[2]] = [colors[2],colors[0]]
console.log(colors)

const [first, second, third, ...extra] = colors;
console.log(first, second, third)
console.log(extra)

//OBJECT DESTRUCTURING

const person1 ={
    fname: "Alex",
    lname: 'Johns',
    age: 30
}

const person2 ={
    fname: "Alan",
    lname: 'Johns',
    age: 31
}
const {fname,lname,age} = person1
console.log(fname,lname,age)