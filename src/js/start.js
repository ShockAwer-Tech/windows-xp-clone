dropdown = () => {
  document.getElementById("startDropdown").classList.toggle("show");
};

setdropdown = () => {
  document.getElementById("setDropdown").classList.toggle("show");
};
openWord = () => {
  testwindow = window.open(
    "",
    "Word",
    "location=1,status=1,scrollbars=1,width=400, height=450,toolbar=yes,scrollbars=yes,resizable=yes"
  );
  testwindow.moveTo(0, 0);
};
// Close the dropdown if the user clicks outside of it
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

window.onclick = function(event) {
  if (!event.target.matches(".setdropdown")) {
    var dropdowns = document.getElementsByClassName("setdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
