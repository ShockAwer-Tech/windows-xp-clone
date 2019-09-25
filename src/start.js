// start menu dropdown
dropdown = () => {
  document.getElementById("startDropdown").classList.toggle("show");
};

window.onclick = function(event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//dropdown for all tabs
let wordTab = document.getElementById("Word");
let excelTab = document.getElementById("Excel");
let calculatorTab = document.getElementById("Calculator");
let calendarTab = document.getElementById("Calendar");
// let tabTitle = document.getElementById("windowName");
let tabWindows = document.getElementsByClassName("window");

let newWindow = document.getElementById("windowDropdown");
let calendar = document.getElementById("calendar");
let calculator = document.getElementById("calc");
let maximize = document.getElementById("maximize");
let minimize = document.getElementById("minimize");
let buttonClose = document.getElementById("closeButton");
let closed = document.getElementById("closeBut");

let resizeHandle = document.getElementById("windowDropdown");

function openWord() {
  if (newWindow.style.display === "none") {
    newWindow.style.display = "block";
  } else {
    newWindow.style.display = "none";
  }
}
wordTab.addEventListener("click", openWord);

function openExcel() {
  if (newWindow.style.display === "none") {
    newWindow.style.display = "block";
  } else {
    newWindow.style.display = "none";
  }
}
excelTab.addEventListener("click", openExcel);

function openCalendar() {
  if (calendar.style.display === "none") {
    calendar.style.display = "block";
  } else {
    calendar.style.display = "none";
  }
}
calendarTab.addEventListener("click", openCalendar);

function openCalculator() {
  if (calculator.style.display === "none") {
    calculator.style.display = "block";
  } else {
    calculator.style.display = "none";
  }
}
calculatorTab.addEventListener("click", openCalculator);

maximize.addEventListener("click", function() {
  if (
    newWindow.style.minWidth !== "100%" &&
    newWindow.style.minHeight !== "96%"
  ) {
    newWindow.style.minWidth = "100%";
    newWindow.style.minHeight = "100%";
    newWindow.style.margin = "0";
  } else {
    newWindow.style.minWidth = "500px";
    newWindow.style.minHeight = "500px";
    newWindow.style.margin = "30px";
  }
});

minimize.addEventListener("click", function() {
  if (newWindow.style.display !== "none") {
    newWindow.style.display = "none";
  } else {
    newWindow.style.display = "block";
  }
  tabTitle = excelTab.innerHTML;
  document.getElementById("windowName").innerHTML = tabTitle;
  console.log(tabTitle);
});

buttonClose.addEventListener("click", function() {
  newWindow.style.display = "none";
});
