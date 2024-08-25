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

async function doChores() {
    try{
    const walk = await walkDog();
    console.log(walk);

    const clean = await cleanKitchen();
    console.log(clean);

    const trash = await Trash();
    console.log(trash);
    }
    catch(error){
        console.error(error);
    }
}

doChores();