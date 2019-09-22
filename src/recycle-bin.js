var recycleBinButton = document.getElementById("recycle-bin-button");
var recycleBinWindow = document.getElementById("recycle-bin-window");
var closeWindowButton = document.getElementById("close-window-button");
var closeTabButton = document.getElementById("close-tab-button");
var recycleBinTab = document.getElementById("recycle-bin-tab");
var tab, minButton;
minButton = document.getElementById("min-button");

recycleBinButton.onclick = openWindow;
minButton.onclick = minWindow;
closeWindowButton.onclick = closeWindow;
closeTabButton.onclick = closeTab;

// This function opens the recycle bin window
function openWindow() {
    if (recycleBinWindow.classList.contains("hide")) {
        recycleBinWindow.classList.remove("hide");
    } else {
        recycleBinWindow.classList.add("hide");
    }
}

// This function closes the recycle bin window
function closeWindow() {
    recycleBinWindow.style.display = "none";
    recycleBinTab.style.display = "none";
}
// This function closes the recycle bin tab and window
function closeTab() {
    recycleBinTab.style.display = "none";
    recycleBinWindow.style.display = "none";
}

// This function minimizes the recycle bin window
function minWindow() {
    tab = document.getElementById("recycle-tab");
    if (tab.classList.contains("hide")) {
        tab.classList.remove("hide");
    } else {
        tab.classList.add("hide");
    }
}

var recycleBinTab = document.getElementById("recycle-bin-tab");
var minimizeButton = document.getElementById("minimize-button");
var restoreButton = document.getElementById("restore-button");

minimizeButton.onclick = minimizeWindow;
recycleBinTab.onclick = restoreWindow;

function minimizeWindow() {
    recycleBinTab.classList.toggle("hide");
    recycleBinWindow.classList.add("hide");
}

function restoreWindow() {
    recycleBinWindow.classList.toggle("hide");
}