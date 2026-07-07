let circleX = 200;

function setup() {
  createCanvas(400, 400);

  background(0, 0, 250);
  circle(circleX, 300, 50);

  circleX = circleX + 100;
  circle(circleX, 300, 50);

  noLoop();
}