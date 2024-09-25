
// try{
//     console.log("hi")
//     console.log(hello);
//     }
// catch(error){
//     console.log(error);
//     }
// finally{
//     console.log("No problem");
// }

let json = '{"age":30}';

try{
    let user = JSON.parse(json);
    if(!user.name){
        throw new Error("Incomplete data");
    }
}catch(e){
    console.log("JSON ERROR ->" + e)
}
