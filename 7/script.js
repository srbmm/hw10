const btn = document.getElementById("hider"),
    div = document.getElementById("text");
let flag = false;
btn.addEventListener("click", () => {
    if (!flag) {
        div.style.display = "none";
        flag = true;
    } else {
        btn.style.display = "none";
    }
});
