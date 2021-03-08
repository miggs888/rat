// had trouble getting my JSON file to link, so in the mean time I am adding the object here
var deliveries = [
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
  ];

//creating index for array
let ratheadimg;
let ratbodyimg;
let cheeseimg;
let cheeses =[];
let sel;

function preload() {
  cheeseimg = loadImage('images/cheese.png');
  ratheadimg = loadImage('images/ratheadpng.png');
  ratbodyimg = loadImage('images/ratbody.png');
  ratbodycontrolimg = loadImage('images/ratbodycontrol.png');
  fontRegular = loadFont('images/dinbold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  imageMode(CENTER);

}
function drawJan(){
  background('#fd73ac')
  var index2019 = deliveries.findIndex(img => img.mo === 'Jan' && img.yr === 2019);
  console.log(index2019);
  var index2020 = deliveries.findIndex(img => img.mo === 'Jan' && img.yr === 2020);
  console.log(index2020);

  let controlXposition = width / 4;
  let controlYposition = height / 4;
  let variableXposition = (width / 4) * 3;
  let variableYposition = height / 4;
  let growth = 100;

  // 2019 RAT (CONTROL RAT)
  var ratnineteen = deliveries[index2019].orders;
  //drawing rat body with variable from array
  image(ratbodycontrolimg, controlXposition, controlYposition, ratnineteen*growth*1.4, ratnineteen*growth);
  // drawing rat head
  image(ratheadimg, controlXposition + (controlXposition / 3), controlYposition - (controlYposition / 4), 300, 250);
  
  // 2020 RAT (VARIABLE RAT)
  var rattwenty = deliveries[index2020].orders;
  //drawing rat body with variable from array
  image(ratbodyimg, variableXposition, variableYposition, rattwenty*growth*1.4, rattwenty*growth);
  // drawing rat head
  image(ratheadimg, variableXposition, variableYposition - (variableYposition / 4), 300, 250);
}

function drawFeb(){
  background('#fd73ac');
  var index2019 = deliveries.findIndex(img => img.mo === 'Feb' && img.yr === 2019);
  console.log(index2019);
  var index2020 = deliveries.findIndex(img => img.mo === 'Feb' && img.yr === 2020);
  console.log(index2020);

  let controlXposition = width / 4;
  let controlYposition = height / 4;
  let variableXposition = (width / 4) * 3;
  let variableYposition = height / 4;
  let growth = 100;

  // 2019 RAT (CONTROL RAT)
  var ratnineteen = deliveries[index2019].orders;
  //drawing rat body with variable from array
  image(ratbodycontrolimg, controlXposition, controlYposition, ratnineteen*growth*1.4, ratnineteen*growth);
  // drawing rat head
  image(ratheadimg, controlXposition + (controlXposition / 3), controlYposition - (controlYposition / 4), 300, 250);
  
  // 2020 RAT (VARIABLE RAT)
  var rattwenty = deliveries[index2020].orders;
  //drawing rat body with variable from array
  image(ratbodyimg, variableXposition, variableYposition, rattwenty*growth*1.4, rattwenty*growth);
  // drawing rat head
  image(ratheadimg, variableXposition, variableYposition - (variableYposition / 3), 300, 250);
}

function drawMar(){
  background('#fd73ac');
  var index2019 = deliveries.findIndex(img => img.mo === 'Mar' && img.yr === 2019);
  console.log(index2019);
  var index2020 = deliveries.findIndex(img => img.mo === 'Mar' && img.yr === 2020);
  console.log(index2020);

  let controlXposition = width / 4;
  let controlYposition = height / 4;
  let variableXposition = (width / 4) * 3;
  let variableYposition = height / 4;
  let growth = 100;

  // 2019 RAT (CONTROL RAT)
  var ratnineteen = deliveries[index2019].orders;
  //drawing rat body with variable from array
  image(ratbodycontrolimg, controlXposition, controlYposition, ratnineteen*growth*1.4, ratnineteen*growth);
  // drawing rat head
  image(ratheadimg, controlXposition + (controlXposition / 3), controlYposition - (controlYposition / 4), 300, 250);
  
  // 2020 RAT (VARIABLE RAT)
  var rattwenty = deliveries[index2020].orders;
  //drawing rat body with variable from array
  image(ratbodyimg, variableXposition, variableYposition, rattwenty*growth*1.4, rattwenty*growth);
  // drawing rat head
  image(ratheadimg, variableXposition, variableYposition - (variableYposition / 3), 300, 250);
}

function drawApr(){
  background('#fd73ac');
  var index2019 = deliveries.findIndex(img => img.mo === 'Apr' && img.yr === 2019);
  console.log(index2019);
  var index2020 = deliveries.findIndex(img => img.mo === 'Apr' && img.yr === 2020);
  console.log(index2020);

  let controlXposition = width / 4;
  let controlYposition = height / 4;
  let variableXposition = (width / 4) * 3;
  let variableYposition = height / 4;
  let growth = 100;

  // 2019 RAT (CONTROL RAT)
  var ratnineteen = deliveries[index2019].orders;
  //drawing rat body with variable from array
  image(ratbodycontrolimg, controlXposition, controlYposition, ratnineteen*growth*1.4, ratnineteen*growth);
  // drawing rat head
  image(ratheadimg, controlXposition + (controlXposition / 3), controlYposition - (controlYposition / 4), 300, 250);
  
  // 2020 RAT (VARIABLE RAT)
  var rattwenty = deliveries[index2020].orders;
  //drawing rat body with variable from array
  image(ratbodyimg, variableXposition, variableYposition, rattwenty*growth*1.4, rattwenty*growth);
  // drawing rat head
  image(ratheadimg, variableXposition, variableYposition - (variableYposition / 3), 300, 250);
}

function drawMay(){
  background('#fd73ac');
  var index2019 = deliveries.findIndex(img => img.mo === 'May' && img.yr === 2019);
  console.log(index2019);
  var index2020 = deliveries.findIndex(img => img.mo === 'May' && img.yr === 2020);
  console.log(index2020);

  let controlXposition = width / 4;
  let controlYposition = height / 4;
  let variableXposition = (width / 4) * 3;
  let variableYposition = height / 4;
  let growth = 100;

  // 2019 RAT (CONTROL RAT)
  var ratnineteen = deliveries[index2019].orders;
  //drawing rat body with variable from array
  image(ratbodycontrolimg, controlXposition, controlYposition, ratnineteen*growth*1.4, ratnineteen*growth);
  // drawing rat head
  image(ratheadimg, controlXposition + (controlXposition / 3), controlYposition - (controlYposition / 4), 300, 250);
  
  // 2020 RAT (VARIABLE RAT)
  var rattwenty = deliveries[index2020].orders;
  //drawing rat body with variable from array
  image(ratbodyimg, variableXposition, variableYposition, rattwenty*growth*1.4, rattwenty*growth);
  // drawing rat head
  image(ratheadimg, variableXposition, variableYposition - (variableYposition / 3), 300, 250);
}

function drawJun(){
  background('#fd73ac');
  var index2019 = deliveries.findIndex(img => img.mo === 'Jun' && img.yr === 2019);
  console.log(index2019);
  var index2020 = deliveries.findIndex(img => img.mo === 'Jun' && img.yr === 2020);
  console.log(index2020);

  let controlXposition = width / 4;
  let controlYposition = height / 4;
  let variableXposition = (width / 4) * 3;
  let variableYposition = height / 4;
  let growth = 100;

  // 2019 RAT (CONTROL RAT)
  var ratnineteen = deliveries[index2019].orders;
  //drawing rat body with variable from array
  image(ratbodycontrolimg, controlXposition, controlYposition, ratnineteen*growth*1.4, ratnineteen*growth);
  // drawing rat head
  image(ratheadimg, controlXposition + (controlXposition / 5), controlYposition - (controlYposition / 4), 300, 250);
  
  // 2020 RAT (VARIABLE RAT)
  var rattwenty = deliveries[index2020].orders;
  //drawing rat body with variable from array
  image(ratbodyimg, variableXposition, variableYposition, rattwenty*growth*1.4, rattwenty*growth);
  // drawing rat head
  image(ratheadimg, variableXposition, variableYposition - (variableYposition / 3), 300, 250);
}

function drawJul(){
  background('#fd73ac');
  var index2019 = deliveries.findIndex(img => img.mo === 'Jul' && img.yr === 2019);
  console.log(index2019);
  var index2020 = deliveries.findIndex(img => img.mo === 'Jul' && img.yr === 2020);
  console.log(index2020);

  let controlXposition = width / 4;
  let controlYposition = height / 4;
  let variableXposition = (width / 4) * 3;
  let variableYposition = height / 4;
  let growth = 100;

  // 2019 RAT (CONTROL RAT)
  var ratnineteen = deliveries[index2019].orders;
  //drawing rat body with variable from array
  image(ratbodycontrolimg, controlXposition, controlYposition, ratnineteen*growth*1.4, ratnineteen*growth);
  // drawing rat head
  image(ratheadimg, controlXposition + (controlXposition / 3), controlYposition - (controlYposition / 4), 300, 250);
  
  // 2020 RAT (VARIABLE RAT)
  var rattwenty = deliveries[index2020].orders;
  //drawing rat body with variable from array
  image(ratbodyimg, variableXposition, variableYposition, rattwenty*growth*1.4, rattwenty*growth);
  // drawing rat head
  image(ratheadimg, variableXposition, variableYposition - (variableYposition / 3), 300, 250);
}

function drawAug(){
  background('#fd73ac');
  var index2019 = deliveries.findIndex(img => img.mo === 'Aug' && img.yr === 2019);
  console.log(index2019);
  var index2020 = deliveries.findIndex(img => img.mo === 'Aug' && img.yr === 2020);
  console.log(index2020);

  let controlXposition = width / 4;
  let controlYposition = height / 4;
  let variableXposition = (width / 4) * 3;
  let variableYposition = height / 4;
  let growth = 100;

  // 2019 RAT (CONTROL RAT)
  var ratnineteen = deliveries[index2019].orders;
  //drawing rat body with variable from array
  image(ratbodycontrolimg, controlXposition, controlYposition, ratnineteen*growth*1.4, ratnineteen*growth);
  // drawing rat head
  image(ratheadimg, controlXposition + (controlXposition / 3), controlYposition - (controlYposition / 4), 300, 250);
  
  // 2020 RAT (VARIABLE RAT)
  var rattwenty = deliveries[index2020].orders;
  //drawing rat body with variable from array
  image(ratbodyimg, variableXposition, variableYposition, rattwenty*growth*1.4, rattwenty*growth);
  // drawing rat head
  image(ratheadimg, variableXposition, variableYposition - (variableYposition / 3), 300, 250);
}

function drawSep(){
  background('#fd73ac');
  var index2019 = deliveries.findIndex(img => img.mo === 'Sep' && img.yr === 2019);
  console.log(index2019);
  var index2020 = deliveries.findIndex(img => img.mo === 'Sep' && img.yr === 2020);
  console.log(index2020);

  let controlXposition = width / 4;
  let controlYposition = height / 4;
  let variableXposition = (width / 4) * 3;
  let variableYposition = height / 4;
  let growth = 100;

  // 2019 RAT (CONTROL RAT)
  var ratnineteen = deliveries[index2019].orders;
  //drawing rat body with variable from array
  image(ratbodycontrolimg, controlXposition, controlYposition, ratnineteen*growth*1.4, ratnineteen*growth);
  // drawing rat head
  image(ratheadimg, controlXposition + (controlXposition / 3), controlYposition - (controlYposition / 4), 300, 250);
  
  // 2020 RAT (VARIABLE RAT)
  var rattwenty = deliveries[index2020].orders;
  //drawing rat body with variable from array
  image(ratbodyimg, variableXposition, variableYposition, rattwenty*growth*1.4, rattwenty*growth);
  // drawing rat head
  image(ratheadimg, variableXposition, variableYposition - (variableYposition / 3), 300, 250);
}

function drawOct(){
  background('#fd73ac');
  var index2019 = deliveries.findIndex(img => img.mo === 'Oct' && img.yr === 2019);
  console.log(index2019);
  var index2020 = deliveries.findIndex(img => img.mo === 'Oct' && img.yr === 2020);
  console.log(index2020);

  let controlXposition = width / 4;
  let controlYposition = height / 4;
  let variableXposition = (width / 4) * 3;
  let variableYposition = height / 4;
  let growth = 100;

  // 2019 RAT (CONTROL RAT)
  var ratnineteen = deliveries[index2019].orders;
  //drawing rat body with variable from array
  image(ratbodycontrolimg, controlXposition, controlYposition, ratnineteen*growth*1.4, ratnineteen*growth);
  // drawing rat head
  image(ratheadimg, controlXposition + (controlXposition / 5), controlYposition - (controlYposition / 4), 300, 250);
  
  // 2020 RAT (VARIABLE RAT)
  var rattwenty = deliveries[index2020].orders;
  //drawing rat body with variable from array
  image(ratbodyimg, variableXposition, variableYposition, rattwenty*growth*1.4, rattwenty*growth);
  // drawing rat head
  image(ratheadimg, variableXposition, variableYposition - (variableYposition / 3), 300, 250);
}

function drawNov(){
  background('#fd73ac');
  var index2019 = deliveries.findIndex(img => img.mo === 'Nov' && img.yr === 2019);
  console.log(index2019);
  var index2020 = deliveries.findIndex(img => img.mo === 'Nov' && img.yr === 2020);
  console.log(index2020);

  let controlXposition = width / 4;
  let controlYposition = height / 4;
  let variableXposition = (width / 4) * 3;
  let variableYposition = height / 4;
  let growth = 100;

  // 2019 RAT (CONTROL RAT)
  var ratnineteen = deliveries[index2019].orders;
  //drawing rat body with variable from array
  image(ratbodycontrolimg, controlXposition, controlYposition, ratnineteen*growth*1.4, ratnineteen*growth);
  // drawing rat head
  image(ratheadimg, controlXposition + (controlXposition / 8), controlYposition - (controlYposition / 5), 300, 250);
  
  // 2020 RAT (VARIABLE RAT)
  var rattwenty = deliveries[index2020].orders;
  //drawing rat body with variable from array
  image(ratbodyimg, variableXposition, variableYposition, rattwenty*growth, rattwenty*growth);
  // drawing rat head
  image(ratheadimg, variableXposition, variableYposition - (variableYposition / 3), 300, 250);
}

function drawDec(){
  background('#fd73ac');
  var index2019 = deliveries.findIndex(img => img.mo === 'Dec' && img.yr === 2019);
  console.log(index2019);
  var index2020 = deliveries.findIndex(img => img.mo === 'Dec' && img.yr === 2020);
  console.log(index2020);

  let controlXposition = width / 4;
  let controlYposition = height / 4;
  let variableXposition = (width / 4) * 3;
  let variableYposition = height / 4;
  let growth = 100;

  // 2019 RAT (CONTROL RAT)
  var ratnineteen = deliveries[index2019].orders;
  //drawing rat body with variable from array
  image(ratbodycontrolimg, controlXposition, controlYposition, ratnineteen*growth*1.4, ratnineteen*growth);
  // drawing rat head
  image(ratheadimg, controlXposition + (controlXposition / 5), controlYposition - (controlYposition / 4), 300, 250);

  // 2020 RAT (VARIABLE RAT)
  var rattwenty = deliveries[index2020].orders;
  //drawing rat body with variable from array
  image(ratbodyimg, variableXposition, variableYposition, rattwenty*growth*1.4, rattwenty*growth);
  // drawing rat head
  image(ratheadimg, variableXposition, variableYposition - (variableYposition / 3), 300, 250);
}
