let age=25;
let type = (age>=25) ? "Vaccinated" : "not Vaccinated";
console.log('Covid People : ', type);

age=12;
type = (age>=18) ? "adult"
                 : (age>=10 && age<=12) ? "young" : "child";
console.log('Age type : ', type);