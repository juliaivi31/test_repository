const evenNumbers: number[] = [2, 4, 6, 8, 10];
const oddNumbers: number[] = [1, 3, 5, 7, 9];
const newArray: number[] = evenNumbers.concat(oddNumbers);
console.log(newArray);
console.log("Индекс числа 8: " + newArray.indexOf(8));
