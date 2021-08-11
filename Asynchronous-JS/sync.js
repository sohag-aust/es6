const processOrder = (customer) => {
    console.log(`Processing order from customer1`);

    let currentTime = new Date().getTime();

    while(currentTime + 3000 >= new Date().getTime());

    console.log(`Order processed for customer1`);
}

console.log(`Take order from customer1`);
processOrder();
console.log(`Completed order for customer1`);

/**
 * sequence of the functions call in the call-stack
 * 
 * 1) main()
 * 2) log : in line-11 // log functions will print instantly
 * 3) processOrder()
 * 4) log : in line-2 // print instantly
 * 5) get while loop and all the activity of the browser will be on waiting mode until loop ends
 * 6) after the end of loop , log : in line-8 // print instantly
 * -- complete the actions of processOrder function
 * 7) log : in line-13 // print instantly
 */

 // now , we are going to avoid the blocking behavior of javaScript, go to async.js