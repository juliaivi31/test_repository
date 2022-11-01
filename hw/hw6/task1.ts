const testObject: any = {
  value1: 1,
  value2: 2,
};
delete testObject.value1;
delete testObject.value2;
console.log(testObject);
