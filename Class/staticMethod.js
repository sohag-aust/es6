// In ES6, you define static methods using the static keyword.

class Person {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
	static createAnonymous(gender) {
		let name = gender == "male" ? "John Doe" : "Jane Doe";
		return new Person(name);
	}
}

// to invoke the static method, you use the following syntax:

let anonymous = Person.createAnonymous("male");
console.log(anonymous);

// If you attempt to call the static method from an instance of the class, you’ll get an error. For example:

/**
 *  let person = new Person('James Doe');
    let anonymous = person.createAnonymous("male");

    TypeError: person.createAnonymous is not a function
 *  
 * */ 
