class Person {
    constructor(name) {
        this.setName(name);
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }
}

let person = new Person('Jane Doe');
console.log(person.getName()); // Jane Doe

person.setName('Jane Smith');
console.log(person.getName()); // Jane Smith

/**
 * The getName() and setName() methods are known as getter and setter in other programming languages such as Java and C++.
 * ES6 provides a specific syntax for defining the getter and setter using the get and set keywords. For example:
 */

 class Person1 {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }

    set name(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this._name = newName;
    }
}

let person1 = new Person1('Ashik');
console.log(person1.name); // Ashik

person1.name = 'Shohag'; // calling setter for changing the name

console.log(person1.name); // Shohag

/**
 * How it works.

First, the name property is changed to _name to avoid the name collision with the getter and setter.

Second, the getter uses the get keyword followed by the method name:

get name() {
    return this._name;
}

To call the getter, you use the following syntax:

let name = person.name;


When JavaScript sees the access to name property of the Person class, it checks if the Person class has any name property.

If not, JavaScript checks if the Person class has any method that binds to the name property. 
In this example, the name() method binds to the name property via the get keyword. 
Once JavaScript finds the getter method, it executes the getter method and returns a value.

Third, the setter uses the set keyword followed by the method name:

set name(newName) {
    newName = newName.trim();
    if (newName === '') {
        throw 'The name cannot be empty';
    }
    this._name = newName;
}

JavaScript will call the name() setter when you assign a value to the name property like this:

person.name = 'Jane Smith';

If a class has only getter but not setter and you attempt to use the setter, the change won’t take any effect. 
See the following example:

class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}

let person = new Person("Jane Doe");
console.log(person.name);

// attempt to change the name, but cannot
person.name = 'Jane Smith';
console.log(person.name); // Jane Doe

In this example, the Person class has the name getter but not the name setter. It attempts to call the setter. 
However, the change doesn’t take effect since the Person class doesn’t have the name setter.

 */