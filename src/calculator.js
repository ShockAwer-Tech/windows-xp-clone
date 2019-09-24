let maxi = document.getElementById("maxi");
let mini = document.getElementById("mini");
let calcClose = document.getElementById("closeBut");
let calcTab = document.getElementById("calc-contain");
let tabname;
maxi.addEventListener("click", function() {
  if (calcTab.style.minWidth !== "100%" && calcTab.style.minHeight !== "100%") {
    calcTab.style.minWidth = "99.2%";
    calcTab.style.minHeight = "70%";
    calcTab.style.margin = "0";
    calcTab.style.padding = "0";
    calcTab.style.overflow = "hidden";
  } else {
    calcTab.style.minWidth = "400px";
    calcTab.style.minHeight = "200px";
    calcTab.style.margin = "30px";
  }
});

mini.addEventListener("click", function() {
  tabname = document.getElementById("tabName");
  if (calcTab.style.display !== "none") {
    calcTab.style.display = "none";
  }
});
calcClose.addEventListener("click", function() {
  calcTab.style.display = "none";
});
