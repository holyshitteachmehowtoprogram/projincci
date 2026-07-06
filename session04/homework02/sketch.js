let video;
let particles = [];
let hand;

function setup() {
  createCanvas(windowWidth, windowHeight);

  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight);
  video.hide();

  hand = new Hand();

  for (let i = 0; i < 1800; i++) {
  particles.push(new Particle());
}
}

function draw() {
  background(0, 25);

  imageMode(CENTER);

  let vw = video.elt.videoWidth;
  let vh = video.elt.videoHeight;

  let canvasRatio = width / height;
  let videoRatio = vw / vh;

  let drawW, drawH;

  if (canvasRatio > videoRatio) {
    drawW = width;
    drawH = width / videoRatio;
  } else {
    drawH = height;
    drawW = height * videoRatio;
  }

  push();
  translate(width / 2, height / 2);
  image(video, 0, 0, drawW, drawH);
  pop();

  hand.update();

  for (let p of particles) {
    p.applyHand(hand);
    p.update();
    p.show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}