var styles = ["Jazz", "Blues"]

styles.push("Rock-n-Roll")

styles.splice(1,1,"classics")

function findInTheMid(arr){
    let lengthArr = arr.length
    if(lengthArr % 2 != 0){
        let mid = Math.floor(lengthArr / 2) 
        return arr[mid]
    }
    return
}

var firstEle = styles.shift()
console.log(firstEle)

styles.unshift("Rap", "Reggae")

console.log(styles)