function triangle(a: number, b: number, c: number) {
  if (a + b > c && b + c > a && a + c > b) {
    console.log(true);
  } else {
    console.log(false);
  }
}
triangle(3, 3, 7);
