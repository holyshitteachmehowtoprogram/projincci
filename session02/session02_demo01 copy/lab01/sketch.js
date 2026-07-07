let circleX = 80;
let spacing = 40;

function setup() {
  createCanvas(1200, 400);
}

function draw() {
  background(0, 0, 220);


  circle(circleX, 300, 50);

  circleX = circleX + spacing;
  circle(circleX, 300, 50);

  spacing = spacing * 1.2;
  circleX = circleX + spacing;
  circle(circleX, 300, 50);

  spacing = spacing * 1.2;
  circleX = circleX + spacing;
  circle(circleX, 300, 50);

  spacing = spacing * 1.2;
  circleX = circleX + spacing;
  circle(circleX, 300, 50);

  noLoop();
}