setInterval(getTime, 1000);
setInterval(getDate, 1000);
var d = new Date();

function getTime() {
  d = new Date();
  var minutes = d.getMinutes();
  var hours = d.getHours();

  document.getElementById("time-section").innerHTML = parseTime(hours, minutes);

  // Time
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

function getDate() {
  d = new Date();
  var date = d.getDate();
  var month = 1 + d.getMonth();
  var year = d.getFullYear();

  document.getElementById("date-section").innerHTML = parseDate(
    date,
    month,
    year
  );
  // Date
  function parseDate(date, month, year) {
    if (date < 10) {
      date = "0" + date;
    }
    if (month < 10) {
      month = "0" + month;
    }
    return date + "/" + month + "/" + year;
  }
}
