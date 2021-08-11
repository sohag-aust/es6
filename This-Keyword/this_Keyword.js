// there are 4 types of bindings in this keyword

/**
 * 1) implicit bindings
 * 2) explicit bindings
 * 3) new bindings
 * 4) window bindings
 */


// example of : 1) implicit bindings
var obj = {
    name:'Shohag',
    age:26,
    printName:function() {
        console.log(`Name : ${this.name}`);
    }
}

obj.printName();

// ex-2

var printPlayerNameFunction = function(obj) {
    console.log('Object : ', obj);
    obj.printPlayerName = function() {
        console.log(`Name : ${this.name}`);
    }
    console.log('Object : ', obj);
}

var sakib = {
    name:'Sakib',
    age:33
}

var tamim = {
    name:'Tamim',
    age:32
}

printPlayerNameFunction(sakib);
sakib.printPlayerName();

printPlayerNameFunction(tamim);
tamim.printPlayerName();

// example of : 2) explicit bindings
function printName1() {
    console.log(`Name in explicit binding: ${this.name}`);
}

var mushi = {
    name:'Mushfiq',
    age:25
}

printName1.call(mushi);

// .bind method
var bindMethodInExplicitBinding = printName1.bind(mushi); // as like call method, but bind method returns a function
bindMethodInExplicitBinding();

// we can pass extra argument in call and bind method

function printInfo(extraInfo) {
    console.log(`${this.name} is a ${extraInfo}`);
}

var bindMethodInExplicitBinding2 = printInfo.bind(mushi,'wicketkeeper');
bindMethodInExplicitBinding2();

// .apply method works as call but there is an option of passing the argument as an array, passing single value as argument is recommended
function extraInfo(role1,role2) {
    console.log(`${this.name} is a ${role1} ${role2}`);
}

extraInfo.apply(mushi, ["wicketkeeper","batsman"]);


/** rule-3 : new Binding */
function functionAsConstructor(name,age) {
    // let this = Object.create(null); // internally works
    this.name = name;
    this.age = age;
    console.log(`${this.name} is ${this.age} year's old`);
    // return this; // internally works
}

var Person = new functionAsConstructor('Shohag', 26);

/** rule-4 : window Binding */

// when there is no option for binding. then , the this keyword is compared with the window object
function printMyName() {
    //console.log((window === this));
    console.log(this);
    console.log('Name in window binding : ', this.name);
}

var shohag = {
    name:'Shohag',
    age:26
}

printMyName();