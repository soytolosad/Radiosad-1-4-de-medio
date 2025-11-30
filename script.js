// ===============================
// RICHARD HAPPY – BRAIN
// ===============================

// Mensajes para el HOME
const mensajesInicioHome = [
  "Hola. Soy Richard Happy, reportero virtual no remunerado. Si algo sale mal, probablemente fui yo.",
  "Estoy aquí para invitarte a consumir nuestro contenido, algo así como payaso de corrientazo",
  "Tranquilo, este sitio es 1/4 de medio pero 4/4 de sentimientos encontrados.",
  "Bienvenido a Radiosad. Nadie aquí sabe exactamente qué está haciendo, pero se ve cool.",
  "Antes de continuar, pon una rola bien under que ayude a ambientar este momento.",
  "Ojalá suba el salario mínimo, así mi creador de pronto decide pagarme alguito",
  "Montemos la del universitario",
  "Me faltan la mitad de mis piernitas :("
];

// Mensajes para el MANIFIESTO
const mensajesInicioManifiesto = [
  "Este es el manifiesto. Yo solo vine a vigilar que no te vayas antes del final.",
  "Intenté escapar del algoritmo. Fallé. Ahora trabajo aquí a tiempo completo.",
  "Si has llegado hasta el manifiesto, ya hiciste más que el 90% del internet.",
  "Si me pagaran, diría algo importante",
  "Mero discurso, desde el cora",
  "Mucho texto"
];

// Mensajes cuando haces click en Richard
const mensajesClick = [
  "No sé cómo llegaste aquí, pero ya quédate.",
  "POV: entras a una página web random y no entiendes nada",
  "Esto era un podcast al inicio, ahora no sabemos qué es. Un error, creo.",
  "Si lees reseñas en pleno 2025, ya ganaste.",
  "Mi contrato dice que debo recomendar este contenido. No lo he leído.",
  "Bienvenido al rincón donde ser diferente aún no es un crimen… solo un mal negocio.",
  "Si esto fuera un medio serio, yo no existiría.",
  "Ojo se queda sin clic derecho mijo (o mija)"
];

document.addEventListener("DOMContentLoaded", () => {
  const richard = document.getElementById("richard");
  const bubble = document.getElementById("richard-bubble");

  // Si por alguna razón esta página no tiene a Richard, no hacemos nada
  if (!richard || !bubble) return;

  const esManifiesto = document.body.classList.contains("manifiesto-page");

  // Elegimos el set de mensajes según la página
  const mensajesInicio = esManifiesto ? mensajesInicioManifiesto : mensajesInicioHome;

  // Mensaje automático al inicio (uno solo)
  setTimeout(() => {
    const random = Math.floor(Math.random() * mensajesInicio.length);
    bubble.textContent = mensajesInicio[random];
    bubble.style.display = "block";

    // Se esconde después de unos segundos
    setTimeout(() => {
      bubble.style.display = "none";
    }, 7000);
  }, 2500);

  // Mensajes cíclicos cuando clickeas a Richard
  let indiceClick = 0;

  richard.addEventListener("click", () => {
    // Si está visible, lo escondemos
    if (bubble.style.display === "block") {
      bubble.style.display = "none";
      return;
    }

    // Si está oculto, mostramos el siguiente mensaje
    bubble.textContent = mensajesClick[indiceClick];
    bubble.style.display = "block";

    indiceClick = (indiceClick + 1) % mensajesClick.length;
  });
});

// === Linterna Reveal en el HERO ===
const hero = document.querySelector('.hero');

if (hero) {
  hero.addEventListener('mouseenter', () => {
    hero.classList.add('hero-reveal-active');
  });

  hero.addEventListener('mouseleave', () => {
    hero.classList.remove('hero-reveal-active');
    // opcional: centrar la linterna al salir
    hero.style.setProperty('--mx', '50%');
    hero.style.setProperty('--my', '50%');
  });

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    hero.style.setProperty('--mx', `${x}%`);
    hero.style.setProperty('--my', `${y}%`);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const esLoQueHay = document.querySelector('.es-lo-que-hay-img');
  if (!esLoQueHay) return;

  const triggerWiggle = () => {
    // Si ya está animándose, reiniciamos la animación
    esLoQueHay.classList.remove('rs-wiggle');
    void esLoQueHay.offsetWidth; // truco para forzar reflow
    esLoQueHay.classList.add('rs-wiggle');
  };

  // Hover en desktop
  esLoQueHay.addEventListener('mouseenter', triggerWiggle);

  // Tap / click en móvil o desktop
  esLoQueHay.addEventListener('click', triggerWiggle);

  // Al terminar la animación, quitamos la clase
  esLoQueHay.addEventListener('animationend', () => {
    esLoQueHay.classList.remove('rs-wiggle');
  });
});