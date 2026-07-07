function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(235, 240, 255);

  push();
  translate(width / 2, height / 2 + 70);
  drawDog();
  pop();
}

function drawDog() {
  noStroke();

  let fur = color(220, 175, 95);
  let dark = color(190, 145, 75);
  let ink = color(50, 40, 30);

  // ===== 身体 =====
  fill(fur);
  ellipse(0, 110, 240, 150);

  // 胸口（只提一点，不乱加）
  fill(dark);
  ellipse(0, 120, 140, 90);

  // ===== 头 =====
  fill(fur);
  ellipse(0, 0, 170, 150);

  // ===== 耳朵（贴头下垂）=====
  fill(dark);
  ellipse(-75, 10, 45, 95);
  ellipse(75, 10, 45, 95);

  // ===== 眼睛 =====
  fill(255);
  ellipse(-30, -10, 22, 22);
  ellipse(30, -10, 22, 22);

  fill(ink);
  ellipse(-30, -10, 10, 10);
  ellipse(30, -10, 10, 10);

  fill(255);
  ellipse(-28, -12, 3, 3);
  ellipse(32, -12, 3, 3);

  // ===== 鼻子 =====
  fill(ink);
  ellipse(0, 15, 16, 12);

  // ===== 嘴 =====
  noFill();
  stroke(ink);
  strokeWeight(2);
  arc(0, 28, 35, 22, 0, PI);
  noStroke();

  // ===== 腿（统一贴身体）=====
  fill(fur);

  drawLeg(-75, 160);
  drawLeg(-25, 160);
  drawLeg(25, 160);
  drawLeg(75, 160);

  // ===== 尾巴（固定）=====
  fill(dark);
  ellipse(125, 120, 85, 35);
}

function drawLeg(x, y) {
  push();
  translate(x, y);
  fill(220, 175, 95);
  rect(-10, 0, 20, 70, 10);
  pop();
}