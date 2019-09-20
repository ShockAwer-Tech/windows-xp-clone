let settings = document.getElementById("settings");
let close = document.getElementById("close");
let x = document.getElementById("setDropdown");
let max = document.getElementById("max");
let min = document.getElementById("min");
let elem = document.documentElement;

function openSettings() {
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// opens the pop up window when settings is clicked
settings.addEventListener("click", openSettings);

// launches fullscreen
max.addEventListener("click", function() {
  if (x.style.minWidth !== "99.2%" && x.style.minHeight !== "96%") {
    x.style.minWidth = "99.2%";
    x.style.minHeight = "96%";
  } else {
    x.style.minWidth = "500px";
    x.style.minHeight = "500px";
  }
});

// minimize the widow
min.addEventListener("click", function() {
  if (x.style.minWidth !== "500px" && x.style.minHeight !== "500px") {
    x.style.minWidth = "500px";
    x.style.minHeight = "500px";
  }
});

// hides the window that displays when setting is clicked
function closeForm() {
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

close.addEventListener("click", closeForm);
