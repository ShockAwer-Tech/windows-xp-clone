dropdown = () => {
  document.getElementById("myDropdown").classList.toggle("show");
};

openWindow = () => {
  testwindow = window.open(
    "",
    "",
    "location=1,toolbar=no,status=1,scrollbars=1,width=400, height=450,float=right,top=500,left=500"
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

openWord = () => {
  let modal = document.getElementById("wordModal");

  // Get the button that opens the modal
  let wordTab = document.getElementById("word");

  // Get the <span> element that closes the modal
  let close = document.getElementsByClassName("close")[0];
  let minimize = document.getElementsByClassName("minimize")[0];

  // When the user clicks on the button, open the modal
  wordTab.onclick = function() {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  close.addEventListener("click", function() {
    modal.style.display = "none";
  });

  minimize.onclick = function() {
    modal.minimize();
  };
  maximize.onclick = function() {
    modal.style.display.resizeTo(250, 250);
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};
// minimizeWord = () => {
//   var modal = document.getElementById("wordModal");

//   let minimize = document.getElementsByClassName("minimize")[0];
//   minimize.onclick = function() {
//     modal.moveTo(0, 0);
//   };
// };
