let numbers = [1,2,3,4];

let newNumbers = numbers.filter((num) => {
    return num%2==0;
});

console.log('Filtered Numbers : ', newNumbers);