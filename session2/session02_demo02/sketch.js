let spacing = 160;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);

  // 中心一朵
  push();
  translate(width / 2, height / 2);
  drawFlower();
  pop();

  // 对角线平铺（x = y 方向）
  for (let i = -5; i < 10; i++) {
    push();
    translate(width / 2 + i * spacing, height / 2 + i * spacing);
    drawFlower();
    pop();
  }
}

function drawFlower() {
  noStroke();

  let petalCount = 4;
  let radius = 28;

  fill(180, 210, 255); // 浅蓝花瓣

  for (let i = 0; i < petalCount; i++) {
    let angle = TWO_PI / petalCount * i;

    let x = cos(angle) * radius;
    let y = sin(angle) * radius;

    circle(x, y, 24);
  }

  fill(255, 220, 120); // 花心
  circle(0, 0, 26);
}