const numbers = [5, 43, 63, 23, 90];
// 1 variant
while (numbers.length > 0) {
  numbers.pop();
}
console.log(numbers);
// 2 variant
for (let i = numbers.length; i > 0; i--) {
  numbers.shift();
}
console.log(numbers);
