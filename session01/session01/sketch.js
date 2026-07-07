function setup() {
    createCanvas(800, 600);
    let answer = 42;
    let fav = 8;
    console.log(answer + fav);
    console.log(answer - fav);
    console.log(answer * fav);
    console.log(answer / fav);
    let fruit1 = "banana";
    let fruit2 = "apple";
    console.log(fruit1 + fruit2);

    console.log(`i dont like ${fruit1}s and also ${fruit2}s`);
    console.log('cat'[1]);
    console.log(answer.toString());
    let determine = 42 ==43;
    const name  = 'tenframespersecond';
    let huh;
   
    console.log(``)
    console.log(huh);
    console.log(name);

}

function draw() {
  background(15, 18, 30, 40);

  let t = frameCount * 0.01;

  for (let x = 0; x < width; x += 60) {
    for (let y = 0; y < height; y += 60) {

      let n = noise(x * 0.01, y * 0.01, t);
      let size = map(n, 0, 1, 10, 60);

      push();
      translate(x + 30, y + 30);

      let angle = t + n * TWO_PI;
      rotate(angle);

      if (n > 0.5) {
        fill(120 + n * 80, 180, 255, 180);
        rectMode(CENTER);
        rect(0, 0, size, size);
      } else {
        fill(255, 120 + n * 100, 160, 180);
        ellipse(0, 0, size, size);
      }

      pop();
    }
  }
}