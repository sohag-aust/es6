// hoisting means level up

// console.log('X : ', x);
// var x = 10;

// console.log('Y : ', y);
// let y = 20;

// let a;
// console.log('A : ', a);
// a=undefined;
// a="Bangladesh";

// let b; // b=undefined
// console.log('B : ', b);


/** More important hoisting example */
var LANGUAGE = 'Java';
var language = 'JavaScript';

function getLanguage() {
    // as hoisting means level up in the scope, so var is assigned here again in the function scope.
    // here , var language = undefined, then it passes the if condition and then will supply weird result
    if(!language) {
        var language = LANGUAGE;
    }
    return language;
}

console.log(`I love ${getLanguage()}`);

// we can use let to avoid the weird result
let LANGUAGE1 = 'Java';
let language1 = 'JavaScript';

function getLanguage1() {
    if(!language1) {
        let language1 = LANGUAGE;
    }
    return language1;
}

console.log(`I love ${getLanguage1()}`);


/** Hoisting in Function */
function myFunc() {
    console.log('We are learning function hoisting!');
}
myFunc(); // so, normally we can call the function after the function definition, but we can also call the function before the 
         // function definition, which is known as hoisting, as the definition lifts at top

// so,

myFunction();
function myFunction() {
    console.log('Hoisting in function!');
}

// but

myFunc2();
const myFunc2 = function() {
    console.log('Hoisting in const function');
} 

// if we illustrate the immediate code through hoisting then it looks like below

const myFunc3;
myFunc3();

myFunc3 = undefined; myFunc3 = function() {
    console.log('Hoisting in const function');
}