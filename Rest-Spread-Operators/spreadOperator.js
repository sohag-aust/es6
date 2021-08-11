let numbers = [1,2,3,4,5];

let numbers2 = [...numbers, 6,7];
console.log('New Numbers : ', numbers2);

// amader always akta array theke arekta array te copy kore(spread operator diye) niye jete hobe.
// direct assign kore dile reference soho chole jabe, jar karone akta array te change krle arekta array teo change hbe
// ex:
let a = [1,2,3];
let b = a; // not recommended
let c = [...a];
console.log('C : ', c);
let d = [...a, ...c]; // attaching 2 arrays into 1
console.log('D : ', d);

// object spreading
let obj = {
    name:'Shohag',
    age:26
}

let obj2 = {
    uni:'Aust',
    lang:'Java'
}

let newObj = {...obj, ...obj2};
console.log('New Object : ', newObj);