function setup() {
  createCanvas(400, 400);
}

// had trouble getting my JSON file to link, so in the mean time I am adding the object here
var deliveries = {
    "shipments": [
    {
      "yr": 2019,
      "mo": "Jan",
      "cost": 1293.37,
      "orders": 5,
      "avecost": 258.674,
      "pandemic": false
    },
    {
      "yr": 2019,
      "mo": "Feb",
      "cost": 102.48,
      "orders": 4,
      "avecost": 25.62,
      "pandemic": false
    },
    {
      "yr": 2019,
      "mo": "Mar",
      "cost": 99.43,
      "orders": 4,
      "avecost": 24.8575,
      "pandemic": false
    },
    {
      "yr": 2019,
      "mo": "Apr",
      "cost": 238.55,
      "orders": 4,
      "avecost": 59.6375,
      "pandemic": false
    },
    {
      "yr": 2019,
      "mo": "May",
      "cost": 188.58,
      "orders": 3,
      "avecost": 62.86,
      "pandemic": false
    },
    {
      "yr": 2019,
      "mo": "Jun",
      "cost": 59.21,
      "orders": 2,
      "avecost": 29.605,
      "pandemic": false
    },
    {
      "yr": 2019,
      "mo": "Jul",
      "cost": 430.47,
      "orders": 5,
      "avecost": 86.094,
      "pandemic": false
    },
    {
      "yr": 2019,
      "mo": "Aug",
      "cost": 315.47,
      "orders": 8,
      "avecost": 39.43375,
      "pandemic": false
    },
    {
      "yr": 2019,
      "mo": "Sep",
      "cost": 368.23,
      "orders": 6,
      "avecost": 61.37166667,
      "pandemic": false
    },
    {
      "yr": 2019,
      "mo": "Oct",
      "cost": 30.4,
      "orders": 2,
      "avecost": 15.2,
      "pandemic": false
    },
    {
      "yr": 2019,
      "mo": "Nov",
      "cost": 24.34,
      "orders": 1,
      "avecost": 24.34,
      "pandemic": false
    },
    {
      "yr": 2019,
      "mo": "Dec",
      "cost": 36.23,
      "orders": 2,
      "avecost": 18.115,
      "pandemic": false
    },
    {
      "yr": 2020,
      "mo": "Jan",
      "cost": 50.13,
      "orders": 3,
      "avecost": 16.71,
      "pandemic": false
    },
    {
      "yr": 2020,
      "mo": "Feb",
      "cost": 134.89,
      "orders": 3,
      "avecost": 44.96333333,
      "pandemic": false
    },
    {
      "yr": 2020,
      "mo": "Mar",
      "cost": 253.01,
      "orders": 9,
      "avecost": 28.11222222,
      "pandemic": true
    },
    {
      "yr": 2020,
      "mo": "Apr",
      "cost": 61.06,
      "orders": 4,
      "avecost": 15.265,
      "pandemic": true
    },
    {
      "yr": 2020,
      "mo": "May",
      "cost": 188.13,
      "orders": 6,
      "avecost": 31.355,
      "pandemic": true
    },
    {
      "yr": 2020,
      "mo": "Jun",
      "cost": 230.95,
      "orders": 7,
      "avecost": 32.99285714,
      "pandemic": true
    },
    {
      "yr": 2020,
      "mo": "Jul",
      "cost": 571.77,
      "orders": 7,
      "avecost": 81.68142857,
      "pandemic": true
    },
    {
      "yr": 2020,
      "mo": "Aug",
      "cost": 230.16,
      "orders": 5,
      "avecost": 46.032,
      "pandemic": true
    },
    {
      "yr": 2020,
      "mo": "Sep",
      "cost": 351.03,
      "orders": 10,
      "avecost": 35.103,
      "pandemic": true
    },
    {
      "yr": 2020,
      "mo": "Oct",
      "cost": 262.14,
      "orders": 9,
      "avecost": 29.12666667,
      "pandemic": true
    },
    {
      "yr": 2020,
      "mo": "Nov",
      "cost": 269.72,
      "orders": 6,
      "avecost": 44.95333333,
      "pandemic": true
    },
    {
      "yr": 2020,
      "mo": "Dec",
      "cost": 325.83,
      "orders": 7,
      "avecost": 46.54714286,
      "pandemic": true
    }
  ]
};

//creating index for array
var index = 0;
var rat = deliveries.shipments[index];


var yr = document.getElementById('yr');
var mo = document.getElementById('mo');
var cost = document.getElementById('cost');
var orders = document.getElementById('orders');
var avecost = document.getElementById('avecost');

var previous = document.getElementById('previous');
var next = document.getElementById('next');

displayItem(rat);

previous.addEventListener('click', function() {
    displayItem(deliveries.shipments[--index]);
});

next.addEventListener('click', function() {
    displayItem(deliveries.shipments[++index]);
});

function displayItem(rat) {
    mo.innerText = rat.mo;
    yr.innerText = rat.yr;
    orders.innerText = rat.orders;
    previous.disabled = index <= 0;
    next.disabled = index >= deliveries.shipments.length -1;
}
function draw() {
  background(220);
  noStroke();
  ellipseMode(CENTER);
  if (deliveries.shipments[index].pandemic === false) {
    fill('white');
  } else {
    fill('orange');
  };
  ellipse(width / 2, height / 2, deliveries.shipments[index].orders*30);
}