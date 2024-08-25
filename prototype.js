let a = {
    name: "Harry",
    age: 10
}

let p ={
    run: () => {
        console.log("RUN");
    }
}

p.__proto__ = {
    testname: "Alan"
}

a.__proto__ = p;
a.run();
console.log(a.testname);