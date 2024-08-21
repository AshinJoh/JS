//MAP
let arr = [45 ,21, 23];

let a = arr.map((val, ind) => {
    return val + ind;
})
console.log(arr);
console.log(a);

console.log(" ")
//FILTER
let arr2 = [45, 21, 23, 0, 3, 5];
let a2 = arr2.filter((val) => {
    return val<10
})
console.log(a2);

console.log(" ");
//REDUCE
let arr3 = [1,2,3,5,2,1,4]
let a3 = arr3.reduce((h1, h2) => {
    return h1 + h2;
})

console.log(a3);