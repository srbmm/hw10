const btn = document.getElementById("btn"),
    list = document.getElementById("list");

let flag = true;
btn.addEventListener("click", () => {
    if (flag) {
        list.style.display = "none";
        flag = false;
    } else {
        list.style.display = "block";
        flag = true;
    }
});
