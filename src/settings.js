minimize = () => {
  let minimize = document.getElementById("close");
  return (minimize.parentElement.parentElement.parentElement.style.display =
    "none");
};
// window.onclick = function(event) {
//   if (!event.target.matches(".setdropdown")) {
//     var dropdowns = document.getElementsByClassName("setdropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };
