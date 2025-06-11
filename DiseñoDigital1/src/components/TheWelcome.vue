<script setup>
import AnimatedLogo from './AnimatedLogo.vue'
import AnimatedCards from './AnimatedCards.vue'
import Presentacion from './Presentacion.vue'
import Mapa from './MapaConceptual.vue'
</script>

<template>
  <AnimatedLogo />
  <div>
    <Presentacion />
  </div>
  <div class="mapita">
    <Mapa />
  </div>
  <div class="animated-cards-container">
    <AnimatedCards />
  </div>
</template>

<style scoped>
.animated-cards-container {
  display: flex;
  justify-content: center; /* centra horizontalmente */
  /* opcionalmente: */
  /* align-items: center; */ /* centra verticalmente si el contenedor tiene altura */
  padding: 1rem; /* espacio alrededor */
}

.mapita {
  display: flex;           /* activar flexbox */
  justify-content: center; /* centrar horizontalmente */
  align-items: center;     /* centrar verticalmente */
  width: 100%;
  height: 600px;           /* altura para que se note el centrado vertical */
  margin: 2rem 0;          /* espacio arriba y abajo opcional */
}
</style>
