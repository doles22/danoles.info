function mobileMenu() {
  var x = document.getElementById("h_bar");
  var y = document.getElementById("menuicon")
  if (x == null) {
    x = document.getElementById("h_barshow");
    x.id = "h_bar";
    y.style = "transform: rotate(0deg)";
  }
  else {
    x.id = "h_barshow";
    y.style = "transform: rotate(180deg);border-top-right-radius: 0px; border-top-left-radius: 0px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px";
  }
}
