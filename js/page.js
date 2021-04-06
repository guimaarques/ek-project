/** start hide navBar when scroll down*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

/** end hide navBar when scroll down*/
