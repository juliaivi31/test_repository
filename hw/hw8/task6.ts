// true
const numbers = [5, 9, 13, 24, 54, 15, 13, 99, 1, 5];
// function declaration
const numb1 = numbers.some(function(value) {
    return value % 3 === 0 && value % 5 === 0;
});
console.log(numb1);
// arrow function
const numb2 = numbers.some(value => (value % 3 === 0 && value % 5 === 0));
console.log(numb2);

// false
const numbers2 = [13, 24, 10, 13, 99, 1];
// function declaration
const numb3 = numbers2.some(function(value) {
    return value % 3 === 0 && value % 5 === 0;
});
console.log(numb3);
// arrow function
const numb4 = numbers2.some(value => (value % 3 === 0 && value % 5 === 0));
console.log(numb4);