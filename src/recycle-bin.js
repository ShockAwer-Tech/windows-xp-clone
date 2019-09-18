var recycleBinButton = document.getElementById("recycle-bin-button");
var recycleBinWindow = document.getElementById("recycle-bin-window");

recycleBinButton.addEventListener("click", function() {
  if(recycleBinWindow.style.display === "none"){
  	recycleBinWindow.style.display = "block";
  }else {
  	recycleBinWindow.style.display = "none";
  }
});

var closeButton = document.getElementById("close-button");

closeButton.addEventListener("click", function(){
	recycleBinWindow.style.display = "none";
})