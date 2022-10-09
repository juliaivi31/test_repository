function overpayment(creditAmount: number): number {
  const months: number = 60;
  const percent: number = 0.17;
  const y = (creditAmount / months) * percent * months;
  return y;
}
console.log(overpayment(100000));
