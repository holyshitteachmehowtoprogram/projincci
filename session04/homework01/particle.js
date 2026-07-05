class Particle {

    constructor(x, y) {

        this.x = x;
        this.y = y;

        this.x += randomGaussian() * 10;
        this.y += randomGaussian() * 10;

        this.vx = randomGaussian() * 0.12;
        this.vy = randomGaussian() * 0.12;

        this.life = 255;

        this.baseSize = random(0.8, 2.0);
        this.phase = random(TWO_PI);

        this.age = 0;
    }

    update() {

        let scale = 0.0018;

        let angle = noise(
            this.x * scale,
            this.y * scale,
            frameCount * 0.0015
        ) * TWO_PI * 6;

        this.vx += cos(angle) * 0.03;
        this.vy += sin(angle) * 0.03;

       
        //this.applyAttraction(particles);

        
        let d = dist(this.x, this.y, mouseX, mouseY);

        if (mouseIsPressed && d < 250) {

            let force = map(d, 0, 250, 0.8, 0);
            force *= force;

            let a = atan2(mouseY - this.y, mouseX - this.x);

            this.vx += cos(a) * force;
            this.vy += sin(a) * force;
        }

        this.vx *= 0.985;
        this.vy *= 0.985;

        
        this.x += this.vx;
        this.y += this.vy;

        
        this.life -= 0.5;

        this.age++;

        this.size =
            this.baseSize +
            sin(frameCount * 0.04 + this.phase) * 0.35;
    }

    display() {

        let t = map(this.life, 255, 0, 1, 0);

        let c = lerpColor(
            color(8, 20, 60),
            color(0, 150, 190),
            t
        );

        for (let i = 0; i < 2; i++) {

            stroke(
                red(c),
                green(c),
                blue(c),
                this.life * random(0.08, 0.22)
            );

            strokeWeight(random(0.3, 1));

            point(
                this.x + randomGaussian() * 0.8,
                this.y + randomGaussian() * 0.8
            );
        }
    }

    applyAttraction(particles) {

        
        for (let i = 0; i < particles.length; i++) {

            let other = particles[i];

            if (other === this) continue;

            let dx = other.x - this.x;
            let dy = other.y - this.y;

            let d2 = dx * dx + dy * dy;

            if (d2 < 1600) { 

                let d = sqrt(d2);

                let force = (1 - d / 40) * 0.08;
                force *= force;

                let angle = atan2(dy, dx);

                this.vx += cos(angle) * force;
                this.vy += sin(angle) * force;
            }
        }
    }

    dead() {
        return this.life <= 0;
    }
}