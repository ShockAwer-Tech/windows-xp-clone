// ==========================================================================
//
// Variable Declaration
//
// ==========================================================================
var exampleWindow = document.getElementById("example-window");
var taskbar = document.getElementById("taskbar");
var exampleWindowIcon = document.getElementById("example-window-icon");


// ==========================================================================
//
// Window Drag and Drop Event Listeners
//
// ==========================================================================
dragElement(document.getElementById("recycle-bin-icon"));
dragElement(document.getElementById("chrome-icon"));
dragElement(document.getElementById("documents-icon"));
dragElement(document.getElementById("example-window"));



// ==========================================================================
//
// Open Example Window Event Listeners
//
// ==========================================================================
document.getElementById("recycle-bin-button").addEventListener("dblclick", partial(openExampleWindow, 'Recycle Bin'));
document.getElementById("chrome-button").addEventListener("dblclick", partial(openExampleWindow, 'Chrome'));
document.getElementById("documents-button").addEventListener("dblclick", partial(openExampleWindow, 'My Documents'));
document.getElementById("Word").addEventListener("click", partial(openExampleWindow, 'Ms Word'));
document.getElementById("Excel").addEventListener("click", partial(openExampleWindow, 'Ms Excel'));


// ==========================================================================
//
// Close, Minimize and Maximize Example Window Event Listeners
//
// ==========================================================================
document.getElementById("example-window-close-button").addEventListener("click", closeExampleWindow);
document.getElementById("example-window-maximize-button").addEventListener("click", maximizeExampleWindow);
document.getElementById("example-window-minimize-button").addEventListener("click", minimizeExampleWindow);
taskbar.addEventListener("click", minimizeExampleWindow,openExampleWindow);


// ==========================================================================
//
// Example Window Functions
//
// ==========================================================================
function openExampleWindow(windowName) {
  // Display Window
  exampleWindow.style.display = "block";
  document.getElementById("example-window-title").innerText = windowName;

  // Show active window in taskbar
  taskbar.classList.add("window-tab");
  taskbar.innerText = windowName;

  // Display Window Icon
  switch (windowName) {
    case 'Ms Word':
        exampleWindowIcon.innerHTML = '<i class="far fa-file-word" style="color:#339af0">';
      break;
    case 'Ms Excel':
        exampleWindowIcon.innerHTML = '<i class="far fa-file-excel" style="color:#48BB78"></i>';
      break;
    case 'Ms Excel':
        exampleWindowIcon.innerHTML = '<i class="far fa-file-excel" style="color:#48BB78"></i>';
      break;
    case 'Chrome':
        exampleWindowIcon.innerHTML = '<i class="fab fa-chrome" style="color:#48BB78"></i>';
        break;
    case 'My Documents':
        exampleWindowIcon.innerHTML = '<i class="far fa-folder-open" style="color:#F6E05E"></i>';
        break;
    case 'Recycle Bin':
        exampleWindowIcon.innerHTML = '<i class="far fa-trash-alt" style="color:#F6E05E"></i>';
        break;
    default:
        exampleWindowIcon.innerHTML = '<i class="far fa-file-word" style="color:#339af0">';
      break;
  }
}

function closeExampleWindow() {
  // Hide Window 
  exampleWindow.style.display = "none";

  // Hide window from Taskbar
  taskbar.classList.remove("window-tab");
  taskbar.innerText = "";
}

function maximizeExampleWindow() {
  if (
    exampleWindow.style.minWidth !== "100%" &&
    exampleWindow.style.minHeight !== "96%"
  ) {
    exampleWindow.style.left = "0";
    exampleWindow.style.right = "0";
    exampleWindow.style.minWidth = "100%";
    exampleWindow.style.minHeight = "100%";
    exampleWindow.style.margin = "0";
  } else {
    exampleWindow.style.minWidth = "40%";
    exampleWindow.style.minHeight = "40%";
    exampleWindow.style.margin = "50px";
    exampleWindow.style.left = "300px";
  }
}

function minimizeExampleWindow() {
  if (exampleWindow.style.display !== "none") {
    exampleWindow.style.display = "none";
  } else {
    exampleWindow.style.display = "block";
  }
}
// Clone window function
function cloneWindow() {
  var duplicateWindow = exampleWindow.cloneNode(true);
  document.body.appendChild(duplicateWindow);
  exampleWindow.classList.add("div-position");
}  


// ==========================================================================
//
// Drag and drop Functions
//
// ==========================================================================
function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  if (document.getElementById(elmnt.id + "-header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;

    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/***
 * Crtical don't delete!
 */
function partial(func /*, 0..n args */) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var allArguments = args.concat(Array.prototype.slice.call(arguments));
    return func.apply(this, allArguments);
  };
}
