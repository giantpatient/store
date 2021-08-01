var pid;
// var closingTime;
// var nearestTime = "none";

// var checkbox1 = document.getElementById("checkbox1");
// var checkbox1Label = document.getElementById("checkbox1label");
// var checkbox2 = document.getElementById("checkbox2");
// var checkbox2Label = document.getElementById("checkbox2label");
// var until = document.getElementById("until");
// var closingLabel1 = document.getElementById("closingLabel1");
// var closingLabel2 = document.getElementById("closingLabel2");

var checkImage = false;

function checkInfo(event) {
  var pic = document.getElementById("pic");
  console.log(pic.files);

  console.log(pic.files[0].size / 1000000);

  var imageSizeNotRounded = pic.files[0].size / 1000000;

  var imageSize = imageSizeNotRounded.toFixed(3);

  var imageSizeDouble = parseFloat(imageSize);

  var info = document.getElementById("imgInfo");
  info.innerHTML = "";

  if (imageSizeDouble > 3) {
    alert("image size cannot be larger than 3 MB");
    info.insertAdjacentHTML(
      "beforeend",
      "<br><label style='color: red;'>Image size cannot be larger than 3 MB.</label>"
    );
    checkImage = false;
    //return false;
  }

  console.log(imageSizeDouble);

  //  if(event.target.files.length > 0){
  if (pic.files.length > 0) {
    //var src = URL.createObjectURL(event.target.files[0]);
    var src = URL.createObjectURL(pic.files[0]);
    var preview = document.getElementById("file-ip-1-preview");
    preview.src = src;
    preview.style.display = "block";
  }

  var width, height;

  var file = pic.files[0];
  var img = new Image();

  img.onload = function () {
    var sizes = {
      width: this.width,
      height: this.height,
    };
    URL.revokeObjectURL(this.src);

    //console.log('onload: sizes', sizes);
    console.log(sizes);
    console.log("onload: this", this);

    width = sizes.width;
    height = sizes.height;

    console.log(width + " x " + height);

    if (height > width || height == 0 || width == 0 || pic.files.length == 0) {
      // alert("Image height cannot exceed width, please edit the image or upload another one");
      //info.innerHTML = "";
      info.insertAdjacentHTML(
        "beforeend",
        "<br><label style='color: red;'>Image height cannot exceed width, please edit the image or upload another one.</label>"
      );

      info.insertAdjacentHTML(
        "beforeend",
        "<br><label'>Image size: " + imageSize + " MB</label>"
      );
      info.insertAdjacentHTML(
        "beforeend",
        "<br><label'>Image dimensions: width: " +
          width +
          " px, height: " +
          height +
          " px</label>"
      );

      checkImage = false;
      // return false;
    } else {
      //info.innerHTML = "";
      console.log("got here");
      checkImage = true;

      if (imageSizeDouble > 3) {
        checkImage = false;
      }

      info.insertAdjacentHTML(
        "beforeend",
        "<br><label'>Image size: " + imageSize + " MB</label>"
      );
      info.insertAdjacentHTML(
        "beforeend",
        "<br><label'>Image dimensions: width: " +
          width +
          " px, height: " +
          height +
          " px</label>"
      );

      //return true;
    }

    console.log("check = " + checkImage);
  };

  var objectURL = URL.createObjectURL(file);

  img.src = objectURL;
}

function fetchWorkingHours() {
  document.getElementById("workingHours").style.display = "block";
}

function closeWorkingHours() {
  document.getElementById("workingHours").style.display = "none";
}

function checkHours(id) {
  var dayChoice = document.getElementById(id);

  var shift1 = id.slice(0, -2);
  shift1 = shift1 + "4]";

  var shift2 = id.slice(0, -2);
  shift2 = shift2 + "11]";

  var shift1Element = document.getElementById(shift1);
  var shift2Element = document.getElementById(shift2);

  //console.log(newstr);

  if (dayChoice.value == "closed") {
    shift1Element.style.display = "none";
    shift2Element.style.display = "none";
  } else if (dayChoice.value == "24Hours") {
    shift1Element.style.display = "none";
    shift2Element.style.display = "none";
  } else if (dayChoice.value == "1Shift") {
    shift1Element.style.display = "block";
    shift2Element.style.display = "none";
  } else if (dayChoice.value == "2Shifts") {
    shift1Element.style.display = "block";
    shift2Element.style.display = "block";
  }
}

