"use strict";
const ul = document.createElement("ul");
const body = document.body;
body.appendChild(ul);

let userInp = prompt("please enter something");
while (userInp) {
    const li = document.createElement("li");
    li.textContent = userInp;
    ul.appendChild(li);
    userInp = prompt("please enter something");
}
