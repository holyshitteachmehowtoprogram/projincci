let circlesCount = 20;
let canvasWidth = 400;
let canvasHeight = 400;

let spacing = canvasHeight / circlesCount;
let offset = spacing / 2;

function setup() {
    createCanvas(400, 400);
   noLoop();
   }


function draw() {
    background(220);
    
    for(let i = 0; i < circlesCount; i++) {
        for(let j = 0; j < circlesCount; j++) {
            circle( i*spacing+offset, j*spacing+offset, 20);
        }
    }
}

