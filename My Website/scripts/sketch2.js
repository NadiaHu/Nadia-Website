let x = 0;

function setup() {
    createCanvas(600, 400);
    background(50);
}

function draw() {
    background(50, 50, 50, 50);
    fill(255, 150, 0);
    ellipse(x, height / 2, 50, 50);
    x += 2;
    if (x > width) {
        x = 0;
    }
}
