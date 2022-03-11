"use strict";
//Inputs
const transTilte = document.querySelector(".input-title");
const amountTitle = document.querySelector(".input-amount");
const dateTilte = document.querySelector(".input-date");

//Submit
const btnSumbit = document.querySelector(".submit");

//Tables
//Header
const tableHeader = document.querySelector(".trs-header");

//Table Object

//Transactions
const trsOne = document.getElementById("trs-one");
const trsTwo = document.querySelector(".trs-two");
const trsThree = document.querySelector(".trs-three");
const trsFour = document.querySelector(".trs-four");
const trsFive = document.querySelector(".trs-five");
const trsSix = document.querySelector(".trs-six");

let td = document.createElement("td");
const label1 = document.getElementById("label-1");
const amount1 = document.getElementById("amount-1");
const date1 = document.getElementById("date-1");

const newTrs = function () {
  const title = transTilte.value;
  const amount = amountTitle.value;
  const date = dateTilte.value;

  label1.innerHTML = title;
  amount1.innerHTML = `$${amount}`;
  date1.innerHTML = date;
  trsOne.classList.remove("hidden");
  tableHeader.classList.remove("hidden");
};

btnSumbit.addEventListener("click", newTrs);
