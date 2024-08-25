
//Using CALLBACK
// function walkDog(callback){
//     setTimeout(() => {
//         console.log("Walking the dog");
//         callback();
//     }, 2500);  
// }

// function cleanKitchen(callback){
//     setTimeout(() => {
//         console.log("Cleaning Kitchen");
//         callback();
//     }, 1500);  
// }

// function Trash(callback){
//     setTimeout(() => {
//         console.log("Took trash");
//         callback();
//     }, 700);  
// } 

// walkDog( () => {
//     cleanKitchen( () => {
//         Trash(() => {
//             console.log("Finish Chores");
//         })
//     })
// })

function walkDog(){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const walked = true;
            if(walked)
                {resolve("Walking the dog");}
            else{
                reject("Didnt Walk");
            }
        }, 2000);  
    });
}

function cleanKitchen(){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve("Cleaning");
        }, 1500);  
    });
}

function Trash(){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve("Trash");
        }, 1000);  
    });  
} 

walkDog().then(value => {console.log(value); return cleanKitchen()})
          .then(value => {console.log(value); return Trash()})
          .then(value => {console.log(value); console.log("FINSHED")})
          .catch(error => console.log(error));