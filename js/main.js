// calculate btn
document.getElementById("calculate-btn").addEventListener("click", function () {
  const income = getValue("income");
  const food = getValue("food");
  const rent = getValue("rent");
  const clothe = getValue("clothe");
  const add = sum(food, rent, clothe);
  textAdd("sum-balance", add);
  const sumBalance = getText("sum-balance");
  const balance = parseInt(income) - parseInt(sumBalance);
  textAdd("total-balance", balance);
});
// save btn
document.getElementById("save-btn").addEventListener("click", function () {
  const income = getValue("income");
  const save = getValue("save");
  const saveTotal = (parseInt(income) / 100) * parseInt(save);
  textAdd("save-amount", saveTotal);
  const totalBalance = getText("total-balance");
  const remainingAmountTotal = parseInt(totalBalance) - parseFloat(saveTotal);

  textAdd("remaining-amount", remainingAmountTotal);
});
