// function open(...foods){
//     console.log(foods)
// }

// function get(...foods){
//     return foods;
// }

// const food1 = 'pizza';
// const food2 = 'burger';
// const food3 = 'sushi';

// //open(food1,food2,food3);

// const foods = get(food1,food2,food3);
// console.log

function sum(...num){
    let result = 0;
    for(let number of num){
        result += number;
    }
    return result;
}

function avg(...num){
    let result = 0;
    for(let number of num){
        result += number;
    }
    return result / num.length;
}

const total = sum(1,2,3,4,5);
console.log(total)

const average = avg(10,45,64,84);
console.log(average)