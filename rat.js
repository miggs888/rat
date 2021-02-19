function setup() {
  createCanvas(800, 800);
  color('#fd73ac');

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


var yr = document.getElementById('yr');// order year
var mo = document.getElementById('mo'); // order month
var cost = document.getElementById('cost');// month total cost for orders
var orders = document.getElementById('orders');// number of orders
var avecost = document.getElementById('avecost');// average cost of orders (orders / number of orders)
var previous = document.getElementById('previous');// prevoious button
var next = document.getElementById('next');// next button

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

var offset = 100;
var strum = 1.5;

function draw() {
  background('#fd73ac');
  noStroke();
  ellipseMode(RADIUS);
  stroke('black')
  if (deliveries.shipments[index].pandemic === false) {
    fill('grey');
  } else {
    fill('orange');
  };

  //setting variable of circle width based on number of orders
  let orders =  deliveries.shipments[index].orders*40;

  //drawing rat body with variable from array
  ellipse(width / 2, (height / 2) + 30, orders);

  // drawing rat head
  fill('grey');
  stroke('black');
  let hx = constrain(mouseX, (width / 2) - (orders / 2) - 2, (width / 2) + (orders / 2) + 2);
  let hy = constrain(mouseY, (height / 2) - (orders / 2) - 5, (height / 2) + (orders / 2) + 5);
  ellipse(hx, hy, deliveries.shipments[index].orders*20);
  // drawing rat ears
  ellipse(hx - 40, hy - 40, 30); // outside left
  ellipse(hx + 40, hy - 40, 30); // outside right
  strokeWeight(3.5);
  fill('pink');
  ellipse(hx - 35, hy - 32, 20); // inside left
  ellipse(hx + 35, hy - 32, 20); // inside right

  // drawing rat eyes
  fill('black');
  ellipse(hx - 12, hy, 8); // inside left
  ellipse(hx + 12, hy, 8); // inside right
  //
  fill('white');
  noStroke();
  ellipse(hx - 14, hy - 3, 1); // inside left
  ellipse(hx + 14, hy - 3, 1); // inside right
  // 
  ellipse(hx - 12, hy + 5, 4); // inside left
  ellipse(hx + 12, hy + 5, 4); // inside right

  //drawing rat feet


  // drawing tail of rat
  noFill();
  stroke('pink');
  strokeWeight(3);
    beginShape();
        curveVertex(width / 2, (height / 2 + 30) - orders);
        curveVertex(width / 2, (height / 2 + 30) - orders);
        curveVertex(random ((width / 2) - 80, (width / 2) + 10), random(60, 80));
        curveVertex(width / 2,20);
        curveVertex(width / 2,20);
    endShape();
    noStroke();

}