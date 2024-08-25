function sum(a, b){
    return new Promise((resolve, reject) => {
        let result = a + b;
        resolve(result);
    }) 
}

sum(5, 10).then(value => console.log(value));