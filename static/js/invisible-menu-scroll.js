var now = 0;
var pixels =  300;
var opacity = 1;

var move = function() {
    now = window.scrollY;
    if (now > pixels && opacity !== 0) {
        opacity = 0;
    }
    else if(now < pixels) {
        //Depends on the position not if scrolls down or up
        opacity = (1 - now/pixels);
    }
    var el = document.querySelector("div.navigation");
    el.style.opacity = opacity;
};

window.addEventListener("scroll", move);
move();
