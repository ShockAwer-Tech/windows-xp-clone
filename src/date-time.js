setInterval(getTime, 1000);

function getTime() {
  date = new Date();

  var minutes = date.getMinutes();
  var hours = date.getHours();

  document.getElementById("timesection").innerHTML = parseTime(hours, minutes);

  function parseTime(hours, minutes) {
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    return hours + ":" + minutes;
  }
}
