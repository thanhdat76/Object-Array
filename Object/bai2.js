function isEmpty (obj){
    if(Object.keys(obj).length == 0){
        return true;
    }
    return false;
}

// let id = Symbol("id")

// const user = {
//     name: 'dat',
//     age: 36,
//     sex: 'male',
//     [id] : 2
// }

// let arr = Object.keys(user)
// console.log(isEmpty(user))