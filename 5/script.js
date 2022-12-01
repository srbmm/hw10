"use strict";
function clear(id) {
    const parentList = document.getElementById(id);
    const children = Array.from(parentList.children);

    for (let i = 0; i < children.length; i++) {
        children[i].remove();
    }
}
clear("elem");
