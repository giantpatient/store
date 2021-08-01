var pid;
var closingTime;
var nearestTime = "none";
var reservations = [{}];

function fetchData() {
  // var reviewsTitleDiv = document.getElementById("reviewsDiv");
  // var reviewsDiv = document.getElementById("reviewsContentDiv");
  // reviewsTitleDiv.innerHTML = "";

  var completedReservations = document.getElementById("completedReservations");

  var xht = new XMLHttpRequest();
  xht.open("post", "/ReservationHistoryPHP", true);
  xht.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xht.onreadystatechange = function () {
    if (xht.readyState == 4 && xht.status == 200) {
      var response = JSON.parse(xht.responseText);

      if (response.status == "200") {
        reservations = response.reservations;
        // add after pickup time
        var completedOrdersHeader =
          "<label>Reservation History</label><br><table id='completedReservationsTable'><tr><th>Reservation ID</th><th>Customer Name</th><th>Phone</th><th>Date</th><th>Time</th><th>Guests</th><th>Status</th></tr></table>";

        var completedOrdersTableContent = "";

        for (i = 0; i < reservations.length; i++) {
          completedOrdersTableContent += `<tr><td>${reservations[i].reserveID}</td><td>${reservations[i].fName} ${reservations[i].lName}</td><td>${reservations[i].cCode} ${reservations[i].phone}</td><td>${reservations[i].reserveDateFiltered}</td><td>${reservations[i].reserveTimeFiltered}</td><td>${reservations[i].guests}</td><td>${reservations[i].status}</td></tr>`;
        }

        if (completedOrdersTableContent === "") {
          completedOrdersHeader =
            "<label>Reservation History</label><label>N/A</label>";
          completedReservations.innerHTML = completedOrdersHeader;
        } else {
          completedReservations.innerHTML = completedOrdersHeader;
          document
            .getElementById("completedReservationsTable")
            .insertAdjacentHTML("beforeend", completedOrdersTableContent);
        }
      } else if (response.status == "204") {
        var completedNullHeader =
          "<label>Completed orders</label><label>N/A</label>";
        completedReservations.innerHTML = completedNullHeader;

        //   alert("No data available");
      } else if (response.status == "400") {
        window.location.href = response.location;
      }
    }
  };

  xht.send("fetchReservations=true");
}

Notification.requestPermission(function (status) {
  console.log("Notification permission status:", status);
});
