const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// function declaration
fibonacci.forEach(function(value) {
   console.log(value);
});
// arrow function
fibonacci.forEach((value) => {console.log(value)});