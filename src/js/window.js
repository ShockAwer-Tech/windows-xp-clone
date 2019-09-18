dropdown = () => {
  document.getElementById("startDropdown").classList.toggle("show");
};
setdropdown = () => {
  document.getElementById("setDropdown").classList.toggle("show");
};
openWindow = () => {
  newWindow = window.open(
    "",
    "",
    "location=1,status=1,scrollbars=1,width=400, height=450,toolbar=yes,scrollbars=yes,resizable=yes"
  );
  //windowName = newWindow.document.title(newWindow.name);

  menus = document.getElementsByClassName("grid-item").value.getAttribute("id");
  for (let menu in menus) {
    console.log(menu);
  }
};

window.onclick = (event) => {
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
