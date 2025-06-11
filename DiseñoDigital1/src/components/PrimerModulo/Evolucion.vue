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
      <h2 class="animated-subtitle" v-if="showSubtitle">PALABRA : EVOLUCIÓN</h2>

      <!-- Imagen animada -->
      <img
        v-if="showImage"
        src="https://i.pinimg.com/736x/c0/bf/0a/c0bf0a0d2bbe2bbb35aa406e2bc83aae.jpg"
        alt="Evolución imagen"
        class="animated-image"
      />

      <!-- Texto descriptivo -->
      <p class="description">
  La evolución en la tecnología no es solo que las cosas se vuelvan más rápidas o más lindas, sino que van cambiando según lo que la gente necesita o espera. Antes, usar una compu era como descifrar un código secreto. Ahora, prácticamente cualquier persona puede agarrar un teléfono y entender cómo se usa en dos minutos.
  <br /><br />
  Todo fue cambiando paso a paso. Primero eran letras blancas en una pantalla negra, después vinieron las ventanas, los iconos, los sonidos, los colores, y ahora todo es táctil, con voz, animaciones, y hasta inteligencia artificial. Es como que la tecnología fue creciendo con nosotros.
  <br /><br />
  Cada cambio no fue solo porque sí, sino porque la gente quería que fuera más fácil de usar, más rápido, más bonito o más entretenido. Eso es la evolución: mejorar, adaptarse y sorprender. Y si miras bien, no se trata solo de hardware o software, también de cómo lo usamos en el día a día.
  <br /><br />
  Hoy una app puede cambiar completamente en un par de años. Lo que antes era lento, cuadrado y aburrido, ahora puede ser colorido, interactivo y súper intuitivo. Eso es gracias a una evolución constante, que no para y que siempre busca lo mismo: que la tecnología se sienta más humana.
  <br /><br />
  <strong>Ejemplo:</strong> Mirá cómo evolucionó WhatsApp: al principio solo servía para mandar mensajes de texto. Después sumaron audios, videollamadas, emojis, stickers, pagos y hasta canales de noticias. Cada función nueva apareció porque las personas pedían más formas de comunicarse fácil y rápido. Es un ejemplo clarito de cómo la tecnología cambia según lo que la gente necesita.
</p>
    </section>
  </div>
  <div class="nav-buttons">
  <button @click="irAAtras">← Anterior</button>
  <button @click="irAdelante">Siguiente →</button>
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
  router.push('/historia');
}

function irAdelante() {
  router.push('/metaforas');
}

</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 120vh; /* toda la altura visible de la ventana */
  box-sizing: border-box;
  padding: 5rem;
  margin: 0;
}

.container {
  font-family: 'Rubik', sans-serif;
  text-align: center;
  color: #6b3a44;
}

/* Animación título GLOSARIO VISUAL */
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
  max-width: 350px;  /* Más grande */
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
