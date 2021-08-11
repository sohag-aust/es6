class Person {
    constructor(name) {
        this.name = name;

        /**The JavaScript “this” keyword has a special meaning inside of that object: it refers to itself. 
         * In other words, when you create your constructor function, 
         * you can use the “this” keyword to reference the object that WILL be created when the constructor is instantiated. */
    }

    getName() {
        return this.name;
    }
}

let obj = new Person('Shohag');
console.log(`Name : ${obj.getName()}`);

console.log(`Type of Person : ${typeof Person}`);

console.log(`Obj instance of Person ? ${obj instanceof Person}`);
console.log(`Obj instance of Object ? ${obj instanceof Object}`);