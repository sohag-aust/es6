/**
 * ES6 allows you to use an expression in brackets []. It’ll then use the result of the expression as the property name of an object.

See the following example:
 */

let propName = "c";
const rank = {
    a: 1,
    b: 2,
    [propName]: 3,
};

console.log(rank.c); // 3

/**
 * In this example, the [propName] is a computed property of the rank object. The property name is derived from the value of the propName variable.

When you access c property of the rank object, JavaScript evaluates the propName and returns the property’s value.

Like an object literal, you can use computed properties for getters and setters of a class. For example:

 */

let fullName = 'fullName';

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get[fullName]() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person = new Person('John', 'Doe');
console.log(person.fullName);

/**
 * How it works:

The get[name] is a computed property name of a getter of the Person class. 
At runtime, when you access the fullName property, the person object calls the getter and returns the full name.
 */