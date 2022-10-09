((factorial: number) => {
  let result = 1;
  for (let x = 1; x <= factorial; x++) {
    result = result * x;
  }
  console.log(result);
})(5);