function filterHours() {
  var sundayChoice = document.getElementsByName("hours[0][0]");
  var mondayChoice = document.getElementsByName("hours[1][0]");
  var tuesdayChoice = document.getElementsByName("hours[2][0]");
  var wednesdayChoice = document.getElementsByName("hours[3][0]");
  var thursdayChoice = document.getElementsByName("hours[4][0]");
  var fridayChoice = document.getElementsByName("hours[5][0]");
  var saturdayChoice = document.getElementsByName("hours[6][0]");

  //Sunday
  var sundayS1HourStart = document.getElementById("hours[0][5]");
  var sundayS1MinStart = document.getElementById("hours[0][6]");
  var sundayS1TimeStart = document.getElementById("hours[0][7]");
  var sundayS1HourEnd = document.getElementById("hours[0][8]");
  var sundayS1MinEnd = document.getElementById("hours[0][9]");
  var sundayS1TimeEnd = document.getElementById("hours[0][10]");

  var sundayS2HourStart = document.getElementById("hours[0][12]");
  var sundayS2MinStart = document.getElementById("hours[0][13]");
  var sundayS2TimeStart = document.getElementById("hours[0][14]");
  var sundayS2HourEnd = document.getElementById("hours[0][15]");
  var sundayS2MinEnd = document.getElementById("hours[0][16]");
  var sundayS2TimeEnd = document.getElementById("hours[0][17]");

  //Monday
  var mondayS1HourStart = document.getElementById("hours[1][5]");
  var mondayS1MinStart = document.getElementById("hours[1][6]");
  var mondayS1TimeStart = document.getElementById("hours[1][7]");
  var mondayS1HourEnd = document.getElementById("hours[1][8]");
  var mondayS1MinEnd = document.getElementById("hours[1][9]");
  var mondayS1TimeEnd = document.getElementById("hours[1][10]");

  var mondayS2HourStart = document.getElementById("hours[1][12]");
  var mondayS2MinStart = document.getElementById("hours[1][13]");
  var mondayS2TimeStart = document.getElementById("hours[1][14]");
  var mondayS2HourEnd = document.getElementById("hours[1][15]");
  var mondayS2MinEnd = document.getElementById("hours[1][16]");
  var mondayS2TimeEnd = document.getElementById("hours[1][17]");

  //Tuesday
  var tuesdayS1HourStart = document.getElementById("hours[2][5]");
  var tuesdayS1MinStart = document.getElementById("hours[2][6]");
  var tuesdayS1TimeStart = document.getElementById("hours[2][7]");
  var tuesdayS1HourEnd = document.getElementById("hours[2][8]");
  var tuesdayS1MinEnd = document.getElementById("hours[2][9]");
  var tuesdayS1TimeEnd = document.getElementById("hours[2][10]");

  var tuesdayS2HourStart = document.getElementById("hours[2][12]");
  var tuesdayS2MinStart = document.getElementById("hours[2][13]");
  var tuesdayS2TimeStart = document.getElementById("hours[2][14]");
  var tuesdayS2HourEnd = document.getElementById("hours[2][15]");
  var tuesdayS2MinEnd = document.getElementById("hours[2][16]");
  var tuesdayS2TimeEnd = document.getElementById("hours[2][17]");

  //Wednesday
  var wednesdayS1HourStart = document.getElementById("hours[3][5]");
  var wednesdayS1MinStart = document.getElementById("hours[3][6]");
  var wednesdayS1TimeStart = document.getElementById("hours[3][7]");
  var wednesdayS1HourEnd = document.getElementById("hours[3][8]");
  var wednesdayS1MinEnd = document.getElementById("hours[3][9]");
  var wednesdayS1TimeEnd = document.getElementById("hours[3][10]");

  var wednesdayS2HourStart = document.getElementById("hours[3][12]");
  var wednesdayS2MinStart = document.getElementById("hours[3][13]");
  var wednesdayS2TimeStart = document.getElementById("hours[3][14]");
  var wednesdayS2HourEnd = document.getElementById("hours[3][15]");
  var wednesdayS2MinEnd = document.getElementById("hours[3][16]");
  var wednesdayS2TimeEnd = document.getElementById("hours[3][17]");

  //Thursday
  var thursdayS1HourStart = document.getElementById("hours[4][5]");
  var thursdayS1MinStart = document.getElementById("hours[4][6]");
  var thursdayS1TimeStart = document.getElementById("hours[4][7]");
  var thursdayS1HourEnd = document.getElementById("hours[4][8]");
  var thursdayS1MinEnd = document.getElementById("hours[4][9]");
  var thursdayS1TimeEnd = document.getElementById("hours[4][10]");

  var thursdayS2HourStart = document.getElementById("hours[4][12]");
  var thursdayS2MinStart = document.getElementById("hours[4][13]");
  var thursdayS2TimeStart = document.getElementById("hours[4][14]");
  var thursdayS2HourEnd = document.getElementById("hours[4][15]");
  var thursdayS2MinEnd = document.getElementById("hours[4][16]");
  var thursdayS2TimeEnd = document.getElementById("hours[4][17]");

  //Friday
  var fridayS1HourStart = document.getElementById("hours[5][5]");
  var fridayS1MinStart = document.getElementById("hours[5][6]");
  var fridayS1TimeStart = document.getElementById("hours[5][7]");
  var fridayS1HourEnd = document.getElementById("hours[5][8]");
  var fridayS1MinEnd = document.getElementById("hours[5][9]");
  var fridayS1TimeEnd = document.getElementById("hours[5][10]");

  var fridayS2HourStart = document.getElementById("hours[5][12]");
  var fridayS2MinStart = document.getElementById("hours[5][13]");
  var fridayS2TimeStart = document.getElementById("hours[5][14]");
  var fridayS2HourEnd = document.getElementById("hours[5][15]");
  var fridayS2MinEnd = document.getElementById("hours[5][16]");
  var fridayS2TimeEnd = document.getElementById("hours[5][17]");

  //Saturday
  var saturdayS1HourStart = document.getElementById("hours[6][5]");
  var saturdayS1MinStart = document.getElementById("hours[6][6]");
  var saturdayS1TimeStart = document.getElementById("hours[6][7]");
  var saturdayS1HourEnd = document.getElementById("hours[6][8]");
  var saturdayS1MinEnd = document.getElementById("hours[6][9]");
  var saturdayS1TimeEnd = document.getElementById("hours[6][10]");

  var saturdayS2HourStart = document.getElementById("hours[6][12]");
  var saturdayS2MinStart = document.getElementById("hours[6][13]");
  var saturdayS2TimeStart = document.getElementById("hours[6][14]");
  var saturdayS2HourEnd = document.getElementById("hours[6][15]");
  var saturdayS2MinEnd = document.getElementById("hours[6][16]");
  var saturdayS2TimeEnd = document.getElementById("hours[6][17]");

  for (i = 0; i < 4; i++) {
    if (sundayChoice[i].checked == true) {
      sundayChoice = sundayChoice[i].value;
    }

    if (mondayChoice[i].checked == true) {
      mondayChoice = mondayChoice[i].value;
    }

    if (tuesdayChoice[i].checked == true) {
      tuesdayChoice = tuesdayChoice[i].value;
    }

    if (wednesdayChoice[i].checked == true) {
      wednesdayChoice = wednesdayChoice[i].value;
    }

    if (thursdayChoice[i].checked == true) {
      thursdayChoice = thursdayChoice[i].value;
    }

    if (fridayChoice[i].checked == true) {
      fridayChoice = fridayChoice[i].value;
    }

    if (saturdayChoice[i].checked == true) {
      saturdayChoice = saturdayChoice[i].value;
    }
  }

  alert(
    "Sunday: " +
      sundayChoice +
      " <br> " +
      " Monday: " +
      mondayChoice +
      ", " +
      " Tuesday: " +
      tuesdayChoice +
      ", " +
      " Wednesday: " +
      wednesdayChoice +
      ", " +
      " Thursday: " +
      thursdayChoice +
      ",  Friday: " +
      fridayChoice +
      " , Saturday: " +
      saturdayChoice
  );

  var sunday = [
    "start1",
    "end1",
    "0",
    "Sunday",
    "start2",
    "end2",
    "start3",
    "end3",
  ];
  var monday = [
    "start1",
    "end1",
    "1",
    "Monday",
    "start2",
    "end2",
    "start3",
    "end3",
  ];
  var tuesday = [
    "start1",
    "end1",
    "2",
    "Tuesday",
    "start2",
    "end2",
    "start3",
    "end3",
  ];
  var wednesday = [
    "start1",
    "end1",
    "3",
    "Wednesday",
    "start2",
    "end2",
    "start3",
    "end3",
  ];
  var thursday = [
    "start1",
    "end1",
    "4",
    "Thursday",
    "start2",
    "end2",
    "start3",
    "end3",
  ];
  var friday = [
    "start1",
    "end1",
    "5",
    "Friday",
    "start2",
    "end2",
    "start3",
    "end3",
  ];
  var saturday = [
    "start1",
    "end1",
    "6",
    "Saturday",
    "start2",
    "end2",
    "start3",
    "end3",
  ];

  //s

  var sundayS1HourStart = document.getElementById("hours[0][5]");
  var sundayS1MinStart = document.getElementById("hours[0][6]");
  var sundayS1TimeStart = document.getElementById("hours[0][7]");
  var sundayS1HourEnd = document.getElementById("hours[0][8]");
  var sundayS1MinEnd = document.getElementById("hours[0][9]");
  var sundayS1TimeEnd = document.getElementById("hours[0][10]");

  var sundayS2HourStart = document.getElementById("hours[0][12]");
  var sundayS2MinStart = document.getElementById("hours[0][13]");
  var sundayS2TimeStart = document.getElementById("hours[0][14]");
  var sundayS2HourEnd = document.getElementById("hours[0][15]");
  var sundayS2MinEnd = document.getElementById("hours[0][16]");
  var sundayS2TimeEnd = document.getElementById("hours[0][17]");

  //e

  var sundayTimes = [
    sundayS1HourStart.value,
    sundayS1MinStart.value,
    sundayS1TimeStart.value,
    sundayS1HourEnd.value,
    sundayS1MinEnd.value,
    sundayS1TimeEnd.value,
    sundayS2HourStart.value,
    sundayS2MinStart.value,
    sundayS2TimeStart.value,
    sundayS2HourEnd.value,
    sundayS2MinEnd.value,
    sundayS2TimeEnd.value,
  ];
  var mondayTimes = [
    mondayS1HourStart.value,
    mondayS1MinStart.value,
    mondayS1TimeStart.value,
    mondayS1HourEnd.value,
    mondayS1MinEnd.value,
    mondayS1TimeEnd.value,
    mondayS2HourStart.value,
    mondayS2MinStart.value,
    mondayS2TimeStart.value,
    mondayS2HourEnd.value,
    mondayS2MinEnd.value,
    mondayS2TimeEnd.value,
  ];
  var tuesdayTimes = [
    tuesdayS1HourStart.value,
    tuesdayS1MinStart.value,
    tuesdayS1TimeStart.value,
    tuesdayS1HourEnd.value,
    tuesdayS1MinEnd.value,
    tuesdayS1TimeEnd.value,
    tuesdayS2HourStart.value,
    tuesdayS2MinStart.value,
    tuesdayS2TimeStart.value,
    tuesdayS2HourEnd.value,
    tuesdayS2MinEnd.value,
    tuesdayS2TimeEnd.value,
  ];
  var wednesdayTimes = [
    wednesdayS1HourStart.value,
    wednesdayS1MinStart.value,
    wednesdayS1TimeStart.value,
    wednesdayS1HourEnd.value,
    wednesdayS1MinEnd.value,
    wednesdayS1TimeEnd.value,
    wednesdayS2HourStart.value,
    wednesdayS2MinStart.value,
    wednesdayS2TimeStart.value,
    wednesdayS2HourEnd.value,
    wednesdayS2MinEnd.value,
    wednesdayS2TimeEnd.value,
  ];
  var thursdayTimes = [
    thursdayS1HourStart.value,
    thursdayS1MinStart.value,
    thursdayS1TimeStart.value,
    thursdayS1HourEnd.value,
    thursdayS1MinEnd.value,
    thursdayS1TimeEnd.value,
    thursdayS2HourStart.value,
    thursdayS2MinStart.value,
    thursdayS2TimeStart.value,
    thursdayS2HourEnd.value,
    thursdayS2MinEnd.value,
    thursdayS2TimeEnd.value,
  ];
  var fridayTimes = [
    fridayS1HourStart.value,
    fridayS1MinStart.value,
    fridayS1TimeStart.value,
    fridayS1HourEnd.value,
    fridayS1MinEnd.value,
    fridayS1TimeEnd.value,
    fridayS2HourStart.value,
    fridayS2MinStart.value,
    fridayS2TimeStart.value,
    fridayS2HourEnd.value,
    fridayS2MinEnd.value,
    fridayS2TimeEnd.value,
  ];
  var saturdayTimes = [
    saturdayS1HourStart.value,
    saturdayS1MinStart.value,
    saturdayS1TimeStart.value,
    saturdayS1HourEnd.value,
    saturdayS1MinEnd.value,
    saturdayS1TimeEnd.value,
    saturdayS2HourStart.value,
    saturdayS2MinStart.value,
    saturdayS2TimeStart.value,
    saturdayS2HourEnd.value,
    saturdayS2MinEnd.value,
    saturdayS2TimeEnd.value,
  ];

  var days = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];
  var choices = [
    sundayChoice,
    mondayChoice,
    tuesdayChoice,
    wednesdayChoice,
    thursdayChoice,
    fridayChoice,
    saturdayChoice,
  ];
  var times = [
    sundayTimes,
    mondayTimes,
    tuesdayTimes,
    wednesdayTimes,
    thursdayTimes,
    fridayTimes,
    saturdayTimes,
  ];

  for (i = 0; i < days.length; i++) {
    if (choices[i] == "24Hours") {
      days[i][0] = "00:00";
      days[i][1] = "23:59";
      days[i][4] = "00:00";
      days[i][5] = "00:00";
      days[i][6] = "00:00";
      days[i][7] = "00:00";
    } else if (choices[i] == "closed") {
      if (days[i][0] != "start1") {
        days[i][4] = "00:00";
        days[i][5] = "00:00";
        days[i][6] = "00:00";
        days[i][7] = "00:00";
      } else if (days[i][0] == "start1") {
        days[i][0] = "00:00";
        days[i][1] = "00:00";
        days[i][4] = "00:00";
        days[i][5] = "00:00";
        days[i][6] = "00:00";
        days[i][7] = "00:00";
      }
    } else if (choices[i] == "1Shift") {
      var S1HSint = parseInt(times[i][0]);
      var S1HEint = parseInt(times[i][3]);
      var S1MSint = parseInt(times[i][1]);
      var S1MEint = parseInt(times[i][4]);

      if (days[i][0] != "start1") {
        if (times[i][2] == "PM") {
          S1HSint = S1HSint + 12;

          days[i][4] = S1HSint + ":" + times[i][1];
        } else if (times[i][2] == "AM") {
          days[i][4] = times[i][0] + ":" + times[i][1];
        }

        if (times[i][5] == "PM") {
          S1HEint = S1HEint + 12;
          days[i][5] = S1HEint + ":" + times[i][4];

          days[i][6] = "00:00";
          days[i][7] = "00:00";
        } else if (times[i][5] == "AM") {
          if (times[i][3] == "00" && times[i][4] == "00") {
            days[i][5] = "23:59";
            S1HEint = 23;
            S1MEint = 59;
          } else {
            days[i][5] = times[i][3] + ":" + times[i][4];
          }

          days[i][6] = "00:00";
          days[i][7] = "00:00";
        }

        if (S1HSint > S1HEint || (S1HSint == S1HEint && S1MSint > S1MEint)) {
          if (i == 6) {
            days[0][6] = days[0][4];
            days[0][7] = days[0][5];
            days[0][5] = days[0][1];
            days[0][4] = days[0][0];

            days[0][0] = "00:00";
            days[0][1] = days[i][5];
            days[i][5] = "23:59";
          } else {
            days[i + 1][0] = "00:00";
            days[i + 1][1] = days[i][5];
            days[i][5] = "23:59";
          }
        }
      } else if (days[i][0] == "start1") {
        if (times[i][2] == "PM") {
          S1HSint = S1HSint + 12;

          days[i][0] = S1HSint + ":" + times[i][1];
        } else if (times[i][2] == "AM") {
          days[i][0] = times[i][0] + ":" + times[i][1];
        }

        if (times[i][5] == "PM") {
          S1HEint = S1HEint + 12;
          days[i][1] = S1HEint + ":" + times[i][4];

          days[i][4] = "00:00";
          days[i][5] = "00:00";
          days[i][6] = "00:00";
          days[i][7] = "00:00";
        } else if (times[i][5] == "AM") {
          if (times[i][3] == "00" && times[i][4] == "00") {
            days[i][1] = "23:59";
            S1HEint = 23;
            S1MEint = 59;
          } else {
            days[i][1] = times[i][3] + ":" + times[i][4];
          }

          days[i][4] = "00:00";
          days[i][5] = "00:00";
          days[i][6] = "00:00";
          days[i][7] = "00:00";
        }

        if (S1HSint > S1HEint || (S1HSint == S1HEint && S1MSint > S1MEint)) {
          if (i == 6) {
            days[0][6] = days[0][4];
            days[0][7] = days[0][5];
            days[0][5] = days[0][1];
            days[0][4] = days[0][0];

            days[0][0] = "00:00";
            days[0][1] = days[i][1];
            days[i][1] = "23:59";
          } else {
            days[i + 1][0] = "00:00";
            days[i + 1][1] = days[i][1];
            days[i][1] = "23:59";
          }
        }
      }
    } else if (choices[i] == "2Shifts") {
      var S1HSint = parseInt(times[i][0]);
      var S1HEint = parseInt(times[i][3]);
      var S1MSint = parseInt(times[i][1]);
      var S1MEint = parseInt(times[i][4]);

      var S2HSint = parseInt(times[i][6]);
      var S2HEint = parseInt(times[i][9]);
      var S2MSint = parseInt(times[i][7]);
      var S2MEint = parseInt(times[i][10]);

      if (days[i][0] != "start1") {
        if (times[i][2] == "PM") {
          S1HSint = S1HSint + 12;

          days[i][4] = S1HSint + ":" + times[i][1];
        } else if (times[i][2] == "AM") {
          days[i][4] = times[i][0] + ":" + times[i][1];
        }

        if (times[i][5] == "PM") {
          S1HEint = S1HEint + 12;
          days[i][5] = S1HEint + ":" + times[i][4];
        } else if (times[i][5] == "AM") {
          if (times[i][3] == "00" && times[i][4] == "00") {
            days[i][5] = "23:59";
            S1HEint = 23;
            S1MEint = 59;
          } else {
            days[i][5] = times[i][3] + ":" + times[i][4];
          }

          days[i][6] = "00:00";
          days[i][7] = "00:00";
        }

        if (S1HSint > S1HEint || (S1HSint == S1HEint && S1MSint > S1MEint)) {
          if (i == 6) {
            days[0][6] = days[0][4];
            days[0][7] = days[0][5];
            days[0][5] = days[0][1];
            days[0][4] = days[0][0];

            days[0][0] = "00:00";
            days[0][1] = days[i][5];
            days[i][5] = "23:59";
          } else {
            days[i + 1][0] = "00:00";
            days[i + 1][1] = days[i][5];
            days[i][5] = "23:59";
          }

          alert(
            days[i][3] +
              " shift 1 cannot end after midnight, please use shift 2 instead, or switch sunday to 1 shift only."
          );
          return;
        }

        //S2

        if (times[i][8] == "PM") {
          S2HSint = S2HSint + 12;

          days[i][6] = S2HSint + ":" + times[i][7];
        } else if (times[i][8] == "AM") {
          days[i][6] = times[i][6] + ":" + times[i][7];
        }

        if (times[i][11] == "PM") {
          S2HEint = S2HEint + 12;
          days[i][7] = S2HEint + ":" + times[i][10];
        } else if (times[i][11] == "AM") {
          if (times[i][9] == "00" && times[i][10] == "00") {
            days[i][7] = "23:59";
            S2HEint = 23;
            S2MEint = 59;
          } else {
            days[i][7] = times[i][9] + ":" + times[i][10];
          }
        }

        if (S2HSint > S2HEint || (S2HSint == S2HEint && S2MSint > S2MEint)) {
          if (i == 6) {
            days[0][6] = days[0][4];
            days[0][7] = days[0][5];
            days[0][5] = days[0][1];
            days[0][4] = days[0][0];

            days[0][0] = "00:00";
            days[0][1] = days[i][7];
            days[i][7] = "23:59";
          } else {
            days[i + 1][0] = "00:00";
            days[i + 1][1] = days[i][7];
            days[i][7] = "23:59";
          }
        }

        if (S1HSint > S2HSint || S1HEint > S2HSint) {
          alert(days[i][3] + " shift 1 cannot start after shift 2");
          return;
        }
      } else if (days[i][0] == "start1") {
        if (times[i][2] == "PM") {
          S1HSint = S1HSint + 12;

          days[i][0] = S1HSint + ":" + times[i][1];
        } else if (times[i][2] == "AM") {
          days[i][0] = times[i][0] + ":" + times[i][1];
        }

        if (times[i][5] == "PM") {
          S1HEint = S1HEint + 12;
          days[i][1] = S1HEint + ":" + times[i][4];
        } else if (times[i][5] == "AM") {
          if (times[i][3] == "00" && times[i][4] == "00") {
            days[i][1] = "23:59";
            S1HEint = 23;
            S1MEint = 59;
          } else {
            days[i][1] = times[i][3] + ":" + times[i][4];
          }

          days[i][4] = "00:00";
          days[i][5] = "00:00";
          days[i][6] = "00:00";
          days[i][7] = "00:00";
        }

        if (S1HSint > S1HEint || (S1HSint == S1HEint && S1MSint > S1MEint)) {
          sunday[0] = "00:00";
          sunday[1] = days[i][1];
          days[i][1] = "23:59";

          alert(
            days[i][3] +
              " shift 1 cannot end after midnight, please use shift 2 instead, or switch sunday to 1 shift only."
          );
          return;
        }

        //S2

        if (times[i][8] == "PM") {
          S2HSint = S2HSint + 12;

          days[i][4] = S2HSint + ":" + times[i][7];
        } else if (times[i][8] == "AM") {
          days[i][4] = times[i][6] + ":" + times[i][7];
        }

        if (times[i][11] == "PM") {
          S2HEint = S2HEint + 12;
          days[i][5] = S2HEint + ":" + times[i][10];
        } else if (times[i][11] == "AM") {
          if (times[i][9] == "00" && times[i][10] == "00") {
            days[i][5] = "23:59";
            S2HEint = 23;
            S2MEint = 59;
          } else {
            days[i][5] = times[i][9] + ":" + times[i][10];
          }
        }

        days[i][6] = "00:00";
        days[i][7] = "00:00";

        if (S2HSint > S2HEint || (S2HSint == S2HEint && S2MSint > S2MEint)) {
          if (i == 6) {
            days[0][6] = days[0][4];
            days[0][7] = days[0][5];
            days[0][5] = days[0][1];
            days[0][4] = days[0][0];

            days[0][0] = "00:00";
            days[0][1] = days[i][5];
            days[i][5] = "23:59";
          } else {
            days[i + 1][0] = "00:00";
            days[i + 1][1] = days[i][5];
            days[i][5] = "23:59";
          }
        }

        if (S1HSint > S2HSint || S1HEint > S2HSint) {
          alert(days[i][3] + " shift 1 cannot start after shift 2");
          return;
        }
      }
    }
  }

  return days;
}
