const binary = [0, 0, 0, 0];
binary[1] = 1;
binary[3] = 1;
const binary2 = [0, 1, 0];
const newBinary = binary.concat(binary2);
console.log(newBinary.join(""));
