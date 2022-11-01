const salaries: any = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  andrey2: 664,
  alexandra: 199,
};
const employees = Object.keys(salaries).length;
let sumSalaries = 0;
for (const salariesKey in salaries) {
  sumSalaries += salaries[salariesKey];
}
const middleSalaries = sumSalaries / employees;
console.log(middleSalaries);
