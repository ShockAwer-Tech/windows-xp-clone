var recycleBinButton = document.getElementById("recycle-bin-button");
var recycleBinWindow = document.getElementById("recycle-bin-window");
var closeButton = document.getElementById("close-button");
var tab, minButton;
minButton = document.getElementById("min-button");

recycleBinButton.onclick = openWindow;
minButton.onclick = minWindow;
closeButton.onclick = closeWindow;

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