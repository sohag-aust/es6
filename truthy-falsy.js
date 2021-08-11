var test = true;

if(test) {
    console.log('I am true');
}else {
    console.log('I am false');
}

var test1 = 'test';

// here test1 is not true but its value is truthy
if(test1) {
    console.log('I am truthy');
}else {
    console.log('I am falsy');
}

var test6=[1,2,3];

// here truthy value checking using array
if(test6) {
    console.log('I am truthy');
}else {
    console.log('I am falsy');
}

var test2 = "";

// here test2 is not false but its value is falsy because, it has empty value
if(test2) {
    console.log('I am truthy');
}else {
    console.log('I am falsy');
}

// in javaScript the truthy value is like -> if the value is not null/0/false/""(this is blank/empty value)/undefined/NaN(not a number)
var test3; // example of undefined value
console.log(typeof test3);
if(test3) {
    console.log('I am truthy');
}else {
    console.log('I am falsy');
}

var test4=null; // example of null value
console.log(typeof test4);
if(test4) {
    console.log('I am truthy');
}else {
    console.log('I am falsy');
}