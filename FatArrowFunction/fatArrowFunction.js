console.log('-----With Normal Functions-----');
let obj = {
    frameworks:['React', 'Angular', 'Vue'],
    language:'JavaScript',
    printFrameWorks:function() {
        let self = this;
        this.frameworks.forEach(function(framework){
            console.log(`${framework} is a ${self.language} Framework!`);
        })
    }
}

obj.printFrameWorks();

let obj2 = {
    frameworks:['React', 'Angular', 'Vue'],
    language:'JavaScript',
    printFrameWorks:function() {
        this.frameworks.forEach((framework) => {
            console.log(`${framework} is a ${this.language} Framework!`);
        })
    }
}

// arrow function doesn't touch the this keyword
console.log('\n-----With Arrow Functions-----');
obj2.printFrameWorks();

// react e bivinno event call korar por oigula amra arrow function diye krte pari

// for..of and for..in loop and for..each loop
var names = ['A', 'B', 'C'];

console.log('--- for..in ---');
for(var name in names) {
    console.log(name);
}

console.log('--- for..of ---');
for(var name of names) {
    console.log(name);
}

console.log('--- for..each ---');
names.forEach(name => console.log(name));