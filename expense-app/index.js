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

const newTrs = function () {
  //   const title = transTilte.value;
  //   const amount = amountTitle.value;
  //   const date = dateTilte.value;
  //   var table = document.getElementById("myTables");
  //   var row = trsOne.insertCell(0);
  //   var cell1 = trsOne.insertCell(0);
  //   var cell2 = trsOne.insertCell(1);
  //   var cell3 = trsOne.insertCell(2);

  //   cell1.innerHTML = title;
  //   cell2.innerHTML = amount;
  //   cell3.innerHTML = date;
  //   tableHeader.appendChild(trsOne);
  trsOne.classList.remove("hidden");
  tableHeader.classList.remove("hidden");
};

btnSumbit.addEventListener("click", newTrs);
