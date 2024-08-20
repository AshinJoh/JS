let i;
for(i = 10;i >= 0; i--){
    if(i == 7){
        continue;
    }
    console.log(i);
}
console.log(" ");

let age = 10;
do{
    console.log(age);
    age -= 1;
}while(age > 0);

const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for(let x in person){
    text += person[x];
}
console.log(text)