function trimString(fullString: string, fromString: number, toString: number): string {
  const result: string = fullString.substring(fromString, toString);
  return result;
}
console.log(trimString("Какая-то рандомная строка", 9, 18));
