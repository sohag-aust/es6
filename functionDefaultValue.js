function myFunc(a=10) {
    return a;
}

console.log('My Func-1 : ', myFunc(5)); // value pass krci
console.log('My Func-2 : ', myFunc()); // value pass korinai , tai default value 10 show krbe
console.log('My Func-3 : ', myFunc(undefined)); // value pass korinai , tai default value 10 show krbe
console.log('My Func-4 : ', myFunc(null)); // value pass krci
console.log('My Func-5 : ', myFunc("")); // value pass krci