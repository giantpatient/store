
var pid;
var closingTime;
var nearestTime = "none"; 
var pendingOrdersArray = [{}];
var activeDrivers = false;

var labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

var data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
};

var config = {
  type: 'line',
  data,
  options: {}
};

var pieLables = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];


var lineLables = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

var polarLables = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

var coloursBG = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 12, 28, 1)', 'rgba(21, 92, 192, 1)', 'rgba(75, 192, 45, 1)', 'rgba(5, 92, 12, 1)'];

var coloursBorder = ['rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(25, 19, 64, 0.2)', 'rgba(25, 15, 4, 0.2)', 'rgba(155, 59, 4, 0.2)', 'rgba(85, 129, 19, 0.2)', 'rgba(250, 119, 124, 0.2)', 'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(25, 19, 64, 0.2)', 'rgba(25, 15, 4, 0.2)', 'rgba(155, 59, 4, 0.2)', 'rgba(85, 129, 19, 0.2)', 'rgba(250, 119, 124, 0.2)', 'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(25, 19, 64, 0.2)', 'rgba(25, 15, 4, 0.2)', 'rgba(155, 59, 4, 0.2)', 'rgba(85, 129, 19, 0.2)', 'rgba(250, 119, 124, 0.2)', 'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(25, 19, 64, 0.2)', 'rgba(25, 15, 4, 0.2)', 'rgba(155, 59, 4, 0.2)', 'rgba(85, 129, 19, 0.2)', 'rgba(250, 119, 124, 0.2)', 'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(25, 19, 64, 0.2)', 'rgba(25, 15, 4, 0.2)', 'rgba(155, 59, 4, 0.2)', 'rgba(85, 129, 19, 0.2)', 'rgba(250, 119, 124, 0.2)', 'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(25, 19, 64, 0.2)', 'rgba(25, 15, 4, 0.2)', 'rgba(155, 59, 4, 0.2)', 'rgba(85, 129, 19, 0.2)', 'rgba(250, 119, 124, 0.2)', 'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(25, 19, 64, 0.2)', 'rgba(25, 15, 4, 0.2)', 'rgba(155, 59, 4, 0.2)', 'rgba(85, 129, 19, 0.2)', 'rgba(250, 119, 124, 0.2)', 'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(25, 19, 64, 0.2)', 'rgba(25, 15, 4, 0.2)', 'rgba(155, 59, 4, 0.2)', 'rgba(85, 129, 19, 0.2)', 'rgba(250, 119, 124, 0.2)', 'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(25, 19, 64, 0.2)', 'rgba(25, 15, 4, 0.2)', 'rgba(155, 59, 4, 0.2)', 'rgba(85, 129, 19, 0.2)', 'rgba(250, 119, 124, 0.2)', 'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(25, 19, 64, 0.2)', 'rgba(25, 15, 4, 0.2)', 'rgba(155, 59, 4, 0.2)', 'rgba(85, 129, 19, 0.2)', 'rgba(250, 119, 124, 0.2)', 'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(25, 19, 64, 0.2)', 'rgba(25, 15, 4, 0.2)', 'rgba(155, 59, 4, 0.2)', 'rgba(85, 129, 19, 0.2)', 'rgba(250, 119, 124, 0.2)', 'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(25, 19, 64, 0.2)', 'rgba(25, 15, 4, 0.2)', 'rgba(155, 59, 4, 0.2)', 'rgba(85, 129, 19, 0.2)', 'rgba(250, 119, 124, 0.2)', 'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(25, 19, 64, 0.2)', 'rgba(25, 15, 4, 0.2)', 'rgba(155, 59, 4, 0.2)', 'rgba(85, 129, 19, 0.2)', 'rgba(250, 119, 124, 0.2)', 'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(25, 19, 64, 0.2)', 'rgba(25, 15, 4, 0.2)', 'rgba(155, 59, 4, 0.2)', 'rgba(85, 129, 19, 0.2)', 'rgba(250, 119, 124, 0.2)', 'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(25, 19, 64, 0.2)', 'rgba(25, 15, 4, 0.2)', 'rgba(155, 59, 4, 0.2)', 'rgba(85, 129, 19, 0.2)', 'rgba(250, 119, 124, 0.2)', 'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(25, 19, 64, 0.2)', 'rgba(25, 15, 4, 0.2)', 'rgba(155, 59, 4, 0.2)', 'rgba(85, 129, 19, 0.2)', 'rgba(250, 119, 124, 0.2)', 'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(25, 19, 64, 0.2)', 'rgba(25, 15, 4, 0.2)', 'rgba(155, 59, 4, 0.2)', 'rgba(85, 129, 19, 0.2)', 'rgba(250, 119, 124, 0.2)', 'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(25, 19, 64, 0.2)', 'rgba(25, 15, 4, 0.2)', 'rgba(155, 59, 4, 0.2)', 'rgba(85, 129, 19, 0.2)', 'rgba(250, 119, 124, 0.2)', 'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(25, 19, 64, 0.2)', 'rgba(25, 15, 4, 0.2)', 'rgba(155, 59, 4, 0.2)', 'rgba(85, 129, 19, 0.2)', 'rgba(250, 119, 124, 0.2)', 'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(25, 19, 64, 0.2)', 'rgba(25, 15, 4, 0.2)', 'rgba(155, 59, 4, 0.2)', 'rgba(85, 129, 19, 0.2)', 'rgba(250, 119, 124, 0.2)'];

