let num = [2,3,5,1,7];
//FOR EACH
console.log(" ");
num.forEach((ele) => {
    console.log(ele * ele)
})

console.log(" ");
//for of
for(let i of num){
    console.log(i);
}

//for in
console.log(" ");
for(let i in num){
    console.log(num[i]);
}
