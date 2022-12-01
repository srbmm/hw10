const articles = document.getElementsByClassName("articles");

for (let i of articles) {
    const btn = i.getElementsByClassName("close")[0];
    i.style.position = "relative";
    i.style.backgroundColor = "lightgreen";
    btn.style.position = "absolute";
    btn.style.top = "10px";
    btn.style.right = "10px";

    btn.addEventListener("click", () => {
        i.style.display = "none";
    });
}
addEventListener;
