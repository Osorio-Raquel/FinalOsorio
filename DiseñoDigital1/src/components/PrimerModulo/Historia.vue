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

      <!-- Segunda línea animada -->
      <h2 class="animated-subtitle" v-if="showSubtitle">PALABRA : INTERFAZ</h2>

      <!-- Imagen animada -->
      <img
        v-if="showImage"
        src="https://i.pinimg.com/736x/12/8a/37/128a37a2a867c016d20886169f128e4f.jpg"
        alt="Interfaz imagen"
        class="animated-image"
      />

      <!-- Texto descriptivo -->
      <p class="description">
  La interfaz es lo que te deja conectar con la compu sin volverte loco. Es todo lo que ves en la pantalla y usas para manejar el sistema: los iconos, las ventanas, los botones, el mouse, etc. Básicamente, sin interfaz no sabrías ni por dónde empezar, porque todo sería puro texto o comandos difíciles de entender.
  <br /><br />
  Lo bueno de una interfaz es que te ayuda a entender cómo funciona la compu sin que tengas que saber mucho. Tú solo haces click, arrastras cosas, abres ventanas y ya estás haciendo lo que necesitas. Si está bien diseñada, es como si la compu te hablara en un idioma que entiendes al toque.
  <br /><br />
  Una buena interfaz te ahorra tiempo, evita que te confundas y te deja hacer todo más rápido. Desde abrir un archivo hasta usar una app o entrar a internet. Todo eso que parece normal, en realidad está pensado para que tú no te frustres ni te pierdas entre menús raros o pantallas sin sentido.
  <br /><br />
  <strong>Ejemplo:</strong> Cuando usas Spotify en tu celular, la interfaz te muestra botones grandes para reproducir, pausar o cambiar de canción, menús con tus playlists, portadas de álbumes, y hasta sugerencias personalizadas. Todo eso hace que puedas disfrutar música sin complicarte, gracias a una interfaz bien pensada.
</p>


      <!-- Botón Siguiente -->
      <button class="next-button" @click="irASiguiente">Siguiente</button>
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

// Acción al hacer clic (puedes personalizar)
function irASiguiente() {
  router.push('/evolucion');
}

</script>

<style scoped>
.wrapper {
  width: 100%;
  height: auto;
  min-height: 120vh;
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
  max-width: 350px;
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

.next-button {
  margin-top: 2rem;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #a4444c;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.next-button:hover {
  background-color: #83363e;
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
</style>
