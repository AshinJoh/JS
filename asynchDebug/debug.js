console.log('Executing line by line 1');
console.log('Executing line by line 2');

function waitAndExecute() {
    setTimeout(function(){
        console.log('Waited and executed');
    }, 1000);
}

function executeOnResize(){
    console.log('executed on resize');
}

function add(a, b){
    return a + b;
}

window.addEventListener('resize', executeOnResize);

document.getElementById('addValueBtn').addEventListener('click', function(){
    var c = add(10, 15);
    console.log('value :', c);
});