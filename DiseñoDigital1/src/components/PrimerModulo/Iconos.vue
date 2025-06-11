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
      <h2 class="animated-subtitle" v-if="showSubtitle">PALABRA : ÍCONO</h2>

      <!-- Imagen -->
      <img
        v-if="showImage"
        src="https://i.pinimg.com/736x/83/8b/2a/838b2a18ba0222947bff9addaae26410.jpg"
        alt="Ícono"
        class="animated-image"
      />

      <!-- Descripción -->
      <p class="description">
  Un ícono es como ese dibujito pequeño que ves en la pantalla y que te ayuda a entender qué hace algo sin que tengas que leer un montón. Pero diseñar un buen ícono no es tan fácil como parece. Tiene que ser clarito, simple y que se entienda al toque, porque si es muy complicado, nadie va a saber para qué sirve.
  <br /><br />
  Para hacer un ícono bueno, primero tenés que pensar en lo esencial, sacar todo lo que sobra y dejar solo lo más importante. No puede tener detalles que distraigan ni colores que confundan. Además, tiene que funcionar bien en distintos tamaños, porque un ícono puede ser chiquito en la pantalla o más grande en otro lugar.
  <br /><br />
  Otro punto importante es que el ícono debe ser reconocible, o sea, que cuando alguien lo vea, lo relacione rápido con la función o el objeto que representa. Por ejemplo, un ícono de lupa casi siempre significa “buscar” y eso lo entiende cualquiera.
  <br /><br />
  Por último, un buen ícono tiene que combinar con el estilo general de la interfaz para que todo quede armonioso y no parezca que está fuera de lugar. Así, usar la app o el sistema es más fácil y más agradable.
  <br /><br />
  <strong>Ejemplo:</strong> Cuando usas YouTube, el ícono de la lupa en la parte superior derecha te permite buscar videos rápidamente. Ese ícono es simple, reconocible y siempre está en el mismo lugar para que no tengas que pensar dónde está. Así, solo haces click y listo, encontrás lo que querés ver.
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
  router.push('/metaforas');
}

function irAdelante() {
  router.push('/pixel'); // <- Reemplaza "/proximo" con la ruta real si ya tienes la siguiente sección
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
