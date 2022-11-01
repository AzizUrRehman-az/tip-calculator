"use strict";

const btnSubmit = document.getElementById("btnSubmit");
const billValue = document.getElementById("bill");
const result = document.getElementById("output");

btnSubmit.addEventListener("click", function () {
  let bill = Number(billValue.value);
  let tip = 0;
  if (bill === 0) {
    result.innerText = "Please put valid value";
  } else {
    if (bill >= 50 && bill <= 300) {
      tip = bill * 0.15;
    } else {
      tip = bill * 0.2;
    }
    result.innerText = `The bill was ${bill}, the tip was ${tip}, and the total value
    ${bill + tip}`;
  }
});
