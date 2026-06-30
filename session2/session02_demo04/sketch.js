let cities = [
    "New York",
    "London",
    "Paris",
    "Sydney",
    "Moscow",
    "Beijing",
    "Rio de Janeiro"
];


function setup() {
    createCanvas(800, 600);
   for(let i = 0; i < cities.length; i++) {
    let currentCity = cities[i];
    console.log(currentCity);
   }
}

function draw() {
    background(220);
}
