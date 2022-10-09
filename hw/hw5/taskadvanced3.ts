function purchase(allMoney: number): number {
  let allPayments = 0;
  const phone = 30000;
  const accessorise = 4000;
  const tax = 0.2;
  const onePayment = (phone + accessorise) * (tax + 1);
  while (allPayments <= allMoney) {
    console.log("Планируется покупка: Стоимость телефона с аксессуарами: " + onePayment + "₽");
    if (allMoney - allPayments > onePayment) {
      allPayments += onePayment;
      console.log("Совершена покупка. На счету остается: " + (allMoney - allPayments) + "₽");
    } else {
      console.log(
        "Недостаточно денег для новой покупки, на счету всего " +
          (allMoney - allPayments) +
          "₽, а покупка обойдется в " +
          onePayment +
          "₽",
      );
      break;
    }
  }
  return allPayments;
}
console.log("Шоппинг окончен. Стоимость всех покупок: " + purchase(200000) + "₽");
