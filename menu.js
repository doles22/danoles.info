function mobileMenu() {
  var x = document.getElementById("h_bar");
  if (x.id === "h_bar" || x.id !== null) {
  x.id = "h_barshow";
  }
  else {
    var y = document.getElementById("h_barshow");
    if (y.id === "h_barshow") {
    y.id = "h_bar";
    }
    else {
    y.id = "h_bar";
    }
  }
}
