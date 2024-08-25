
async function harry() {
    let delhi = new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(" 27 Degrees");
        }, 1000);
    } )
    
    let bangalore = new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(" 24 Degrees");
        }, 2000);
    } )

    let delhiWeather = await delhi;
    let bangaloreWeather = await bangalore;
    return [delhiWeather, bangaloreWeather];
}

const cherry = async () => {
    console.log("Waiting");
}


const main1 = async () => {
    console.log("Welcome to weather room");
        let a = await harry()
        console.log(a);
        let b = await cherry()
}

main1()