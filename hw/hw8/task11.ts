const person = {
    name: "Петр", 
    "surname": "Петров", 
    "age": "20 лет",
};
// @ts-ignore
let name: any;
let surname: any;
let age: any;
// function declaration
function pers(obj: any) {
    // @ts-ignore
    if (name in obj) {
        // @ts-ignore
        name = obj.name;
    } else {
        // @ts-ignore
        name = "Аноним";
    };
    if ("surname" in obj) {
        surname = obj.surname;
    } else {
        surname = "Анонимович";
    };
    if ("age" in obj) {
        age = obj.age;
    } else {
        age = "? лет";
    };
    console.log(person);
}
pers(person)
// arrow function