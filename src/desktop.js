let windowContainer = document.querySelector("#windowContainer");

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;

windowContainer.addEventListener("touchstart", dragStart, false);
windowContainer.addEventListener("touchend", dragEnd, false);
windowContainer.addEventListener("touchmove", drag, false);

windowContainer.addEventListener("mousedown", dragStart, false);
windowContainer.addEventListener("mouseup", dragEnd, false);
windowContainer.addEventListener("mousemove", drag, false);

windowContainer.addEventListener("dragover", onDragOver, false);

function dragStart(e) {
  if (e.target !== e.currentTarget) {
    active = true;

    //   // this is the item we are interacting with
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
