let particleTexture;

class Particle {

  constructor() {

    this.reset();

  }

  reset() {

    this.x = random(width);
    this.y = random(height);

    this.vx = random(-0.2,0.2);
    this.vy = random(-0.2,0.2);

    this.size = random(12,30);

    this.alpha = random(40,120);

  }

  update(state){

  if(state === "far"){

    this.vx *= 0.95;
    this.vy *= 0.95;

  }


  if(state === "normal"){

    this.vx += random(-0.05,0.05);
    this.vy += random(-0.05,0.05);

  }


 if(state === "close"){

  this.vx += random(-0.8,0.8);
  this.vy += random(-0.8,0.8);


  if(random(1)<0.05){

    this.x += random(-40,40);
    this.y += random(-40,40);

  }


}


  this.x += this.vx;
  this.y += this.vy;


  if(this.x<0)this.x=width;
  if(this.x>width)this.x=0;

  if(this.y<0)this.y=height;
  if(this.y>height)this.y=0;
  if(state==="far"){
    this.alpha = max(this.alpha-2,30);
  }

  if(state==="normal"){
    this.alpha = min(this.alpha+1,100);
  }
  this.vx = constrain(this.vx,-5,5);
  this.vy = constrain(this.vy,-5,5);  
}
  draw(){

  noStroke();

  let alpha = this.alpha;

  tint(180,220,255,alpha);

  image(
    particleTexture,
    this.x-this.size/2,
    this.y-this.size/2,
    this.size,
    this.size
  );

  noTint();

}

}