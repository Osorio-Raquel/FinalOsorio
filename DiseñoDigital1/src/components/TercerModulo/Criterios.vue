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
      <h2 class="animated-subtitle" v-if="showSubtitle">PALABRA : CRITERIO</h2>

      <!-- Imagen -->
      <img
        v-if="showImage"
        src="https://i.pinimg.com/736x/1e/4e/d0/1e4ed0dfbdebd173424672d9d033612b.jpg"
        alt="Criterio"
        class="animated-image"
      />

      <!-- Descripción -->
      <p class="description">
        Las WCAG 2.0 tienen unos criterios que ayudan a que las páginas web sean fáciles de usar para todos, sin importar si tienes alguna discapacidad o el tipo de dispositivo que usas.
        Por ejemplo, hay que poner texto alternativo en las imágenes para que la gente que no puede verlas sepa qué hay, eso es el criterio 1.1. También hay que asegurarse que el contraste entre letras y fondo sea bueno (1.4), porque si no no se lee nada.
        <br /><br />
        Además, la web debe poder usarse solo con el teclado (2.1), porque no todos usan mouse, y hay que evitar cosas que puedan causar ataques, como animaciones muy rápidas (2.3).
        Es importante también que el sitio sea fácil de navegar (2.4) para que no te pierdas.
        <br /><br />
        En cuanto a que sea fácil de entender, el texto tiene que ser claro y las páginas funcionar como uno espera (3.1 y 3.2).
        También deben ayudar a corregir errores si metes mal tus datos (3.3). Por último, la web debe funcionar en varios dispositivos y navegadores sin problema (4.1).
        <br /><br />
        Si no sigues estos criterios, muchas personas no van a poder usar tu sitio, y a veces por culpa de errores simples como no poner comas o puntos donde toca, la info queda hecha un lío y nadie la entiende bien.
      </p>

      <!-- Botones de navegación -->
      <div class="nav-buttons">
        <button @click="irAAtras">← Anterior</button>
        <button @click="irAlInicio">Volver al inicio</button>
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
  router.push('/pautas');
}

function irAlInicio() {
  router.push('/');
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
  max-width: 180px;
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
