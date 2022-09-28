const testNumb = 15;
if (testNumb % 5 === 0 && testNumb % 3 !== 0) {
  console.log("Fiz");
} else if (testNumb % 3 === 0 && testNumb % 5 !== 0) {
  console.log("Buz");
} else if (testNumb % 5 === 0 && testNumb % 3 === 0) {
  console.log("FizBuz");
}
