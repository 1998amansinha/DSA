var evalRPN = function (tokens) {
  let stk = [];
  for (let token of tokens) {
    if (token === "/" || token === "*" || token === "+" || token === "-") {
      let b = stk.pop();
      let a = stk.pop();
      switch (token) {
        case "/":
          stk.push(Math.trunc(a / b));
          break;
        case "*":
          stk.push(a * b);
          break;
        case "+":
          stk.push(a + b);
          break;
        case "-":
          stk.push(a - b);
          break;
      }
    } else {
      stk.push(Number(token));
    }
  }
  return stk.pop();
};

console.log(evalRPN(["4", "13", "5", "/", "+"]));
