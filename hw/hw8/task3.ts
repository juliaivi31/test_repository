const numbers = [7, -4, 32, -90, 54, 32, -21];
// function declaration
const newNumbers= numbers.filter(function(value) {
    return value >= 0;
});
console.log(newNumbers);
// arrow function
const newNumbers2 = numbers.filter((value) => {return value >= 0});
console.log(newNumbers2);