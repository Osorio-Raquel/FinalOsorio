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
      <h2 class="animated-subtitle" v-if="showSubtitle">PALABRA : COMUNICACIÓN</h2>

      <!-- Imagen -->
      <img
        v-if="showImage"
        src="https://i.pinimg.com/736x/8f/5b/80/8f5b803e1d618f92bca1657134533039.jpg"
        alt="Comunicación"
        class="animated-image"
      />

      <!-- Descripción -->
      <p class="description">
        La comunicacion es básicamente el intercambio de informacion que pasa entre dos o mas personas para entenderse mejor. Cuando alguien quiere contar algo, ese es el emisor, y quien recibe el mensaje es el receptor. El mensaje es la info que se manda y para que llegue, tiene que viajar por un canal, como puede ser una llamada, un chat o hasta una red social. Para que el mensaje tenga sentido, se usan codigos, que son como signos o simbolos que todos entienden. Pero aveces aparece el ruido, que es todo lo que dificulta que el mensaje llegue bien, como por ejemplo un mensaje mal escrito o una mala conexion. Por ultimo, la retroalimentacion es cuando el receptor responde o confirma que entendio el mensaje, y el contexto es la situacion en la que se da la comunicacion, que tambien influye un monton.
        <br /><br />
        Hoy en dia, la comunicacion digital es re importante y va mucho mas alla de solo escribir o hablar. Por ejemplo, cuando alguien postea en Instagram, no solo esta usando palabras, sino tambien fotos, colores, formas y tipografias que ayudan a que el mensaje sea mucho mas claro y llamativo. Un video de TikTok es un buen ejemplo: ahi tenes la musica, la expresion de la persona, efectos visuales y texto que juntos hacen que el mensaje llegue rapido y fuerte a quien lo ve. Ademas, los comentarios y los likes permiten que la comunicacion siga siendo una conversacion, porque la gente puede dar su opinion y el creador puede responder.
        <br /><br />
<strong>Ejemplo de uso tecnológico:</strong> En la comunicación digital, la elección de las tipografías o fuentes no es solo estética, sino que también transmite personalidad y emociones. Por ejemplo, fuentes redondeadas y amigables se usan para mensajes informales o juveniles, mientras que las fuentes serif se relacionan con formalidad y confianza. Esto ayuda a que el mensaje llegue con el tono adecuado y cause el impacto esperado.
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
  router.push('/pixel');  // Ruta anterior
}

function irAdelante() {
  router.push('/tendencias'); // Cambia esta ruta por la siguiente palabra real
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
