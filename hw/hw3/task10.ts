const key = true;
const documents = true;
const pen = true;
const apple = false;
const orange = true;

if (key && documents && pen && (apple || orange)) {
  console.log("Все взяли");
} else {
  console.log("Что-то забыли");
}
