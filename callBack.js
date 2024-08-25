sum(display, 5, 6);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function display(result){
    console.log(result);
}