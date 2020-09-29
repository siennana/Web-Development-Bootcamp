var h1 = document.querySelector("h1");
var isBlue = false;

setInterval(function() {
    if (isBlue) {
        h1.style.color = "pink";
    } else {
        h1.style.color = "blue";
    }
    isBlue = !isBlue;
}, 1000);
