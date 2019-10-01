setInterval(getTime, 1000);
getTime();
getDate();

function getTime() {
  var d = new Date();
  var minutes = d.getMinutes();
  var hours = d.getHours();

  document.getElementById("nav-time-section").innerText = parseTime(
    hours,
    minutes
  );
}
function parseTime(hours, minutes) {
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  return hours + ":" + minutes;
}

function getDate() {
  var d = new Date();
  var date = d.getDate();
  var month = 1 + d.getMonth();
  var year = d.getFullYear();

  document.getElementById("nav-date-section").innerText = parseDate(
    date,
    month,
    year
  );
}

function parseDate(date, month, year) {
  if (date < 10) {
    date = "0" + date;
  }
  if (month < 10) {
    month = "0" + month;
  }
  return date + "/" + month + "/" + year;
}
