//Make the DIV element draggagle:
dragElement(document.getElementById("recycle-bin-icon"));
dragElement(document.getElementById("chrome-icon"));
dragElement(document.getElementById("documents-icon"));
dragElement(document.getElementById("example-window"));

// let maximize = document.getElementById("maximize");
// let minimize = document.getElementById("minimize");

// Open Window
document.getElementById("recycle-bin-button").addEventListener("dblclick", partial(openExampleWindow, 'Recycle Bin'));
document.getElementById("chrome-button").addEventListener("dblclick", partial(openExampleWindow, 'Chrome'));
document.getElementById("documents-button").addEventListener("dblclick", partial(openExampleWindow, 'My Documents'));
document.getElementById("Word").addEventListener("click", partial(openExampleWindow, 'Ms Word'));
document.getElementById("Excel").addEventListener("click", partial(openExampleWindow, 'Ms Excel'));


document.getElementById("example-window-close-button").addEventListener("click", closeExampleWindow);
document.getElementById("example-window-maximize-button").addEventListener("click", maximizeExampleWindow);
document.getElementById("example-window-minimize-button").addEventListener("click", minimizeExampleWindow);
document.getElementById("window-tab").addEventListener("click", minimizeExampleWindow,openExampleWindow);

var exampleWindow = document.getElementById("example-window");


/***
 * Example Window Functions
 */
function openExampleWindow(windowName) {
    exampleWindow.style.display = "block";
    document.getElementById("example-window-title").innerText = windowName;
    document.getElementById("window-tab").innerText=windowName
    document.getElementById("window-tab").classList.add("window-tab")
}

function closeExampleWindow() {
    exampleWindow.style.display = "none";
    document.getElementById("window-tab").style.display="none"
    document.getElementById("window-tab").classList.remove("window-tab")

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



/***
 * Drag and drop Function
 */
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

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
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


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