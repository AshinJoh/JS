const person1 = {
    fName: "Spongebob",
    lName: "Sqaurepants",
    age: 30,
    isEmployed: true,
    sayHello: () => {
        console.log("Hello from sponge");
    }
}

const person2 = {
    fName: "Patrick",
    lName: "Star",
    age: 32,
    isEmployed: false,
    sayHello(){
        console.log("Hello from patrick");
    },
    addNum: (a, b) => {
        console.log("Sum is ", a + b);
    }
}

person2.sayHello();
person2.addNum(3, 5);