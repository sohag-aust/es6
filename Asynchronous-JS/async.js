const processOrder = (customer) => {
    console.log(`Processing order from customer1`);

    let currentTime = new Date().getTime();

    // asynchronous function, callStack handed this setTimeout function to webAPI which is the part of runtime environment of the browser
    // after the completion of setTimeOut function, the log (which is written as callBack function inside the setTimeOut function) 
    // goes to callBackQueue of the runtime environment of the browser.
    // then, there is another option in the runtime environment in the browser, which is event-loop
    // when , callBackQueue get some function then, event-loop runs, and pass that function to callStack of the browser.

    setTimeout(()=>{
        console.log(`== cooking completed ==`);
    },3000);

    console.log(`Order processed for customer1`);
}

console.log(`Take order from customer1`);
processOrder();
console.log(`Completed order for customer1`);

// here we are on the sequence mismatch problem, so trying to solve it using callBack function. -> callBack.js