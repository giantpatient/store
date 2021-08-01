var pid;
var closingTime;
var nearestTime = "none";
var orders = [{}];

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

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

Notification.requestPermission(function (status) {
  console.log("Notification permission status:", status);
});
