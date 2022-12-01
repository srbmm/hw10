const elem = Array.from(document.getElementsByClassName("elem"));
elem.forEach((element) => {
    element.style.position = "relative";
    const tooltip = document.createElement("div");
    element.addEventListener("mouseover", () => {
        const coords = element.getBoundingClientRect();

        tooltip.textContent = "This is a tooltip";
        tooltip.style.backgroundColor = "#b46767";
        tooltip.style.padding = "2rem";
        tooltip.style.borderRadius = "1rem";
        tooltip.style.position = "absolute";
        if (coords.y > 88) {
            tooltip.style.bottom = "25px";
            tooltip.style.right = "30%";
        } else {
            tooltip.style.top = "25px";
            tooltip.style.right = "30%";
        }
        element.appendChild(tooltip);
    });
    element.addEventListener("mouseout", () => {
        element.removeChild(tooltip);
    });
});
