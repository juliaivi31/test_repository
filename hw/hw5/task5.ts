function getSum(a: number, b: number) {
  if (a < b) {
    let result1 = 0;
    for (let i = a; i <= b; i++) {
      result1 = result1 + i;
    }
    console.log(result1);
  } else if (a > b) {
    let result2 = 0;
    for (let y = b; y <= a; y++) {
      result2 = result2 + y;
    }
    console.log(result2);
  } else if ((a = b)) {
    console.log(a || b, "Since both are same");
  }
}
getSum(-1, 0);
