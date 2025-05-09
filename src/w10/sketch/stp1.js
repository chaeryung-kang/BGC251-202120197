function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background('black');
  fill('red');
  noStroke();
  circle(mouseX, mouseY, 20);
}
