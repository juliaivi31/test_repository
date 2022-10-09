function getSumNumbers(sumNumber: number): number {
  let result = 0;
  const sumString = String(sumNumber);
  for (let i = 0; i < sumString.length; i++) {
    result = result + Number(sumString[i]);
  }
  return result;
}
console.log(getSumNumbers(2021));
