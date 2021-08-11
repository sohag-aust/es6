class Item {
	static count = 0;
	static getCount() {
		return Item.count;
	}
}

console.log(Item.count); // 0
console.log(Item.getCount()); // 0


class Item1 {
	constructor(name, quantity) {
        console.log('constructor is called...');
		this.name = name;
		this.quantity = quantity;
		this.constructor.count++;
	}
	static count = 0;
	static getCount() {
        console.log('\nstatic getCount method is called...');
		return Item1.count;
	}
}

console.log('\n==> First Object is creating !');
let pen = new Item1("Pen", 5);

console.log('\n==> Second Object is creating !');
let notebook = new Item1("notebook", 10);

console.log(Item1.getCount()); // 2

