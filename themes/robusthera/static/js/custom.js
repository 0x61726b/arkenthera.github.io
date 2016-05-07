window.onload = function () {
  var link = [
    document.getElementById('link-home'),
    document.getElementById('link-yume'),
    document.getElementById('link-resume'),
    document.getElementById('link-about'),
    document.getElementById('footer-1'),
    document.getElementById('footer-2'),
    document.getElementById('footer-3'),
    document.getElementById('footer-4')
  ]
  var linkHover;
  for (var i = 0; i < link.length; i++) {
    link[i].onmouseover = function () {
      linkHover = setInterval(colorInterval, 900, this);
    }
    link[i].onmouseout = function () {
      this.style.color = "";
      clearInterval(linkHover);
    }
  }

  function colorInterval(obj) {
    var rnd = Math.floor((Math.random() * 19) + 1);
    obj.style.color = colors[rnd];
  }

  var colors = [
    "#f44336",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FFC107",
    "#FF9800",
    "#795548",
    "#9E9E9E",
    "#607D8B"
  ]
}
