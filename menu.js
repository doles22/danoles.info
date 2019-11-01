function mobileMenu() {
  var x = document.getElementById("h_bar");
  if (x == null) {
    x = document.getElementById("h_barshow");
    x.id = "h_bar";
  }
  else {
    x.id = "h_barshow";
  }
}