var topItemsArray = [{}];


var pickupOrders = [];

var preorders = [];

var distance = [];

var cancel = [];

var orderSizes = [];

var monthsOrders = [{}];

var payments = [{}];

var areas = [{}];

var customers = [{}];

var promoEarnings = [{}];

//s

var topItemsArrayWeek = [{}];
var pickupOrdersWeek = [];
var preordersWeek = [];
var distanceWeek = [];
var cancelWeek = [];
var orderSizesWeek = [];
var monthsOrdersWeek = [{}];
var paymentsWeek = [{}];
var areasWeek = [{}];
var customersWeek = [{}];
var promoEarningsWeek = [{}];

//e

//s

var topItemsArrayMonth = [{}];
var pickupOrdersMonth = [];
var preordersMonth = [];
var distanceMonth = [];
var cancelMonth = [];
var orderSizesMonth = [];
var monthsOrdersMonth = [{}];
var paymentsMonth = [{}];
var areasMonth = [{}];
var customersMonth = [{}];
var promoEarningsMonth = [{}];

//e

//s

var topItemsArray3Months = [{}];
var pickupOrders3Months = [];
var preorders3Months = [];
var distance3Months = [];
var cancel3Months = [];
var orderSizes3Months = [];
var monthsOrders3Months = [{}];
var payments3Months = [{}];
var areas3Months = [{}];
var customers3Months = [{}];
var promoEarnings3Months = [{}];
//e

//s
var topItemsArray6Months = [{}];
var pickupOrders6Months = [];
var preorders6Months = [];
var distance6Months = [];
var cancel6Months = [];
var orderSizes6Months = [];
var monthsOrders6Months = [{}];
var payments6Months = [{}];
var areas6Months = [{}];
var customers6Months = [{}];
var promoEarnings6Months = [{}];
//e

//s
var topItemsArrayYear = [{}];
var pickupOrdersYear = [];
var preordersYear = [];
var distanceYear = [];
var cancelYear = [];
var orderSizesYear = [];
var monthsOrdersYear = [{}];
var paymentsYear = [{}];
var areasYear = [{}];
var customersYear = [{}];
var promoEarningsYear = [{}];
//e

var ratings;
var ratingsWeek;
var ratingsMonth;
var ratings3Months;
var ratings6Months;
var ratingsYear;

var ratingsBreak;
var ratingsBreakWeek;
var ratingsBreakMonth;
var ratingsBreak3Months;
var ratingsBreak6Months;
var ratingsBreakYear;

var ratingsHistory;
var ratingsHistoryWeek;
var ratingsHistoryMonth;
var ratingsHistory3Months;


function changeChart() {
    alertNoItems();
}


function alertNoItems() {
    
    alert("No data available for your selection");
}


