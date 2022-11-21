const salad = new Map<string, number>([
    ["огурец", 300],
    ["помидор", 200],
    ["соль", 10],
    ["сметана", 110]
]);
// function declaration
function decl(map: any) {
    for (const [key, value] of map) {
        if (value > 100) {
            console.log(key);
        }
    }
};
decl(salad);
// arrow function
const arr = (map: any) => {
    for (const [key, value] of map) {
        if (value > 100) {
            console.log(key);
        }
    }
};
arr(salad);