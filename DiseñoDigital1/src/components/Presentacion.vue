<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

let lastScrollY = window.scrollY || 0

function onScroll() {
  const currentScrollY = window.scrollY

  if (currentScrollY > 100 && currentScrollY > lastScrollY) {
    if (!isVisible.value) isVisible.value = true
  } else {
    if (isVisible.value) isVisible.value = false
  }

  lastScrollY = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div class="container">
    <h1
      class="big-text"
      :class="{
        'animate-in': isVisible,
        'animate-out': !isVisible,
      }"
    >
      MEMORIA VISUAL <br />
      DIGITAL
    </h1>
    <p
      class="small-text"
      :class="{
        'animate-in': isVisible,
        'animate-out': !isVisible,
      }"
    >
      Glosario visual y Mapa conceptual representado como un esquema visual entre pestañas
    </p>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 100px auto; /* para que no quede pegado arriba */
  padding: 20px;
  background: #f7e2e6;
  overflow: hidden; /* evita que animaciones se salgan */
  font-family: 'Rubik', sans-serif;
}

/* Texto grande */
.big-text {
  font-size: 5rem;
  font-weight: 900;
  color: #ac344a;
  margin-bottom: 1rem;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-100%);
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}

/* Texto pequeño */
.small-text {
  font-size: 1.5rem;
  color: #f1b4c4;
  max-width: 300px;
  opacity: 0;
  transform: translateX(100%);
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}

/* Animación entrada */
.animate-in.big-text {
  opacity: 1;
  transform: translateX(0);
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.animate-in.small-text {
  opacity: 1;
  transform: translateX(0);
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

/* Animación salida */
.animate-out.big-text {
  opacity: 0;
  transform: translateX(-100%);
  transition-timing-function: ease-in;
}

.animate-out.small-text {
  opacity: 0;
  transform: translateX(100%);
  transition-timing-function: ease-in;
}
</style>
