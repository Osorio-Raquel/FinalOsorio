<template>
  <div class="wrapper">
    <section class="container">
      <!-- Título animado "GLOSARIO VISUAL" -->
      <h1 class="animated-title">
        <span
          v-for="(letter, index) in glosarioLetters"
          :key="index"
          class="letter"
          :style="{ animationDelay: (index * 0.05) + 's' }"
        >
          {{ letter }}
        </span>
      </h1>

      <!-- Subtítulo -->
      <h2 class="animated-subtitle" v-if="showSubtitle">PALABRA : PÍXEL</h2>

      <!-- Imagen -->
      <img
        v-if="showImage"
        src="https://i.pinimg.com/736x/42/ce/72/42ce72f902304156cf2ee62fa0ddfbd3.jpg"
        alt="Píxel"
        class="animated-image"
      />

      <!-- Descripción -->
      <p class="description">
  Un píxel es la unidad más pequeña que compone una imagen digital. Básicamente, es un pequeño cuadrito de color que, junto con muchos otros, forma la imagen completa que ves en la pantalla de tu computadora, celular o cualquier dispositivo.
  <br /><br />
  Cuando acercamos mucho una imagen digital, podemos ver esos cuadritos individuales, que se llaman píxeles. La cantidad de píxeles que tiene una imagen determina su resolución, y mientras más píxeles tenga, más nítida y detallada será la imagen.
  <br /><br />
  El tamaño de un píxel no es fijo; depende de la resolución y del dispositivo donde se muestra. Además, cada píxel puede tener distintos colores, y la cantidad de colores que puede mostrar se llama profundidad de color. Cuantos más colores pueda representar, mejor se verá la imagen, con más matices y detalles.
  <br /><br />
  Por eso, en pantallas modernas los píxeles son muy pequeños y se organizan en una matriz para formar imágenes con gran calidad visual.
  <br /><br />
  El píxel es el “bloquecito” fundamental para que podamos ver imágenes digitales, y entender cómo funcionan nos ayuda a comprender por qué algunas fotos o videos se ven mejor que otros.
  <br /><br />
  <strong>Ejemplo de uso tecnológico:</strong> En las cámaras de los celulares, la cantidad de píxeles del sensor determina qué tan clara y detallada será la foto que tomás. Más píxeles significan imágenes más nítidas, que se pueden imprimir en tamaños grandes sin perder calidad.
  <br /><br />
  <strong>Ejemplo cultural:</strong> En los videojuegos clásicos, como los de Nintendo o Sega, las imágenes estaban hechas con píxeles grandes y visibles, lo que les daba ese estilo “pixel art” tan reconocible y querido por los fans hasta hoy. Esa estética pixelada se volvió parte de la cultura gamer y del arte digital retro.
</p>

      <!-- Botones de navegación -->
      <div class="nav-buttons">
        <button @click="irAAtras">← Anterior</button>
        <button @click="irAdelante">Siguiente →</button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const glosarioLetters = 'GLOSARIO - VISUAL'.split('');
const showSubtitle = ref(false);
const showImage = ref(false);

onMounted(() => {
  setTimeout(() => {
    showSubtitle.value = true;
  }, glosarioLetters.length * 50 + 200);

  setTimeout(() => {
    showImage.value = true;
  }, glosarioLetters.length * 50 + 200 + 1500);
});

function irAAtras() {
  router.push('/icono');
}

function irAdelante() {
  router.push('/comunicacion-visual'); // ← Reemplaza esto si ya tienes la ruta del siguiente término
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 120vh;
  box-sizing: border-box;
  padding: 5rem;
  margin: 0;
}

.container {
  font-family: 'Rubik', sans-serif;
  text-align: center;
  color: #6b3a44;
}

.animated-title {
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  user-select: none;
}

.letter {
  display: inline-block;
  opacity: 0;
  transform: translateY(50%);
  animation-name: fadeInUp;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.animated-subtitle {
  font-size: 2rem;
  font-weight: 700;
  color: #a4444c;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeInScale 0.8s forwards;
}

.animated-image {
  max-width: 200px;
  width: 100%;
  margin: 0 auto 2rem;
  opacity: 0;
  transform: scale(0.5);
  animation: fadeInScale 0.8s forwards;
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
  margin-left: 10%;
  margin-right: 10%;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInScale {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.nav-buttons {
  display: flex;
  justify-content: space-between;
  margin: 3rem 10%;
}

.nav-buttons button {
  background-color: #a4444c;
  color: #fff;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.nav-buttons button:hover {
  background-color: #87323c;
}
</style>
