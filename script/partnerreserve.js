var reserveArray = [{}];
var currentSelection = "";
var calendarLoaded = false;

//Calendar
const date = new Date();

const renderCalendar = () => {
  date.setDate(1);
  const monthDays = document.querySelector(".days");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today" name='selected' id="${i}-${
        date.getMonth() + 1
      }-${date.getFullYear()}" onclick='fetchEvents(this.id)'>${i}</div>`;

      if (calendarLoaded === false) {
        currentSelection = `${i}-${date.getMonth() + 1}-${date.getFullYear()}`;
        calendarLoaded = true;
      }
    } else {
      days += `<div id="${i}-${
        date.getMonth() + 1
      }-${date.getFullYear()}" onclick='fetchEvents(this.id)'>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
  fetchMonthEvents();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
  fetchMonthEvents();
});

renderCalendar();
//END
function load() {
  fetchReservations();
  document.getElementById("selectedDate").innerHTML = new Date().toDateString();
  ShowTableField("cancel");
}

function openPrompt() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function Cancel() {
  var modal = document.getElementById("myModal");
  // var tableNumber = document.getElementById("tableNumber");
  // var tableLabel = document.getElementById("tableLabel");
  // var confirmTableBtn = document.getElementById("confirmTableBtn");

  modal.style.display = "none";
  // tableNumber.style.display = "none";
  // tableLabel.style.display = "inline";
  // confirmTableBtn.style.display = "none";

  closeCalendar();
  ShowTableField("cancel");
}

function ShowTableField(name) {
  // var tableNumber = document.getElementById("tableNumber");
  // var tableLabel = document.getElementById("tableLabel");
  var confirmTableBtn = document.getElementById("confirmTableBtn");
  var editBtn = document.getElementById("changeTableBtn");

  var reserveInputs = document.getElementsByClassName("reserveInputs");
  var reserveLabels = document.getElementsByClassName("reserveLabels");

  if (name == "edit") {
    // tableLabel.style.display = "none";
    // tableNumber.style.display = "inline";
    confirmTableBtn.style.display = "inline";

    editBtn.name = "cancel";
    editBtn.innerHTML = "Cancel";

    for (i = 0; i < reserveInputs.length; i++) {
      reserveInputs[i].style.display = "inline";
      reserveLabels[i].style.display = "none";
    }
  } else if (name == "cancel") {
    // tableLabel.style.display = "inline";
    // tableNumber.style.display = "none";
    confirmTableBtn.style.display = "none";

    editBtn.name = "edit";
    editBtn.innerHTML = "Edit";

    for (i = 0; i < reserveInputs.length; i++) {
      reserveInputs[i].style.display = "none";
      reserveLabels[i].style.display = "inline";
    }
  }
}

function fetchMonthEvents() {
  for (i = 0; i < reserveArray.length; i++) {
    var temp = `${reserveArray[i].day}-${reserveArray[i].month}-${reserveArray[i].year}`;

    try {
      document.getElementById(temp).classList.add("reserved");
    } catch (err) {
      console.log(err);
      continue;
    }
  }
}

function fetchReservations() {
  var jsonxx =
    '{ "status": "200", "tables": [{ "reserveID": "fbcaacc8", "email": "Sayed.m.husain7@gmail.com", "fName": "Mohamed", "lName": "Jaffer", "phone": "39265662", "cCode": "+973", "cid_fk": "f4481c77", "pid_fk": "8dcc5833", "eName": "VOLO TEST", "reserveDate": "2021-02-12", "reserveDateFiltered": "Fri, 12 Feb", "dayID": "", "reserveTime": "01:30:00", "reserveTimeFiltered": "1:30 am", "guests": "4", "notes": "none", "year": "2021", "month": "2", "day": "12", "dayName": "Friday", "monthName": "February", "datePlaced": "2021-02-11", "timePlaced": "11:01:24", "status": "done", "isRated": "y", "rating": "2.0" }, { "reserveID": "217caecd", "email": "Sayed.m.husain7@gmail.com", "fName": "Mohamed", "lName": "Jaffer", "phone": "39265662", "cCode": "+973", "cid_fk": "f4481c77", "pid_fk": "8dcc5833", "eName": "VOLO TEST", "reserveDate": "2021-02-16", "reserveDateFiltered": "Tue, 16 Feb", "dayID": "", "reserveTime": "03:30:00", "reserveTimeFiltered": "3:30 am", "guests": "2", "notes": "none", "year": "2021", "month": "2", "day": "16", "dayName": "Tuesday", "monthName": "February", "datePlaced": "2021-02-11", "timePlaced": "11:02:00", "status": "done", "isRated": "y", "rating": "4.5" }, { "reserveID": "0b6fb367", "email": "Sayed.m.husain7@gmail.com", "fName": "Mohamed", "lName": "Jaffer", "phone": "39265662", "cCode": "+973", "cid_fk": "f4481c77", "pid_fk": "8dcc5833", "eName": "VOLO TEST", "reserveDate": "2021-03-22", "reserveDateFiltered": "Mon, 22 Mar", "dayID": "", "reserveTime": "01:00:00", "reserveTimeFiltered": "1:00 am", "guests": "4", "notes": "none", "year": "2021", "month": "3", "day": "22", "dayName": "Monday", "monthName": "March", "datePlaced": "2021-03-17", "timePlaced": "19:52:44", "status": "cancelled", "isRated": "y", "rating": "3.0" }, { "reserveID": "06a4baf0", "email": "Sayed.m.husain7@gmail.com", "fName": "Mohamed", "lName": "Jaffer", "phone": "39265662", "cCode": "+973", "cid_fk": "f4481c77", "pid_fk": "8dcc5833", "eName": "VOLO TEST", "reserveDate": "2021-03-25", "reserveDateFiltered": "Thu, 25 Mar", "dayID": "", "reserveTime": "05:30:00", "reserveTimeFiltered": "5:30 am", "guests": "5", "notes": "none", "year": "2021", "month": "3", "day": "25", "dayName": "Thursday", "monthName": "March", "datePlaced": "2021-03-24", "timePlaced": "21:53:22", "status": "cancelled", "isRated": "y", "rating": "5.0" }, { "reserveID": "bb6420f7", "email": "Sayed.m.husain7@gmail.com", "fName": "Mohamed", "lName": "Jaffer", "phone": "39100358", "cCode": "+973", "cid_fk": "f4481c77", "pid_fk": "8dcc5833", "eName": "VOLO TEST", "reserveDate": "2021-07-14", "reserveDateFiltered": "Wed, 14 Jul", "dayID": "", "reserveTime": "08:00:00", "reserveTimeFiltered": "8:00 am", "guests": "5", "notes": "none", "year": "2021", "month": "7", "day": "14", "dayName": "Wednesday", "monthName": "July", "datePlaced": "2021-07-14", "timePlaced": "02:35:10", "status": "upcoming", "isRated": "n", "rating": "0.0" }, { "reserveID": "0cd3d080", "email": "Sayed.m.husain7@gmail.com", "fName": "Mohamed", "lName": "Jaffer", "phone": "39100358", "cCode": "+973", "cid_fk": "f4481c77", "pid_fk": "8dcc5833", "eName": "VOLO TEST", "reserveDate": "2021-07-15", "reserveDateFiltered": "Thu, 15 Jul", "dayID": "", "reserveTime": "10:00:00", "reserveTimeFiltered": "10:00 am", "guests": "5", "notes": "none", "year": "2021", "month": "7", "day": "15", "dayName": "Thursday", "monthName": "July", "datePlaced": "2021-07-14", "timePlaced": "02:35:35", "status": "pending", "isRated": "n", "rating": "0.0" }, { "reserveID": "c1946796", "email": "Sayed.m.husain7@gmail.com", "fName": "Mohamed", "lName": "Jaffer", "phone": "39100358", "cCode": "+973", "cid_fk": "f4481c77", "pid_fk": "8dcc5833", "eName": "VOLO TEST", "reserveDate": "2021-07-20", "reserveDateFiltered": "Tue, 20 Jul", "dayID": "", "reserveTime": "01:30:00", "reserveTimeFiltered": "1:30 am", "guests": "5", "notes": "none", "year": "2021", "month": "7", "day": "20", "dayName": "Tuesday", "monthName": "July", "datePlaced": "2021-07-14", "timePlaced": "03:18:17", "status": "upcoming", "isRated": "n", "rating": "0.0" }] }';

  var response = JSON.parse(jsonxx);
  reserveArray = response["tables"];

  console.log(reserveArray);
}

function fetchEvents(id) {
  currentSelection = id;
  var eventDate = document.getElementById("selectedDate");

  var eventSlots = document.getElementById("eventSlots");

  eventSlots.innerHTML = "";

  var slotsContent = "";

  var selectedDateArray = id.split("-");

  var month = selectedDateArray[1];
  var day = selectedDateArray[0];

  if (month.length == 1) {
    month = "0" + month;
  }

  if (day.length == 1) {
    day = "0" + day;
  }

  var dateFiltered = `${selectedDateArray[2]}-${month}-${day}`;

  var myDate = new Date(dateFiltered);
  // var mydate = new Date('2014-04-03');
  eventDate.innerHTML = myDate.toDateString();

  for (i = 0; i < reserveArray.length; i++) {
    if (
      selectedDateArray[1] == reserveArray[i].month &&
      selectedDateArray[0] == reserveArray[i].day &&
      selectedDateArray[2] == reserveArray[i].year
    ) {
      if (reserveArray[i].status == "pending") {
        slotsContent += `<div class="slot"><br><label class="detailLabel">${
          reserveArray[i].reserveTimeFiltered
        } (${reserveArray[i].reserveTime.substring(
          0,
          reserveArray[i].reserveTime.length - 3
        )})</label><br><br><label class="detailLabel">${
          reserveArray[i].fName
        } ${reserveArray[i].lName}</label><br><label class="detailLabel">${
          reserveArray[i].guests
        } Guests</label><br><label class="detailLabel">${
          reserveArray[i].cCode
        } ${
          reserveArray[i].phone
        }</label><br><br><label class="infoTitleLabel">Notes:</label><br><br><label class="detailLabel">${
          reserveArray[i].notes
        }</label><br><br><br><label class="infoTitleLabel">Requested on:</label><label class="detailLabel">${
          reserveArray[i].timePlaced
        } ${
          reserveArray[i].datePlaced
        }</label><br><br><label class="infoTitleLabel">Status:</label><label class="detailLabel pending">Awaiting approval</label><br><br><label class="infoTitleLabel">Confirm reservation:</label><button name='${
          reserveArray[i].reserveID
        }' onclick='rejectReservation(this.name)'>x</button><label>/</label><button name='${
          reserveArray[i].reserveID
        }' onclick='acceptReservation(this.name)'>✓</button></div>`;
      } else if (reserveArray[i].status == "upcoming") {
        slotsContent += `<div class="slot"><br><label class="detailLabel">${
          reserveArray[i].reserveTimeFiltered
        } (${reserveArray[i].reserveTime.substring(
          0,
          reserveArray[i].reserveTime.length - 3
        )})</label><br><br><label class="detailLabel">${
          reserveArray[i].fName
        } ${reserveArray[i].lName}</label><br><label class="detailLabel">${
          reserveArray[i].guests
        } Guests</label><br><label class="detailLabel">${
          reserveArray[i].cCode
        } ${
          reserveArray[i].phone
        }</label><br><br><label class="infoTitleLabel">Notes:</label><br><br><label class="detailLabel">${
          reserveArray[i].notes
        }</label><br><br><br><label class="infoTitleLabel">Requested on:</label><label class="detailLabel">${
          reserveArray[i].timePlaced
        } ${
          reserveArray[i].datePlaced
        }</label><br><br><label class="infoTitleLabel">Status:</label><label class="detailLabel approved">Approved</label><br><br></div>`;
      } else if (reserveArray[i].status == "done") {
        slotsContent += `<div class="slot"><br><label class="detailLabel">${
          reserveArray[i].reserveTimeFiltered
        } (${reserveArray[i].reserveTime.substring(
          0,
          reserveArray[i].reserveTime.length - 3
        )})</label><br><br><label class="detailLabel">${
          reserveArray[i].fName
        } ${reserveArray[i].lName}</label><br><label class="detailLabel">${
          reserveArray[i].guests
        } Guests</label><br><label class="detailLabel">${
          reserveArray[i].cCode
        } ${
          reserveArray[i].phone
        }</label><br><br><label class="infoTitleLabel">Notes:</label><br><br><label class="detailLabel">${
          reserveArray[i].notes
        }</label><br><br><br><label class="infoTitleLabel">Requested on:</label><label class="detailLabel">${
          reserveArray[i].timePlaced
        } ${
          reserveArray[i].datePlaced
        }</label><br><br><label class="infoTitleLabel">Status:</label><label class="detailLabel done">Finished</label><br><br></div>`;
      } else if (reserveArray[i].status == "rejected") {
        slotsContent += `<div class="slot"><br><label class="detailLabel">${
          reserveArray[i].reserveTimeFiltered
        } (${reserveArray[i].reserveTime.substring(
          0,
          reserveArray[i].reserveTime.length - 3
        )})</label><br><br><label class="detailLabel">${
          reserveArray[i].fName
        } ${reserveArray[i].lName}</label><br><label class="detailLabel">${
          reserveArray[i].guests
        } Guests</label><br><label class="detailLabel">${
          reserveArray[i].cCode
        } ${
          reserveArray[i].phone
        }</label><br><br><label class="infoTitleLabel">Notes:</label><br><br><label class="detailLabel">${
          reserveArray[i].notes
        }</label><br><br><br><label class="infoTitleLabel">Requested on:</label><label class="detailLabel">${
          reserveArray[i].timePlaced
        } ${
          reserveArray[i].datePlaced
        }</label><br><br><label class="infoTitleLabel">Status:</label><label class="detailLabel decline">Rejected</label><br><br></div>`;
      } else if (reserveArray[i].status == "cancelled") {
        slotsContent += `<div class="slot"><br><label class="detailLabel">${
          reserveArray[i].reserveTimeFiltered
        } (${reserveArray[i].reserveTime.substring(
          0,
          reserveArray[i].reserveTime.length - 3
        )})</label><br><br><label class="detailLabel">${
          reserveArray[i].fName
        } ${reserveArray[i].lName}</label><br><label class="detailLabel">${
          reserveArray[i].guests
        } Guests</label><br><label class="detailLabel">${
          reserveArray[i].cCode
        } ${
          reserveArray[i].phone
        }</label><br><br><label class="infoTitleLabel">Notes:</label><br><br><label class="detailLabel">${
          reserveArray[i].notes
        }</label><br><br><br><label class="infoTitleLabel">Requested on:</label><label class="detailLabel">${
          reserveArray[i].timePlaced
        } ${
          reserveArray[i].datePlaced
        }</label><br><br><label class="infoTitleLabel">Status:</label><label class="detailLabel decline">Cancelled</label><br><br></div>`;
      }
    }
  }

  if (slotsContent == "") {
    //SHOW NO RESERVATION VIEW

    slotsContent = `<div class="noEvents"><label>NO RESERVATIONS</label></div>`;
  }

  eventSlots.innerHTML = slotsContent;
}

