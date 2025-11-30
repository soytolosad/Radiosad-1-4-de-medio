(function () {
  const canvas = document.getElementById('revistaNoiseCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height, dots = [];

  // Más puntos = más vida
  const DOT_COUNT = 450;
  const MAX_RADIUS = 45;

  function resize() {
    width  = canvas.width  = window.innerWidth * 2;
    height = canvas.height = window.innerHeight * 2;
    createDots();
  }

  function createDots() {
    dots = [];
    for (let i = 0; i < DOT_COUNT; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 10 + Math.random() * (MAX_RADIUS - 10),
        phase: Math.random() * Math.PI * 2,
        // 🔼 Más velocidad que antes
        speed: 0.08 + Math.random() * 0.12
      });
    }
  }

  function draw(time) {
    ctx.clearRect(0, 0, width, height);

    const t = time * 0.001;

    // Deriva global muy suave
    const globalOffsetX = Math.cos(t * 0.1) * 25;
    const globalOffsetY = Math.sin(t * 0.07) * 15;

    dots.forEach(dot => {
      // 🔼 Más amplitud de movimiento
      const offsetX = Math.cos(t * dot.speed + dot.phase) * 35;
      const offsetY = Math.sin(t * dot.speed * 0.9 + dot.phase) * 35;

      const cx = dot.x + offsetX + globalOffsetX;
      const cy = dot.y + offsetY + globalOffsetY;

      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, dot.r);
      grad.addColorStop(0, "rgba(255,255,255,0.18)");
      grad.addColorStop(0.5, "rgba(200,200,200,0.10)");
      grad.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, dot.r, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(draw);
})();