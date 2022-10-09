function chocolate(length: number, width: number) {
  const bar = length * width;
  const brokes = bar / width - 1 + (bar / length - 1) * length;
  return brokes;
}
console.log(chocolate(2, 1));
