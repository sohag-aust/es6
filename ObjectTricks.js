let obj = {
    name:'Shohag',
    age:26,
    uni:'Aust',
    lang:'Java'
}

// if we want to work with only object keys or values then , we can do this operations

let objectKeys = Object.keys(obj); // returns array of object keys
let objectValues = Object.values(obj); // returns array of object values

console.log('Object Keys : ', objectKeys);
console.log('Object Values : ', objectValues);

// also we can get the full object with the array of key & value
let objKeyValues = Object.entries(obj);
console.log('Object key&Value : ', objKeyValues);