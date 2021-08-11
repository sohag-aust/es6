// when there is no guarantee that the task will be done within the time-limit then we can use callBack function, instead of setTimeOut function

const takeOrder = (customer, callBack) => {
    console.log(`take order for ${customer}`);
    console.log(`== callBack is called == ${callBack}`);
    callBack(customer);
}

const processOrder = (customer, callBack) => {
    console.log(`Processing order from ${customer}`);

    let currentTime = new Date().getTime();

    setTimeout(()=>{
        console.log(`== cooking completed ==`);
        console.log(`Order processed for ${customer}`);
        callBack(customer);
    },3000);
}

const completeOrder = (customer) => {
    console.log(`Completed order for ${customer}`);
}

takeOrder('Customer-1', (customer) => {
    console.log('== function is called ==');
    processOrder(customer, (customer) => {
        completeOrder(customer);
    });
});

takeOrder('Customer-2', (customer) => {
    console.log('== function is called ==');
    processOrder(customer, (customer) => {
        completeOrder(customer);
    });
});

// now we want to avoid the callBack-hell problem -> go to promise.js

