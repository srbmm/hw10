const nav = document.getElementById("mainNav");
document.addEventListener('scroll', function(){
    if (window.pageYOffset !== 0) {
        nav.style.backgroundColor = "#fff";
    }
    else nav.style.backgroundColor = "transparent";
})