class Hand {
  constructor() {
    this.active = false;
    this.x = 0;
    this.y = 0;
    this.prev = createVector();
    this.pos = createVector();
    this.velocity = createVector();

    this.hands = ml5.handpose(video, () => {
      console.log("hand model loaded");
    });

    this.hands.on("predict", (results) => {
      this.gotHands(results);
    });
  }

  gotHands(results) {
  if (results.length > 0) {
    let hand = results[0];
    let index = hand.landmarks[8];

    let x = index[0];
    let y = index[1];

    this.prev.set(this.x, this.y);

    // 🔥 平滑关键
    this.x = lerp(this.x, x, 0.4);
    this.y = lerp(this.y, y, 0.4);

    this.pos.set(this.x, this.y);

    this.velocity = p5.Vector.sub(this.pos, this.prev);

    this.active = true;
  } else {
    this.active = false;
  }
}

  update() {
    // 可以加平滑
  }
}