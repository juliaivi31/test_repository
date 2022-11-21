const some: any[] = [1, 2];
let elem2: any;
let elem3: any;
// function declaration
function decl(array: any) {
    if (array[1] != undefined) {
        elem2 = array[1];
    } else {
        elem2 = "bbb";
    };
    if (array[2] != undefined) {
        elem3 = array[2];
    } else {
        elem3 = "eee";
    }
    console.log(elem2, elem3);
}
decl(some);
// arrow function
const arr = (array: any) => {
    if (array[1] != undefined) {
        elem2 = array[1];
    } else {
        elem2 = "bbb";
    };
    if (array[2] != undefined) {
        elem3 = array[2];
    } else {
        elem3 = "eee";
    }
    console.log(elem2, elem3);
}
arr(some);