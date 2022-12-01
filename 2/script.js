"use strict";

const outerLinks = document.querySelectorAll('a[href*="://"]');
for (let i of outerLinks) {
    console.log(i);
    if (!i.matches('a[href^="http://internal.com"]')) {
        i.style.color = "orange";
    }
}
