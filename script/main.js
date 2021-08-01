var pid;
var closingTime;
var nearestTime = "none";
var pendingOrdersArray = [{}];
var activeDrivers = false;
var deliveryPrices = {};

var modal = document.getElementById("myModal");

function openPrompt() {
  // send request to php here, retrieve filtered time and closest ending time
  var modal = document.getElementById("myModal");
  //var btn = document.getElementById("myBtn");
  var partnerStatus = document.getElementById("workingStatus");

  var checkbox1 = document.getElementById("checkbox1");
  var checkbox1Label = document.getElementById("checkbox1label");
  var checkbox2 = document.getElementById("checkbox2");
  var checkbox2Label = document.getElementById("checkbox2label");
  var until = document.getElementById("until");
  var closingLabel1 = document.getElementById("closingLabel1");
  var closingLabel2 = document.getElementById("closingLabel2");

  var currentstatus = document.getElementById("partnerStatus");

  var busyCheckBox = document.getElementById("checkbox3");

  var busyCheckBoxLabel = document.getElementById("checkbox3label");
  var busyDiv2 = document.getElementById("busyDiv2");
  var currentDelay = document.getElementById("currentDelay");

  modal.style.display = "block";

  partnerStatus.innerHTML = "ON";
  partnerStatus.style.color = "green";
  currentstatus.value = "on";
  checkbox1.name = "on";
  busyCheckBoxLabel.innerHTML = "Busy?";
}

function Cancel() {
  var modal = document.getElementById("myModal");
  var checkbox1 = document.getElementById("checkbox1");
  var checkbox2 = document.getElementById("checkbox2");

  checkbox1.checked = false;
  checkbox2.checked = false;

  modal.style.display = "none";
}

function checkStatus() {
  document.getElementById("statusBtn").innerHTML = pid;

  //send request to php with pid

  // if successful retrieve data and open modal box and fill it

  //Cancel()
}

function updateStatus() {
  //send request to php to update partner status and/or override
  var checkbox1 = document.getElementById("checkbox1");
  var checkbox2 = document.getElementById("checkbox2");
  var until = document.getElementById("until");
  var currentStatus = document.getElementById("partnerStatus");
  var busyCheckBox = document.getElementById("checkbox3");
  var busyCheckBoxLabel = document.getElementById("checkbox3label");
  var delayTime = document.getElementById("delay");

  //var sel = document.getElementById("box1");
  var overrideDay = until.options[until.selectedIndex].getAttribute("data-day");

  if (
    checkbox2.checked == true &&
    checkbox1.checked == false &&
    currentStatus.value == "off"
  ) {
    alert(
      "You cannot disable auto closing if you're already closed, please check the box above to start."
    );
    return;
  }

  if (
    checkbox1.name == "off" &&
    checkbox1.checked == false &&
    busyCheckBox.checked == false
  ) {
    alert("You cannot stop trading if you're already closed");
    return;
  } else if (
    checkbox1.name == "on" &&
    checkbox1.checked == false &&
    checkbox2.checked == false &&
    busyCheckBox.checked == false
  ) {
    alert("You cannot start trading if you're already trading");
    return;
  }

  openPrompt();
  Cancel();
  alert("Performed successfully");
}

function checkbox1(name) {
  var checkbox1 = document.getElementById("checkbox1");
  var checkbox1Label = document.getElementById("checkbox1label");
  var checkbox2 = document.getElementById("checkbox2");
  var checkbox2Label = document.getElementById("checkbox2label");
  var until = document.getElementById("until");
  var closingLabel1 = document.getElementById("closingLabel1");
  var closingLabel2 = document.getElementById("closingLabel2");
  var busyCheckBox = document.getElementById("checkbox3");
  var busyCheckBoxLabel = document.getElementById("checkbox3label");
  var busyDiv = document.getElementById("busyDiv");

  if (checkbox1.name == "on") {
    // on to off

    checkbox1.name = "off";
    checkbox2.name = "off";
    checkbox2.checked = false;
    checkbox2.style.display = "none";
    checkbox2label.style.display = "none";
    until.style.display = "none";
    closingLabel1.style.display = "none";
    closingLabel2.style.display = "none";
    busyCheckBox.style.display = "none";
    busyCheckBoxLabel.style.display = "none";
    busyDiv.style.display = "none";
    busyCheckBox.checked = false;
    busyCheckBox.name = "notBusy";
  } else if (checkbox1.name == "off") {
    // off to on

    checkbox1.name = "on";
    checkbox2.style.display = "inline";
    checkbox2label.style.display = "inline";
    until.style.display = "inline";
    busyCheckBox.style.display = "inline";
    busyCheckBoxLabel.style.display = "inline";
    closingLabel1.style.display = "none";
    closingLabel2.style.display = "none";

    if (nearestTime != "none") {
      closingLabel1.style.display = "inline";
      closingLabel2.style.display = "inline";
    }
  }
}

function checkbox2() {
  //asks if he is sure in an alert as it will disable automatic stopping until the time
  //specified therefore he'll have to stop it manually if he shuts before the specefied time
  var checkbox2 = document.getElementById("checkbox2");
  var checkbox1 = document.getElementById("checkbox1");

  if (checkbox2.checked == true) {
    alert(
      "Checking this will disable automatic closing from the system until the specified time, therefore you'll have to close it manually if you need to close before the specified time."
    );
    checkbox2.name = "on";
  } else if (checkbox2.checked == false) {
    checkbox2.name = "off";
  }

  if (checkbox1.name == "off") {
    checkbox2.checked = false;
  }
}

