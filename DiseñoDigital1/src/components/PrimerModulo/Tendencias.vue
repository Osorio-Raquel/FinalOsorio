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
      <h2 class="animated-subtitle" v-if="showSubtitle">PALABRA : TENDENCIA</h2>

      <!-- Imagen -->
      <img
        v-if="showImage"
        src="https://i.pinimg.com/736x/2c/67/e8/2c67e890501f77f915dfff4b4130fa59.jpg"
        alt="Tendencia"
        class="animated-image"
      />

      <!-- Descripción -->
      <p class="description">
        Bueno, una tendencia es como algo que se empieza a ver mucho, en todos lados, no? O sea, cuando muchas personas empiezan a usar un estilo o una forma de diseñar porque les parece más útil o más bonito. y entonces otras marcas o diseñadores también lo copian porque ven que funciona.
        <br /><br />
        Por ejemplo en el diseño digital, una tendencia re fuerte ahora es el modo oscuro. antes todas las apps eran super brillantes, con fondo blanco, pero a mucha gente eso le molestaba los ojos. entonces empezaron a salir versiones en modo oscuro, tipo Instagram, TikTok o Spotify. ahora ya casi todas lo tienen, porque es más cómodo para ver de noche. eso es seguir una tendencia que mejora la experiencia del usuario.
        <br /><br />
        También está todo el tema de la realidad aumentada, como la app de IKEA, donde puedes ver cómo quedaría un sillón en tu sala usando la cámara del cel. o lo de Google Translate, que escaneás un cartel en otro idioma y lo ves traducido en la pantalla, como si ya estuviera ahí, eso es una tendencia tecnológica que se volvió parte del diseño UX UI.
        <br /><br />
        Pero ojo, no todas las tendencias duran. algunas aparecen y después ya nadie las usa, como el estilo ese de ilustraciones raras tipo “Corporate Memphis”, que estaba por todos lados y ahora ya nadie le da bola. por eso hay que ver bien si vale la pena usar una tendencia o si solo es moda pasajera. Mas si se fea y sin alma.
        <br /><br />
        al final, una tendencia no es solo algo estético, también puede cambiar cómo usamos la tecnología o cómo nos comunicamos con ella.
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
  router.push('/comunicacion-visual');  // Ruta anterior
}

function irAdelante() {
  router.push('/actualidad'); // Cambia esta ruta por la siguiente palabra real
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
