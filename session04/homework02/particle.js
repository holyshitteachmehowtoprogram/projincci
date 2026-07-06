class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.size = random(4, 10);
  }

  applyHand(hand) {
    if (!hand.active) return;

    let target = createVector(hand.x, hand.y);

    let dir = p5.Vector.sub(target, this.pos);
    let d = dir.mag();

    // 🔥 强吸引核（核心改动）
    let force = map(d, 0, 400, 8, 0);
    force = constrain(force, 0, 8);

    dir.normalize();
    dir.mult(force);

    this.acc.add(dir);

    // 🔥 手移动 → 流体拖拽感
    if (hand.velocity) {
        let flow = hand.velocity.copy();
        flow.mult(0.8);
        this.acc.add(flow);
    }
}
  update() {
    // 噪声场（蓝色流动感来源）
    let angle = noise(this.pos.x * 0.003, this.pos.y * 0.003) * TWO_PI * 2;
    let noiseForce = p5.Vector.fromAngle(angle);
    noiseForce.mult(0.3);

    this.acc.add(noiseForce);

    this.vel.add(this.acc);
    this.vel.limit(2.5);
    this.pos.add(this.vel);

    this.acc.mult(0);

    this.edges();
  }

  edges() {
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.y < 0) this.pos.y = height;
    if (this.pos.y > height) this.pos.y = 0;
  }

  show() {
  noStroke();

  let alpha = 180;

  fill(80, 170, 255, alpha);

  circle(this.pos.x, this.pos.y, this.size);
  fill(120, 200, 255, 120);
    circle(this.pos.x, this.pos.y, this.size);

    fill(80, 170, 255, 200);
    circle(this.pos.x, this.pos.y, this.size * 0.6);
    }
}