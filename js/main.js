// calculate btn
document.getElementById("calculate-btn").addEventListener("click", function () {
  const income = getValue("income");
  const food = getValue("food");
  const rent = getValue("rent");
  const clothe = getValue("clothe");
  const add = sum(food, rent, clothe);
  //   validation
  if (income <= 0) {
    const incomeP = document.getElementById("income-p");
    incomeP.innerText = "* Please Enter the Money";
    return;
  } else {
    const incomeP = document.getElementById("income-p");
    incomeP.innerText = "";
  }
  if (food <= 0) {
    const incomeP = document.getElementById("food-p");
    incomeP.innerText = "* Please Enter the Money";
    return;
  } else {
    const incomeP = document.getElementById("food-p");
    incomeP.innerText = "";
  }
  if (rent <= 0) {
    const incomeP = document.getElementById("rent-p");
    incomeP.innerText = "* Please Enter the Money";
    return;
  } else {
    const incomeP = document.getElementById("rent-p");
    incomeP.innerText = "";
  }
  if (clothe <= 0) {
    const incomeP = document.getElementById("clothe-p");
    incomeP.innerText = "* Please Enter the Money";
    return;
  } else {
    const incomeP = document.getElementById("clothe-p");
    incomeP.innerText = "";
  }
  if (income < add) {
    alert("Not Enough Money");
    return;
  }
  textAdd("sum-balance", add);
  const sumBalance = getText("sum-balance");
  const balance = parseInt(income) - parseInt(sumBalance);
  textAdd("total-balance", balance);
});
// save btn
document.getElementById("save-btn").addEventListener("click", function () {
  const income = getValue("income");
  const save = getValue("save");
  //   validation
  if (save <= 0) {
    const incomeP = document.getElementById("save-p");
    incomeP.innerText = "* Please Enter the Money";
    return;
  } else {
    const incomeP = document.getElementById("save-p");
    incomeP.innerText = "";
  }
  const saveTotal = (parseInt(income) / 100) * parseInt(save);

  const totalBalance = getText("total-balance");
  if (saveTotal > totalBalance) {
    alert("Not Enough Money");
    return;
  }
  textAdd("save-amount", saveTotal);
  const remainingAmountTotal = parseInt(totalBalance) - parseFloat(saveTotal);

  textAdd("remaining-amount", remainingAmountTotal);
});
