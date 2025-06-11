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
      <h2 class="animated-subtitle" v-if="showSubtitle">PALABRA : RED</h2>

      <!-- Imagen -->
      <img
        v-if="showImage"
        src="https://i.pinimg.com/736x/2d/fe/0d/2dfe0d642d89297a4c4ca7e456c6eaea.jpg"
        alt="Red"
        class="animated-image"
      />

      <!-- Descripción -->
      <p class="description">
        Internet es una red que conecta millones de compus por todo el mundo, usa TCP/IP para funcionar y cambio todo en los 90’s.
        <br /><br />
        Nació gracias a varios científicos como Kleinrock, Licklider y Cerf.
        <br /><br />
        Funciona con cables, hasta debajo del mar, que llevan la info en luz.
        <br /><br />
        Los ISP te dan internet, la IANA y la ICANN se encargan de las direcciones y nombres, como google.com.
        <br /><br />
        Cada compu tiene una IP, que puede ser IPv4 o IPv6.
        <br /><br />
        Los servidores guardan las páginas y los clientes somos nosotros que pedimos la info.
        <br /><br />
        El contenido puede ser estático o dinámico.
        <br /><br />
        Internet no tiene dueño, pero hay reglas para que todo funcione y nadie robe nombres.
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
  router.push('/actualidad'); // Cambia a la ruta anterior real
}

function irAdelante() {
  router.push('/negocio'); // Cambia a la ruta siguiente real
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
