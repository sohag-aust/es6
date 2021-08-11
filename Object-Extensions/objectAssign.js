let widget = {
    color: 'red'
};

let clonedWidget = Object.assign({}, widget);

console.log(clonedWidget);

// Using JavaScript Object.assign() to merge objects
let box = {
    height: 10,
    width: 20
};

let style = {
    color: 'Red',
    borderStyle: 'solid'
};

let styleBox = Object.assign({}, box, style);

console.log(styleBox);

// If the source objects have the same property, the property of the later object overwrites the earlier one:
let box1 = {
    height: 10,
    width: 20,
    color: 'Red'
};

let style1 = {
    color: 'Blue',
    borderStyle: 'solid'
};

let styleBox1 = Object.assign({}, box1, style1);

console.log(styleBox1);
