const count = 42;
const userName = "42";

// 1 variant
console.log(`${count}`, "====", typeof `${count}`);
console.log(parseInt(userName), "====", typeof parseInt(userName));

// 2 variant
const stringCount = String(count);
const numberUserName = Number(userName);
console.log(stringCount, "====", typeof stringCount);
console.log(numberUserName, "====", typeof numberUserName);
