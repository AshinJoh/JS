let time = 25;
let isHungry = true

if(time < 12 ){
    console.log("Morning");
    if(isHungry){
        console.log("Did not eat breaakfast")
    }
}
else if(time > 24){
    console.log("Not possible")
}
else{
    console.log("Evening");
}