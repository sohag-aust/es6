var numbers = [1,2,3,4,5,6];

let sum = numbers.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
}, 0); // here 0 is the first value of prevValue, without it the sum won't be happened because, for the first time the prevValue will hold the value of undefined

console.log('Sum : ', sum);

// as the total values of the array reduces to a single value, that's why it is called the reduce method

// reduce method also takes 2 extra methods, like, index of the array, and the whole array. so if we need to access the index and the whole array we can do that

// example ---
let sum1 = numbers.reduce((prevValue, currentValue, index, numbers) => {
    
    console.log('\nprevValue: ', prevValue);
    console.log('currentValue: ', currentValue);
    console.log('index: ', index);
    console.log('numbers[index]: ', numbers[index]);

    return prevValue + currentValue + numbers[index]; // after each iteration the sum is storing on the prevValue
}, 0);


console.log('Sum1 : ', sum1);