let num = [1,2,3,4,5];
let maximum = Math.max(...num);
let minimum = Math.min(...num);

console.log(minimum);
console.log(maximum);

let uname = "Ashin";
let letters = [...uname].join('');
console.log(letters);

let fruits = ["apple","orange"];
let vegetables = ["carrot","celery"];
let food = [...fruits, ...vegetables, "eggs", "milk"];
console.log(food);