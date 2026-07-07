function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {

  background(245, 242, 235);

  drawTexture();

  // 森林
  for (let i = 0; i < 160; i++) {

    let x = random(width);

    let y = random(height);

    let s = random(0.6, 1.4);

    drawTree(x, y, s);
  }

  // 中央留白
  fill(245, 242, 235);
  noStroke();

  ellipse(width / 2, height / 2, 180, 180);

  // 小屋
  drawHouse(width / 2, height / 2 + 10);
}

function drawTree(x, y, s) {

  push();

  translate(x, y);

  rotate(random(-0.1, 0.1));

  noStroke();

  fill(80, 160, 160);

  beginShape();

  vertex(0, -50 * s);

  vertex(25 * s, -20 * s);

  vertex(18 * s, 20 * s);

  vertex(8 * s, 50 * s);

  vertex(-8 * s, 50 * s);

  vertex(-18 * s, 20 * s);

  vertex(-25 * s, -20 * s);

  endShape(CLOSE);

  fill(60, 120, 120);

  rect(
    -3 * s,
    50 * s,
    6 * s,
    18 * s
  );

  pop();
}

function drawHouse(x, y) {

  push();

  translate(x, y);

  noStroke();

  // 阴影

  fill(50, 100, 100, 60);

  quad(
    20,
    20,
    120,
    60,
    100,
    80,
    0,
    40
  );

  // 房体

  fill(250, 245, 235);

  rect(-25, -5, 50, 40);

  // 门

  fill(210, 90, 80);

  rect(-5, 10, 10, 25);

  // 屋顶

  fill(215, 90, 80);

  beginShape();

  vertex(-35, -5);

  vertex(0, -35);

  vertex(40, -10);

  vertex(25, -5);

  endShape(CLOSE);

  pop();
}

function drawTexture() {

  strokeWeight(1);

  for (let i = 0; i < 25000; i++) {

    stroke(
      random(220, 245),
      random(220, 245),
      random(220, 245),
      12
    );

    point(
      random(width),
      random(height)
    );
  }
}