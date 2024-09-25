// var multiply = (x, y) => {return x * y};

// console.log(multiply(2, 5));
// console.log(multiply(3, 5));

// const Hello = (name) => {
//     console.log(`Hello ${name}`);
// }

// Hello("Ashin");


class person{
    constructor(name){
        this.name = name;
    }
    
    getname(){
        setTimeout(function (){
            console.log(this.name)
        }, 2000)
    }

    getArrowName(){
        setTimeout(() => {
            console.log(this.name)
        }, 1000)
    }
}

let emp = new person("Ashin");
emp.getname();
emp.getArrowName();