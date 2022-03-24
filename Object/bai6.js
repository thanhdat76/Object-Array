const Calculator = {
  read(val1, val2) {
    this.val1 = val1;
    this.val2 = val2;
  },
  sum() {
    return this.val1 + this.val2;
  },
  mul() {
    return this.val1 * this.val2;
  },
};

Calculator.read(2, 3);

console.log(Calculator.mul());
