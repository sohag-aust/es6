let values = [1,2,3,4,5,6];

let newValues = values.map((value) => {
    return value*2;
})

console.log('Prev Array : ', values);
console.log('New Array : ', newValues);

// so , we can see , array.map doesn't change the main array, it returns a new array with new values