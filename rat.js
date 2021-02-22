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
let ratheadimg;
let ratbodyimg;
let cheeseimg;
let cheeses =[];
let sel;

var yr = document.getElementById('yr');// order year
var mo = document.getElementById('mo'); // order month
var cost = document.getElementById('cost');// month total cost for orders
var orders = document.getElementById('orders');// number of orders
var avecost = document.getElementById('avecost');// average cost of orders (orders / number of orders)
var previous = document.getElementById('previous');// prevoious button
var next = document.getElementById('next');// next button

function preload() {
  cheeseimg = loadImage('images/cheese.png', console.log('cheese'));
  ratheadimg = loadImage('images/ratheadpng.png', console.log('head'));
  ratbodyimg = loadImage('images/ratbody.png', console.log('body'));
  fontRegular = loadFont('images/dinbold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  color('#fd73ac');

  //creating dropdown month display
  sel = createSelect();
  sel.position(width / 5 , 300);
  sel.option('January');
  sel.option('February');
  sel.option('March');
  sel.option('April');
  sel.option('May');
  sel.option('June');
  sel.option('July');
  sel.option('August');
  sel.option('September');
  sel.option('October');
  sel.option('November');
  sel.option('December');
}

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
  imageMode(CENTER);
  background('#fd73ac');

    // adding cheese to empty cheese display array
    for (let i = 0; i < deliveries.shipments[index].orders; i++) {
      let x = (width / 3) + 90 * i;
      cheeses[i] = new Cheese(x, 80, 120, 80);
  }
    //drawing pieces of cheese depending on number of orders
    for (let i = 0; i < deliveries.shipments[index].orders; i++) {
      // cheeses[i].move();
      cheeses[i].show()
    }
 
  //setting variable of circle width based on number of orders
  let orders =  deliveries.shipments[index].orders*30;

   // DRAW 2019 RAT
  //drawing rat body with variable from array
  image(ratbodyimg, width / 4, height / 3, orders*5, orders*4);
  // drawing rat head
  let hxl = constrain(mouseX, (width / 4) - (orders / 2) - 2, (width / 4) + (orders / 2) + 2);
  let hyl = constrain(mouseY, (height / 3.5) - (orders / 2) - 5, (height / 4) + (orders / 2) + 5);
  image(ratheadimg, hxl, hyl, 500, 425);
  textFont(fontRegular);
  textSize(100);
  fill('#299481');
  text('2019', width / 4 - 30, 250);

   // DRAW 2020 RAT
  //drawing rat body with variable from array
  image(ratbodyimg, (width / 4) * 3 - 30, height / 3, orders*5, orders*4);
  // drawing rat head
  let hxr = constrain(mouseX, (width / 4)*3 - (orders / 2) - 2, (width / 4)*3 + (orders / 2) + 2);
  let hyr = constrain(mouseY, (height / 3.5) - (orders / 2) - 5, (height / 4) + (orders / 2) + 5);
  image(ratheadimg, hxr, hyr, 500, 425);
  text('2020', (width / 4)*3, 250);

}

function mySelectEvent() {
  let item = sel.value();
  text('It is a ' + item + '!', 50, 500);
  console.log(sel.value);
}
// class parameters for drawing cheese
class Cheese {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  show() {
    image(cheeseimg, this.x, this.y, this.w, this.h);
  }
} 