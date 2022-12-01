"use strict";
const first = document.getElementById("age-table");
const second = document.querySelectorAll("#age-table label");
const third = first.getElementsByTagName("td")[0];
const fourth = document.querySelector("form[name=search]");
const fifth = fourth.getElementsByTagName("input")[0];
const inputs = fourth.getElementsByTagName("input");
const sixth = inputs[inputs.length - 1];
console.log(sixth);
