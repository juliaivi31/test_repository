const str: string = "Произвольная строка";
const letter = str.charAt(38);
if (letter == "") {
  console.log("Вы вышли за границу строки");
} else {
  console.log(letter);
}
