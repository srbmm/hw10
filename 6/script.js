function isnantest(n) {
    n = Number(n);
    if (isNaN(n)) return false;
    else return true;
}
function notif(
    object = {
        top: 0,
        right: 0,
        html: "default",
        className: "notification",
    }
) {
    const notification = document.createElement("h1");
    document.body.appendChild(notification);
    notification.style.position = "absolute";
    if (isnantest(object.top)) {
        notification.style.top = `${object.top}px`;
        // notification.style.top = prompt("enter top offset") + "px";
    } else notification.style.top = "0px";
    if (isnantest(object.right)) {
        notification.style.right = `${object.right}px`;
        // notification.style.right = prompt("enter right offset") + "px";
    } else notification.style.right = "0px";

    notification.innerText = object.html;
    notification.classList.add(object.className);
    const clear = setTimeout(() => {
        notification.remove();
    }, 1500);
}
let userObject = {
    top: prompt("enter top offset"),
    right: prompt("enter right offset"),
    html: prompt("enter your text"),
    className: confirm("do you want more beautiful notification ?") ? "notification" : "",
};

notif(userObject);
