function varsity(varsityName) {
    return function department(departmentName) {
        return `${varsityName} has a ${departmentName} department`;
    }
}

var myVarsity = varsity('AUST');
console.log(`${myVarsity}`);

var myDepartment = myVarsity('CSE');
console.log(`${myDepartment}`);

// so we can simplify it

var result = varsity('BUET')('CE');
console.log(`${result}`);