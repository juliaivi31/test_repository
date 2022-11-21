const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// function declaration
const newFibonacci= fibonacci.reduce(function(sum, nextValue) {
    return sum + nextValue;
}, 0);
console.log(newFibonacci);
// arrow function
const newFibonacci2 = fibonacci.reduce(((sum, nextValue) => {return sum + nextValue}), 0);
console.log(newFibonacci2);