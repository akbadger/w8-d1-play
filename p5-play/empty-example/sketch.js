function setup() {
  createCanvas(1440, 700);
  noFill();
}

function draw() {
  background(204, 25, 67);
  var t = map(mouseX, mouseY, width, 80, 20);
  curveTightness(t);
  beginShape();
  curveVertex(10, 157);
  curveVertex(100, 26);
  curveVertex(83, 24);
  curveVertex(83, 61);
  curveVertex(300, 80);
  curveVertex(25, 65);
  curveVertex(25, 65);
   curveVertex(100, 26);
    curveVertex(100, 26);
    curveVertex(83, 24);
  curveVertex(83, 61);
  
  endShape();
}