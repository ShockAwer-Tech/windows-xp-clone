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
  } else if (x.style.minWidth !== "500px" && x.style.minHeight !== "500px") {
    x.style.minWidth = "500px";
    x.style.minHeight = "500px";
  }
});

// minimize the widow
min.addEventListener("click", function() {});

// hides the window that displays when setting is clicked
function closeForm() {
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

close.addEventListener("click", closeForm);

//get all the id's
// drag and drop
let container = document.getElementById("innerContainer");
let outerContainer = document.getElementById("outerContainer");

var activeItem = null;

var active = false;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

container.addEventListener("dragover", onDragOver, false);

function dragStart(e) {
  if (e.target !== e.currentTarget) {
    active = true;

    // this is the item we are interacting with
    activeItem = e.target;

    if (activeItem !== null) {
      if (!activeItem.xOffset) {
        activeItem.xOffset = 0;
      }

      if (!activeItem.yOffset) {
        activeItem.yOffset = 0;
      }

      if (e.type === "touchstart") {
        activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
        activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
      } else {
        console.log("doing something!");
        activeItem.initialX = e.clientX - activeItem.xOffset;
        activeItem.initialY = e.clientY - activeItem.yOffset;
      }
    }
  }
}

function dragEnd(e) {
  if (activeItem !== null) {
    activeItem.initialX = activeItem.currentX;
    activeItem.initialY = activeItem.currentY;
  }

  active = false;
  activeItem = null;
}

function onDragOver(event) {
  event.preventDefault();
}

function drag(e) {
  e.preventDefault();
  if (active) {
    if (e.type === "touchmove") {
      activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
      activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
    } else {
      activeItem.currentX = e.clientX - activeItem.initialX;
      activeItem.currentY = e.clientY - activeItem.initialY;
    }

    activeItem.xOffset = activeItem.currentX;
    activeItem.yOffset = activeItem.currentY;

    setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}