function checkbox3(name) {
  var partnerStatus = document.getElementById("partnerStatus");
  var busyCheckBox = document.getElementById("checkbox3");
  var busyCheckBoxLabel = document.getElementById("checkbox3label");
  var busyDiv = document.getElementById("busyDiv");
  var checkbox1 = document.getElementById("checkbox1");

  if (
    checkbox1.value == "on" &&
    busyCheckBox.checked == true &&
    busyCheckBox.name == "notBusy"
  ) {
    // show that busy can be started
    busyDiv.style.display = "block";
    busyCheckBox.name = "busy";
  } else if (partnerStatus.value == "busy") {
    // busyDiv.style.display = "none";
    // busyCheckBox.name = "notBusy";

    if (busyCheckBox.checked == false) {
      busyCheckBox.name = "busy";
    } else if (busyCheckBox.checked == true) {
      busyDiv.style.display = "none";
      busyCheckBox.name = "notBusy";
    }
  } else if (busyCheckBox.checked == false && busyCheckBox.name == "notBusy") {
    busyDiv.style.display = "block";
    busyCheckBox.name = "busy";
  } else if (checkbox1.value == "on" && busyCheckBox.checked == false) {
    busyDiv.style.display = "none";
    busyCheckBox.name = "notBusy";
  } else {
    busyDiv.style.display = "none";
    busyCheckBox.name = "notBusy";
  }
}

function insertTime(closingTime) {
  // closing time should come from php as xy:00 or xy:30 ONLY!!
  //var closingTime = "22:30:50";

  var selectList = document.getElementById("until");

  selectList.innerHTML = "";
  var res = closingTime.split(":");
  var hour = parseInt(res[0]);
  var minute = parseInt(res[1]);

  var valueHour = hour;
  var valueMinute = minute;

  var timeInner;
  var timeValue;
  var time = "AM";

  var day = "same";

  //document.getElementById("demo").innerHTML = hour + minute;

  for (i = 0; i < 48; i++) {
    if ((valueHour == 11 && valueMinute == 30) || valueHour > 11) {
      time = "PM";
    }

    if ((hour > 11 && minute == 30) || (hour > 11 && hour != 12)) {
      hour = hour - 12;
    }

    if (valueHour == 23 && valueMinute == 30) {
      day = "next";
    }

    if (minute == 30) {
      hour++;
      minute = 0;

      valueHour++;
      valueMinute = 0;

      if (valueHour == 24) {
        valueHour = 0;
        //valueMinute = 0
        time = "AM";
      }
      if (valueHour < 10) {
        timeValue = "0" + valueHour + ":" + valueMinute + "0";
      } else {
        timeValue = valueHour + ":" + valueMinute + "0";
      }
      timeInner = hour + ":" + minute + "0" + " " + time;
    } else if (minute === 0) {
      minute = 30;
      valueMinute = 30;
      timeInner = hour + ":" + minute + " " + time;

      if (valueHour < 10) {
        timeValue = "0" + valueHour + ":" + valueMinute;
      } else {
        timeValue = valueHour + ":" + valueMinute;
      }
    }

    // document.getElementById("demo").innerHTML += timeInner + day;
    // document.getElementById("values").innerHTML += timeValue;

    //var selectList = document.getElementById("until");

    selectList.innerHTML +=
      "<option value='" +
      timeValue +
      "' data-day='" +
      day +
      "'>" +
      timeInner +
      "</option>";

    //set name of option as $day
    // day is sent to server and server checks day id and adds 1, if day is saturday(6)
  }
}

function viewOrder(name) {
  openForm();
}

function printReceipt() {
  // var reciept = document.getElementById('recieptDiv');

  var divContents = document.getElementById("recieptDiv").innerHTML;
  var a = window.open("", "", "height=500, width=500");
  a.document.write("<html>");
  a.document.write("<body > <h1>");
  a.document.write(divContents);
  a.document.write("</body></html>");
  // a.document.close();
  // a.print();

  a.document.close();
  a.focus();
  a.print();
  a.close();
}

function cancelOrder(name) {
  alert("Order has been cancelled successfully!");
}

function acceptOrder(name) {
  alert("Order has been accepted successfully!");
}

function readyOrder(name) {
  alert("Order has been marked as ready!");
}

function collectOrder(name) {
  alert("Order has been marked as collected!");
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function openDriverPopUp(name) {
  var dBtn = document.getElementById("assignDriverBtn");

  dBtn.name = name;

  document.getElementById("driverModal").style.display = "block";
}

function CancelAssignDriver() {
  document.getElementById("driverModal").style.display = "none";
}

function signOutPrompt() {
  document.getElementById("logOutModal").style.display = "block";
}

function CancelLogOut() {
  document.getElementById("logOutModal").style.display = "none";
}

function signOut() {
  var all = document.getElementById("all");

  var some = document.getElementById("some");

  var signoutOf = "some";
  if (all.checked === true) {
    signoutOf = "all";
  }

  window.location.href = "PSignIn.html";
}

function assignDriverToOrder(name) {}
