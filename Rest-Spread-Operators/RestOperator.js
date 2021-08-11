// used in a function parameter

function f(a, b, ...c) {
    c.forEach((val) => {
        console.log('val : ', val);
    })
}

f(1,2,3,4,5,6,7);