"use strict";
//Inputs
const transTilte = document.getElementById("input-title");
const amountTitle = document.getElementById("input-amount");
const dateTilte = document.getElementById("input-date");

//Submit
const btnSumbit = document.querySelector(".submit");

const tableHeader = document.getElementById("trs-header");

const newTrs = function () {
  if (!transTilte.value || !amountTitle.value || !dateTilte.value) {
    alert("Enter Transaction Information!");
  } else {
    const title = transTilte.value;
    const amount = amountTitle.value;
    const date = dateTilte.value;
    const tbodyRef = document
      .getElementById("myTables")
      .getElementsByTagName("tbody")[0];
    //New Rows
    const newRow = tbodyRef.insertRow();

    const newCellLabel = newRow.insertCell();
    const newCellTrans = newRow.insertCell();
    const newCellDate = newRow.insertCell();
    // New Text
    const newTextLabel = document.createTextNode(title);
    const newTextTrans = document.createTextNode(`$${amount}`);
    const newTextDate = document.createTextNode(date);

    newCellLabel.appendChild(newTextLabel);
    newCellTrans.appendChild(newTextTrans);
    newCellDate.appendChild(newTextDate);

    tableHeader.classList.remove("hidden");
    transTilte.value = "";
    amountTitle.value = "";
    dateTilte.value = "";
  }
};

btnSumbit.addEventListener("click", newTrs);
