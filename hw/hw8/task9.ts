// Используя коллекцию **`Set`** создайте массив неповторяющийхся значений:
const numbers = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5];
// function declaration
function decl(set: any) {
    const newSet = new Set(set);
    console.log(newSet)
};
decl(numbers);
// // arrow function
const arr = (set2: any) => {
    const newSet = new Set(set2);
    console.log(newSet)
};
arr(numbers);