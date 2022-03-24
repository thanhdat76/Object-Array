function multiplyNumeric(obj) {
  for (key in obj) {
    if (!isNaN(obj[key])) {
      obj[key] = obj[key] * 2
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu cafedev",
};

multiplyNumeric(menu);

console.log(menu);
