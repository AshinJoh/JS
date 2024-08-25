class Animal{
    alive = true;

    eat = () =>{
        console.log(`This ${this.name} is eating` );
    }

    sleep = () =>{
        console.log(`This ${this.name} is sleeping` );
    }
}
class Rabbit extends Animal{
    name = "Rabbit";
    run = () => {
        console.log("Rabbits can run");
    }
}

class Fish extends Animal{
    name = "Fish";
    swim = () => {
        console.log("Fish can swim");
    }
}

const rabbit = new Rabbit();
const fish = new Fish();

rabbit.eat();
rabbit.alive = false;
console.log(rabbit.alive)
rabbit.run();
fish.run();