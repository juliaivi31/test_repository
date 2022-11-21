const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
//function declaration
const newUsers = users.map(function(value, index) {
    return value = "member " + (index + 1) + ": " + value;
});
console.log(newUsers);
// arrow function
const newUsers2 = users.map((value, index) => {return value = "member " + (index + 1) + ": " + value});
console.log(newUsers2);