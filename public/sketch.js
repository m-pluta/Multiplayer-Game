function setup() {
  createCanvas(800, 800);
  background(51);

var socket;
  socket = io.connect('http://localhost:3000');
}

function draw() {
  noStroke()
  ellipse(mouseX, mouseY, 50, 50);
}
