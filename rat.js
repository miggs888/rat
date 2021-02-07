var data;
var ratColor = 100;

function preload() {
  data = loadJSON("deliveries.json");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background('white');
  if(data) {
    var deliveries = data.deliveries;
    fill(ratColor);
    for (var i = 0; i < deliveries.length; i++) {
      var avecost = deliveries[i].avecost // Average cost per order per month
      var orders = deliveries[i].orders // number of orders per month
      var cost = deliveries[i].orders // total cost of orders per month
      var yr = deliveries[i].yr // year
      var mo = deliveries[i].mo // month

      // defining rat postion variables
      var ratposition = {
        x: (i * 35) + windowWidth / 20, // determines rat x postiion
        y: (windowHeight - (orders / 2) - 100), // determines rat y position
        w: avecost * .5, // determines rat width
        h: (- orders * 18), // determines rat height
        r: 20, // rounded corners on rat body
      }

      // draws rat body 
      rect(ratposition.x, ratposition.y, ratposition.w, ratposition.h, ratposition.r);
      text(deliveries[i].mo, ratposition.x, ratposition.y + 30);
      text(deliveries[i].yr, ratposition.x, ratposition.y + 40);

      // draws rat head
      // ellipse(ratposition.x + 10, ratposition.y, 30, 40); // rat head shape
      // ellipse(ratposition.x + 5, ratposition.y - 5, 5, 5); // rat eye
      // ellipse(ratposition.x + 15, ratposition.y - 5, 5, 5) // rat eye

      
      
    }
  }
}
