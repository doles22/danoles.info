function mobileMenu() {
  var nav = document.getElementById("h_bar");
  var icon = document.getElementById("menuicon")
  if (nav == null) {
    nav = document.getElementById("h_barshow");
    nav.id = "h_bar";
    icon.style = "transform: rotate(0deg)";
  }
  else {
    nav.id = "h_barshow";
    icon.style = "transform: rotate(180deg); border-top-right-radius: 0px; border-top-left-radius: 0px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px";
  }
}
