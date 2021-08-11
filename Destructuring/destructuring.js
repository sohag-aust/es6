const obj = {
    name:'Shohag',
    age:26,
    uni:'AUST'
}

// if we want only the name, then put the name in the variable section and destruct it from the object
const {name} = obj;
console.log('Name : ', name);

// if we want to destruct the name but in different variable , then we can use alias

const {name:title} = obj;
console.log('Title : ', title);


// destructuring in a nested object
const obj1 = {
    name:'Shohag',
    age:26,
    education:{
        degree:'BSC'
    }
};

const {education : {degree}} = obj1;
console.log('Degree : ', degree);

// now , considering one use-case, think: we receive the obj1 from an API,
// where there is a chance of missing the education option., then the code will through an error,
// so, we can put a default value to the education section to avoid the error
// example ---

const obj2 = {
    name:'Shohag',
    age:26
};

const {education2 : {degree2} = {}} = obj2;
console.log('Degree from API missing education : ', degree2);


/*** Array destructuring */
const numbers = [1,2,3,4,5,6];
const [a] = numbers;
console.log('a : ',a);

const [,b,,d,,f] = numbers;
console.log('b : ', b);
console.log('d : ', d);
console.log('f : ', f);

const arrayOfNumbers = [1,2,[3,4,5],6];
const [,,ara,] = arrayOfNumbers;
console.log('ara : ', ara); 
ara.forEach((val) => console.log('val : ',val));


/** swapping 2 values using destructuring */
let x = 1;
let y = 2;

// old way
let temp = x;
x = y;
y = temp;
console.log(x,' ',y);

// new way using destructuring
[x,y] = [y,x];
console.log(x,' ',y);