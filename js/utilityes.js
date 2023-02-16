// get value function
function getValue(elementId) {
  const value = document.getElementById(elementId).value;
  return value;
}
// get innerText
function getText(elementId) {
  const text = document.getElementById(elementId).innerText;
  return text;
}
// sum function
function sum(food, rent, clothe) {
  const add = parseInt(food) + parseInt(rent) + parseInt(clothe);
  return add;
}
// set text function
function textAdd(element, value) {
  const totalBalanceAdd = document.getElementById(element);
  totalBalanceAdd.innerText = value;
}
