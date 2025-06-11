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
      <h2 class="animated-subtitle" v-if="showSubtitle">PALABRA : METÁFORA</h2>

      <!-- Imagen animada -->
      <img
        v-if="showImage"
        src="https://i.pinimg.com/736x/b0/b0/8f/b0b08fb930b1fc04585f155b2f7e6ae2.jpg"
        alt="Metáfora imagen"
        class="animated-image"
      />

      <p class="description">
  Una metáfora es cuando comparas dos cosas que no tienen mucho que ver, pero al unirlas entiendes mejor una idea. En lugar de explicarte algo con palabras técnicas, se usa algo que ya conoces para que sea más fácil de captar. Por ejemplo, decir que una computadora es como un teatro. No porque tenga asientos o luces, sino porque hay una "escena", alguien actuando (tú) y algo que está pasando.
  <br /><br />
  En el diseño de interfases, las metáforas ayudan a que las cosas sean más intuitivas. Como cuando ves un ícono de una carpeta y entiendes que ahí guardas tus archivos. O una papelera que te dice que eso es para borrar cosas. Esas ideas no están ahí solo por estética, tienen sentido porque ya las entiendes de antes.
  <br /><br />
  El uso de metáforas hace que la tecnología se sienta más natural, casi como si hablaras el mismo idioma que la máquina. También hacen que las aplicaciones sean más fáciles de usar, porque no necesitas leer un manual para saber qué hacer. Solo lo ves, lo entiendes, y lo haces.
  <br /><br />
  Hoy en día, como todo es más visual, más rápido y hasta emocional, las metáforas digitales se volvieron clave. Te ayudan a moverte, a entender el contexto, y a completar tareas sin que tengas que pensarlo demasiado.
  <br /><br />
  Diseñar con metáforas es crear un mundo digital que se siente real. Aunque esté en una pantalla, todo tiene sentido si se basa en algo que tú ya conoces o reconoces. Y eso, hace que la experiencia sea mucho más amigable.
  <br /><br />
  <strong>Ejemplo:</strong> En las aplicaciones de correo electrónico, ver un sobre cerrado significa que tienes un mensaje nuevo, y uno abierto indica que ya lo leíste. Aunque no uses sobres en la vida real, esa metáfora visual funciona porque ya entendemos lo que representa. Así, sin pensar mucho, sabes qué hacer o qué esperar.
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
  router.push('/evolucion');
}

function irAdelante() {
  router.push('/iconos');
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

