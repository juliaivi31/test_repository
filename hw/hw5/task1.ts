let result: number = 0;
function getSum(maxNumber: number): number {
  for (let x = 0; x <= maxNumber; x++) {
    result = result + x;
  }
  return result;
}
console.log(getSum(100));
