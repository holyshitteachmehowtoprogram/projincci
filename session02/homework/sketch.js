function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(245, 242, 235);

  translate(width / 2, height - 100);

  drawPoplarTree();
}

function drawPoplarTree() {

  // ===== 树干 =====

  stroke(90, 70, 55);
  strokeWeight(18);

  line(0, 0, 0, -380);

  // 树皮纹理

  stroke(50, 40, 30, 60);
  strokeWeight(1);

  for(let i = 0; i < 120; i++) {

    let y = random(-380, 0);

    line(
      random(-6, 6),
      y,
      random(-8, 8),
      y + random(-8, 8)
    );
  }

  // ===== 一级枝干 =====

  drawBranch(0, -80, -35, 110);
  drawBranch(0, -140, 35, 120);
  drawBranch(0, -200, -25, 90);
  drawBranch(0, -260, 28, 80);

  // ===== 树冠 =====

  noStroke();

  for(let i = 0; i < 3500; i++) {

    let angle = random(TWO_PI);

    let r = randomGaussian(0, 45);

    let x = cos(angle) * r;

    let y = sin(angle) * r * 2.8;

    fill(
      random(90,130),
      random(140,180),
      random(90,120),
      40
    );

    circle(
      x,
      y - 420,
      random(4,10)
    );
  }

  // 高光叶片

  for(let i = 0; i < 1200; i++) {

    let angle = random(TWO_PI);

    let r = randomGaussian(0,35);

    let x = cos(angle) * r;

    let y = sin(angle) * r * 2.5;

    fill(
      180,
      220,
      160,
      25
    );

    circle(
      x,
      y - 420,
      random(2,6)
    );
  }
}

function drawBranch(x,y,angle,len){

  push();

  translate(x,y);

  rotate(radians(angle));

  stroke(90,70,55);
  strokeWeight(5);

  line(0,0,0,-len);

  line(
    0,
    -len * 0.5,
    -10,
    -len * 0.8
  );

  line(
    0,
    -len * 0.6,
    10,
    -len * 0.9
  );

  pop();
}