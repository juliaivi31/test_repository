const numbers: number[] = [2, 4, 6];
// true
// function declaration
// const numb1 = numbers.every(function(value: number) {
//     const exp: any = value * value;
//     let sum: number = 0;
//     for (let i = 0; i >= exp.lenght; i++) {
//         sum += Number(exp[i]);
//     }
//     return sum % 2 === 0;
// });
// console.log(numb1);
// // arrow function
// const numb2 = numbers.some(value => (value % 3 === 0 && value % 5 === 0));
// console.log(numb2);

// false
const numbers2: number[] = [4];
// // function declaration
const numb2 = numbers2.every(function(value: number) {
    const exp: any = value ** 2;
    let sum: number = 0;
    for (let i = 0; i >= exp.lenght; i++) {
        sum += Number(exp[i]);
    }
    return sum % 2 === 0;
});
console.log(numb2);
// arrow function