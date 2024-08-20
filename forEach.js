let num = [2,3,5,1,7];
let sum = 0;

for(let i in num){
    sum += num[i];
}

console.log(sum);


//FOR EACH
console.log("FOR EACH:")
ans = 0;
num.forEach(myFunc);

function myFunc(val){
    ans += val;
}

console.log(ans)