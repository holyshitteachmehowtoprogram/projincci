let particles = [];

function setup() {

    createCanvas(windowWidth, windowHeight);

    background(247,251,255);

}

function draw() {


    noStroke();

    fill(247,251,255,10);

    rect(0,0,width,height);

    

    for(let i = particles.length-1; i>=0; i--){

        particles[i].update();
        particles[i].display();

        if (
            particles.length < 4500 &&
            particles[i].age > particles[i].reproduceCooldown &&
            random() < 0.015
        ) {

            particles.push(
                new Particle(
                    particles[i].x + randomGaussian() * 8,
                    particles[i].y + randomGaussian() * 8
                )
            );

            particles[i].age = 0;
}

        if(particles[i].dead()){

            particles.splice(i,1);

        }

    }

}


function mouseMoved(){

    let speed = dist(mouseX,mouseY,pmouseX,pmouseY);

    spawnSpray(
    mouseX,
    mouseY,
    speed
    );

}

function mouseDragged(){

   let speed = dist(mouseX,mouseY,pmouseX,pmouseY);

    spawnSpray(
    mouseX,
    mouseY,
    speed
    );

}

function spawnSpray(x,y,speed){{

  

    let amount = floor(map(speed,0,30,20,140,true));

    for(let i=0;i<amount;i++){

        particles.push(

            new Particle(x,y)

        );

    }

}

function windowResized(){

    resizeCanvas(windowWidth,windowHeight);

}
}