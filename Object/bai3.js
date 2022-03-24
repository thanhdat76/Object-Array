let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function isEmpty (obj){
    if(Object.keys(obj).length == 0){
        return true;
    }
    return false;
}

function payroll (obj){
    if(isEmpty(obj)){
        return 0;
    }
    let total = 0;
    for(key in obj){
        total += obj[key]
    }
    return total;
}

var totalSalary = payroll(salaries)

console.log(totalSalary)