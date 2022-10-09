const foo = function () {
  console.log("foo");
};
const boo = function () {
  console.log("boo");
};
function fooboo(isTrue: boolean, func1: any, func2: any) {
  if (isTrue) {
    return (func1 = foo());
  } else {
    return (func2 = boo());
  }
}
fooboo(false, foo, boo);
