function mobileMenu() {
  var x = document.getElementById("h_bar");
  if (x.id === "h_bar") {
  x.id = "h_barshow";
  }
  else {
    var x = document.getElementById("h_barshow");
    if (x.id === "h_barshow") {
    x.id = "h_bar";
    }
    else {
    x.id = "h_bar";
    }
  }

