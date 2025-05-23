
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const maxParticles = 100;

// Resize the canvas when the window resizes
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Function to generate random numbers within a range
function rand(min, max) {
  return Math.random() * (max - min) + min;
}

// Particle constructor
function Particle(x, y) {
  this.x = x || rand(0, canvas.width);
  this.y = y || rand(0, canvas.height);
  this.vx = rand(-1, 1);
  this.vy = rand(-1, 1);
  this.size = rand(2, 4);
}

// Draw a particle
Particle.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fillStyle = '#29903b'; // Color for the particles
  ctx.fill();
};

// Update particle position and handle canvas boundaries
Particle.prototype.update = function () {
  this.x += this.vx;
  this.y += this.vy;

  // Reverse direction if particle hits a boundary
  if (this.x > canvas.width || this.x < 0) this.vx *= -1;
  if (this.y > canvas.height || this.y < 0) this.vy *= -1;
};

// Create particles
for (let i = 0; i < maxParticles; i++) {
  particles.push(new Particle());
}

// Draw connections between nearby particles
function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 120) { // Maximum distance for connection
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(41, 144, 59, ${1 - distance / 120})`; // Connection color with fading effect
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  drawConnections();

  requestAnimationFrame(animate);
}

animate();


