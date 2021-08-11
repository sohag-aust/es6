class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }

    static helloWorld() {
        console.log('Hello World');
    }
}

class Bird extends Animal {
    constructor(legs, color) {
		super(legs);
		this.color = color;
	}

    fly() {
        console.log('flying');
    }

    getColor() {
		return this.color;
	}
}


let bird = new Bird(2);

bird.walk();
bird.fly();

let pegion = new Bird(2, "white");
console.log(pegion.getColor());

Bird.helloWorld(); // Accessing static method from parent class

/**
 * Shadowing methods
ES6 allows the child class and parent class to have methods with the same name. 
In this case, when you call the method of an object of the child class, the method in the child class will shadow the method in the parent class.

The following Dog class extends the Animal class and redefines the walk() method:
 */

class Dog extends Animal {
    constructor() {
        super(4);
    }
    walk() {
        super.walk();
        console.log(`go walking`);
    }
}

let bingo = new Dog();
bingo.walk(); // go walking
