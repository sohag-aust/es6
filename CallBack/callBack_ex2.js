const obj = {
    name: 'Shohag',
    age: 26,
    email: 'sohag@gmail.com'
};

function receiveObj(obj, callBack) {
    console.log(`Object name: ${obj.name}`);

    if(obj.age >= 18) {
        callBack(obj.email);
    }else {
        console.log('Not eligible');
    }
}

receiveObj(obj, (email)=> {
    console.log(`mail to : ${email}`);
});


/** ================================================= */
function myFunc(name, callBack1, callBack2) {
    console.log(`Name: ${name}`);

    callBack1(name);
    callBack2(name);
}

myFunc('Shohag', (name)=>{
    let nameUpperCase = name.toUpperCase();
    console.log(`Name in UpperCase : ${nameUpperCase}`);
}, (name)=>{
    let nameLowerCase = name.toLowerCase();
    console.log(`Name in LowerCase : ${nameLowerCase}`);
});