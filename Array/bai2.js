function sumInput() {
  let arr = [];
  while (true) {
    let valueInput = prompt("Please enter number");
    if (!isNaN(valueInput) && valueInput != "" && valueInput != null) {
      arr.push(parseInt(valueInput));
    } else break;
  }
  let result = arr.reduce((sum, current) => sum + current, 0);
//   document.getElementById("demo").innerHTML = "Sum =  " + result;
  return result;
}
