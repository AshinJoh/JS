const num = [1,2,3,4,5];

//SLICE
console.log(num.slice(-2));
console.log(num.slice(0,3))

console.log(" ");
//SPLICE
console.log(num.splice(2, 2, 6, 7));
console.log(num);

console.log(" ");
//Sort
test = [5, 1, 3, 8 ,2, 7 , 121, 55, 87];
console.log(test.sort((a, b) => {return a - b}));

console.log(" ");
//reverse
console.log(test.reverse())

console.log(" ");
//FILL
let sol = [1,2,3,4,5];
sol.fill(0, 1, 4);
console.log(sol);

console.log();
//INCLUDES
let names = ["Ashin", "Alan", "Ansu"];
console.log(names.includes("Ashin"));

//Reverse
let str = "Hello";
console.log(str.split('').reverse().join(''));

console.log(" ");
//UNSHIFT
let val = [1,2,3];
val.unshift(-2,-1,0);
console.log(val);

console.log(" ");
//indexOf
console.log(val.indexOf(0)); //Returns index else -1 if not present

console.log(" ");
//FIND
console.log(names.find((item) => {
    return item === "John";
}))
