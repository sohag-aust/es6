function hello(name, print) {
    print(name);
}

// here callBack function is doing different tasks in 3 different cases, so in live application we can do different task in a same callback function
hello('Shohag', (name)=> {
    console.log(`Hi : ${name}`);
});

hello('Ashik', (name)=> {
    console.log(`Hello : ${name}`);
});

hello('AB C', (name)=> {
    console.log(`Name length is : ${name.length}`);
});