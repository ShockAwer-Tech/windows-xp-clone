let settings = document.getElementById("settings");
let close = document.getElementById("close");
let x = document.getElementById("setDropdown");
let max = document.getElementById("max");
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
  let x = document.getElementById("setDropdown");
  if (x.requestFullscreen) {
    x.requestFullscreen();
  } else if (x.mozRequestFullscreen) {
    x.mozRequestFullScreen();
  } else if (x.webkitRequestFullscreen) {
    x.webkitRequestFullscreen();
  } else if (x.msRequestFullscreen) {
    x.msRequestFullscreen();
  }
});

// close full screen
max.addEventListener("click", function() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullscreen) {
    document.mozCancelFullscreen();
  } else if (document.webkitExitFullscreen()) {
    document.webkitExitFullscreen();
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
