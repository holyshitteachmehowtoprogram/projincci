let trees = [];

function setup() {
  createCanvas(800, 800);
  noLoop();

  generateForest();
}

function draw() {

  background(244, 241, 232);

  drawPaperTexture();

  drawGround();

  for (let tree of trees) {
    tree.displayShadow();
  }

  for (let tree of trees) {
    tree.display();
  }

  drawSignalTower(width / 2, height / 2);
}

function generateForest() {

  for (let x = 40; x < width - 40; x += 18) {

    for (let y = 40; y < height - 40; y += 18) {

      let n = noise(
        x * 0.005,
        y * 0.005
      );

      if (n > 0.45) {

        trees.push(
          new MechanicalTree(
            x + random(-8, 8),
            y + random(-8, 8),
            random(0.7, 1.4)
          )
        );

      }

    }

  }

}

class MechanicalTree {

  constructor(x, y, s) {

    this.x = x;
    this.y = y;
    this.s = s;

    this.h = random(20, 60) * s;

    this.angle =
      random(-0.12, 0.12);

  }

  displayShadow() {

    push();

    stroke(60, 120, 120, 25);

    strokeWeight(2 * this.s);

    line(
      this.x,
      this.y,
      this.x + 40,
      this.y + 20
    );

    pop();

  }

  display() {

    push();

    translate(this.x, this.y);

    rotate(this.angle);

    stroke(90, 166, 167);

    strokeWeight(2 * this.s);

    line(
      0,
      0,
      0,
      -this.h
    );

    line(
      0,
      -this.h * 0.7,
      -12 * this.s,
      -this.h * 0.9
    );

    line(
      0,
      -this.h * 0.5,
      10 * this.s,
      -this.h * 0.8
    );

    noStroke();

    fill(90, 166, 167);

    circle(
      0,
      -this.h,
      8 * this.s
    );

    circle(
      -12 * this.s,
      -this.h * 0.9,
      6 * this.s
    );

    circle(
      10 * this.s,
      -this.h * 0.8,
      6 * this.s
    );

    pop();

  }

}

function drawGround() {

  noStroke();

  fill(235, 232, 220);

  ellipse(
    width / 2,
    height / 2 + 80,
    650,
    450
  );

}

function drawSignalTower(x, y) {

  push();

  translate(x, y);

  stroke(255, 90, 90);

  strokeWeight(3);

  line(0, 0, 0, -120);

  line(0, -120, -30, -70);

  line(0, -120, 30, -70);

  line(-30, -70, 30, -70);

  line(-20, -40, 20, -40);

  noStroke();

  fill(255, 90, 90);

  circle(0, -130, 14);

  fill(255, 120, 120, 80);

  circle(0, -130, 35);

  pop();

}

function drawPaperTexture() {

  strokeWeight(1);

  for (let i = 0; i < 30000; i++) {

    stroke(
      random(180, 230),
      random(180, 230),
      random(180, 230),
      8
    );

    point(
      random(width),
      random(height)
    );

  }

}