function blockSlot() {
  document.querySelector(".eventSlots").style.display = "none";
  document.querySelector(".noEvents").style.display = "flex";
}

function acceptReservation(name) {
  alert("Reservation accepted successfully!");
}

function rejectReservation(name) {
  alert("Reservation rejected successfully!");
}

function cancelReservation(name) {
  document.getElementById("main").style.display = "block";

  document.getElementById("yesBtn").name = name;
  document
    .getElementById("yesBtn")
    .setAttribute("onClick", "confirmCancelReserve(this.name)");
  // document.getElementById('yesBtn').setAttribute( "onClick", "hidePopUp()" );

  document.getElementById("popUpMsg").innerHTML =
    "Do you want to cancel this reservation? \n this action is irreversible";
}

function confirmCancelReserve(name) {
  hidePopUp();
  alert("Reservation cancelled successfully!");
}

function hidePopUp() {
  document.getElementById("main").style.display = "none";
}

function finishReservation(name) {
  document.getElementById("main").style.display = "block";

  document.getElementById("yesBtn").name = name;
  document
    .getElementById("yesBtn")
    .setAttribute("onClick", "confirmReserveDone(this.name)");

  document.getElementById("popUpMsg").innerHTML =
    "Do you want to mark this reservation as done? \n this action is irreversible";
  // alert("Do you want to mark this reservation as done? \n this action is irreversible");
}

function showCalendar() {
  document.getElementById("dateContainer").style.display = "block";
}

function closeCalendar() {
  document.getElementById("dateContainer").style.display = "none";
}
