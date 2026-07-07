let state = "far";
let faceDistance = 0;
let particles = [];
let video;
let detector;
let faces = [];

function setup(){

  createCanvas(windowWidth,windowHeight);

  video=createCapture(VIDEO);
  video.size(640,480);
  video.hide();

 detector = ml5.faceMesh({
  maxFaces: 1,
  refineLandmarks: true
});

detector.ready.then(() => {

  console.log("FaceMesh Ready");

  detector.detectStart(video, getFaces);

});

  particleTexture = createGraphics(64,64);

  particleTexture.noStroke();

  for(let r=32;r>0;r--){

    let a = map(r,32,0,0,25);

    particleTexture.fill(180,220,255,a);

    particleTexture.circle(32,32,r*2);

  }

for(let i=0;i<300;i++){

  particles.push(new Particle());

}


}

function loaded(){

  console.log("FaceMesh Ready");
  console.log(faces.length);

}

function getFaces(results){

  faces = results;

}
function updateState(){

  if(faces.length==0){

  state="far";
  faceDistance=0;

  return;

}
  let face=faces[0];

  let left=face.keypoints[234];
  let right=face.keypoints[454];

  faceDistance=dist(
    left.x,left.y,
    right.x,right.y
  );

  if(faceDistance<170){

    state="far";

  }else if(faceDistance<300){

    state="normal";

  }else{

    state="close";

  }

}
function draw(){

  // close状态留下运动残影
  if(state === "close"){

    background(0,25);

  }else{

    background(0);

  }


  updateState();


  let vw = video.width;
  let vh = video.height;

  let scale = max(width/vw,height/vh);

  let sw = vw * scale;
  let sh = vh * scale;


  // close时让摄像头也产生轻微拖影
  if(state === "close"){

    tint(255,120);

  }else{

    tint(255);

  }


  image(
    video,
    (width-sw)/2,
    (height-sh)/2,
    sw,
    sh
  );


  noTint();


  blendMode(ADD);


  for(let p of particles){

    p.update(state);
    p.draw();

  }


  blendMode(BLEND);


  fill(255);
  textSize(20);

  text(state,20,40);
  text(nf(faceDistance,1,0),20,70);
  text("faces: " + faces.length,20,100);

}

function windowResized(){

resizeCanvas(windowWidth,windowHeight);

}