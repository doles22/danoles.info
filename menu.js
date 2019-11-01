function mobileMenu() {
  var x = document.getElementsByTagName("nav");
  if (x.id === "h_barshow") {
  x.id = "h_bar";
  }
  else {
    x.id = "h_barshow";
  }
}
