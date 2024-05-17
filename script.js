const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const raindrops = [];

class Raindrop {
    constructor(x, y, length, speed) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.speed = speed;
    }

    fall() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = Math.random() * -canvas.height;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.strokeStyle = '#00f';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}

function createRaindrops() {
    const numberOfRaindrops = 500;
    for (let i = 0; i < numberOfRaindrops; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const length = Math.random() * 20 + 10;
        const speed = Math.random() * 3 + 2;
        raindrops.push(new Raindrop(x, y, length, speed));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    raindrops.forEach(raindrop => {
        raindrop.fall();
        raindrop.draw();
    });
    requestAnimationFrame(animate);
}

createRaindrops();
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    raindrops.length = 0;
    createRaindrops();
});
