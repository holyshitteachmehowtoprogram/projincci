let circlesCount = 20;
let canvasWidth = 400;
let canvasHeight = 400;

let spacing = canvasHeight / circlesCount;
let offset = 10;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    noLoop();

    fill('green')
    noStroke();

    angleMode(DEGREES);
}

function draw() {
    background(220);

    for (let i = 0; i < circlesCount; i++) {
        for(let j = 0; j < circlesCount; j++) {
            push();
            translate(i * spacing + offset, j * spacing + offset);
            let rotaition = random([0, 90, 180, 270]);
            rotate(rotaition);

            triangle(
                10, 
                10, 

                -10, 
                -10, 

                -10, 
                10,
                );
                pop();
        }
    }
}