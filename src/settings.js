setdropdown = () => {
  document.getElementById("setDropdown").classList.toggle("show");
};

minimize = () => {
  let minimize = document.getElementById("close");
  return (minimize.parentElement.parentElement.parentElement.style.display =
    "none");
};
