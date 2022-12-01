"use strict";
let data = {
    fish: {
        trout: {},
        salmon: {},
    },
    tree: {
        huge: {
            sequuoia: {},
            oak: {},
        },
        flowering: {
            "apple tree": {},
            magnolia: {},
        },
    },
};
const container = document.getElementById("container");
const createTree = (tag, object) => {
    const mainUl = document.createElement("ul");
    for (let [key, value] of Object.entries(object)) {
        if (value) {
            if (Object.keys(value)[0] !== undefined) {
                const li = document.createElement("li");
                li.textContent = key;
                createTree(li, value);
                mainUl.appendChild(li);
            } else {
                const li = document.createElement("li");
                li.innerText = key;
                mainUl.appendChild(li);
            }
        }
    }
    tag.appendChild(mainUl);
};
createTree(container, data);
