function mobileMenu() {
  var x = document.getElementById("h_bar");
  if (x == null) {
    x = document.getElementById("h_barshow");
  }
  else {
    if (x.id === "h_bar") {
    x.id = "h_barshow";
    }
    else {
      x.id = "h_bar";
    }
  }
}
