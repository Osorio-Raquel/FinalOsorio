<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const isMobileMenuOpen = ref(false)
const openTabIndex = ref(null)

const toggleTab = (index) => {
  openTabIndex.value = openTabIndex.value === index ? null : index
}

const tabs = [
  {
    name: '1er Modulo',
    subtabs: [
      { label: 'GÉNESIS DE LOS SISTEMAS GRÁFICOS', route: '/historia' },
      { label: 'EVOLUCIÓN DE LAS INTERFACES GRÁFICAS', route: '/evolucion' },
      { label: 'LAS METÁFORAS DIGITALES', route: '/metaforas' },
      { label: 'LOS ÍCONOS', route: '/iconos' },
      { label: 'PÍXELES Y RESOLUCIÓN', route: '/pixel' },
      { label: 'COMUNICACIÓN VISUAL', route: '/comunicacion-visual' },
      { label: 'TENDENCIAS EN UX UI', route: '/tendencias' },
    ],
  },
  {
    name: '2do Modulo',
    subtabs: [
      { label: 'ACTUALIDAD EN DISEÑO', route: '/actualidad' },
      { label: 'ACTORES DEL PROCESO DE INTERNET', route: '/actores' },
      { label: 'EL NEGOCIO DE INTERNET', route: '/negocio' },
      { label: 'PROCESOS DE COMUNICACIÓN EN RRSS', route: '/rrss' },
      { label: 'PLANIFICACIÓN DE CONTENIDO', route: '/planificacion' },
      { label: 'PROCESOS DE COMUNICACIÓN EN VIDEOJUEGOS', route: '/videojuegos' },
      { label: 'PROCESOS DE COMUNICACIÓN EN SITIOS WEB Y APP', route: '/webApp' },
    ],
  },
  {
    name: '3er Modulo',
    subtabs: [
      { label: 'ACCESIBILIDAD', route: '/accesibilidad' },
      { label: 'PAUTAS DE ACCESIBILIDAD', route: '/pautas' },
      { label: 'LOS CRITERIOS DE LA WCAG 2.0', route: '/criterios' },
    ],
  },
]
</script>

<template>
  <header class="navbar">
    <!-- Botón hamburguesa móvil -->
    <button class="hamburger" @click="isMobileMenuOpen = !isMobileMenuOpen">☰</button>

    <!-- Nombre de la empresa -->
    <RouterLink to="/" class="brand-name"> Diseño Digital 1 REWIND </RouterLink>

    <!-- Menú visible en desktop -->
    <nav class="main-nav desktop-nav">
      <div
        class="tab"
        v-for="(tab, i) in tabs"
        :key="i"
        @mouseenter="openTabIndex = i"
        @mouseleave="openTabIndex = null"
      >
        <span class="tab-title">{{ tab.name }}</span>

        <div v-if="openTabIndex === i" class="dropdown desktop">
          <RouterLink
            v-for="(sub, j) in tab.subtabs"
            :key="j"
            :to="sub.route"
            class="dropdown-link"
            active-class="active-link"
          >
            {{ sub.label }}
          </RouterLink>
        </div>
      </div>
    </nav>

    <!-- Menú lateral móvil con animación -->
    <transition name="slide">
      <nav v-if="isMobileMenuOpen" class="main-nav mobile-nav">
        <button class="close" @click="isMobileMenuOpen = false">✖</button>

        <div class="tab" v-for="(tab, i) in tabs" :key="i" @click="toggleTab(i)">
          <span class="tab-title">{{ tab.name }}</span>

          <transition name="fade">
            <div v-show="openTabIndex === i" class="dropdown mobile">
              <RouterLink
                v-for="(sub, j) in tab.subtabs"
                :key="j"
                :to="sub.route"
                class="dropdown-link"
                active-class="active-link"
                @click="isMobileMenuOpen = false"
              >
                {{ sub.label }}
              </RouterLink>
            </div>
          </transition>
        </div>
      </nav>
    </transition>
  </header>
  <div class="router-container">
    <RouterView />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Bubbles&display=swap');

/* Estilo general de la barra de navegación */
.navbar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: linear-gradient(45deg, #f1b4c4, #eaa0ab, #db7586, #ac344a);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Botón hamburguesa móvil */
.hamburger {
  display: none;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
}

/* Botón cerrar menú móvil */
.close {
  font-size: 1.5rem;
  background: none;
  border: none;
  align-self: flex-end;
  margin-bottom: 1rem;
  cursor: pointer;
}

/* Nombre de la marca */
.brand-name {
  font-family: 'Rubik Bubbles', cursive;
  font-size: 3rem;
  color: #f7e2e6;
  position: relative;
  letter-spacing: 1px;
  text-decoration: none;
  text-shadow:
    0 2px 4px rgba(0, 0, 0, 0.3),
    0 0 8px rgba(241, 180, 196, 0.6);
  transition:
    color 0.3s ease,
    text-shadow 0.3s ease;
}

.brand-name:hover {
  color: #c95167;
  text-shadow:
    0 2px 6px rgba(0, 0, 0, 0.4),
    0 0 12px rgba(205, 85, 115, 0.8);
}

.brand-name::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 50%;
  width: 0;
  height: 6px;
  border-radius: 3px;
  background: linear-gradient(90deg, #c95167, #ac344a, #bb475e);
  transition:
    width 0.4s ease,
    left 0.4s ease;
}

.brand-name:hover::after {
  width: 70%;
  left: 15%;
}

/* Línea animada al pasar el mouse */
.brand-name::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 50%;
  width: 0;
  height: 4px;
  background: linear-gradient(90deg, #c95167, #ac344a, #bb475e);
  transition:
    width 0.4s ease,
    left 0.4s ease;
}

.brand-name:hover::after {
  width: 60%;
  left: 20%;
}

/* Estilos de pestañas y enlaces */
.tab {
  cursor: pointer;
  margin-bottom: 1rem;
  margin-right: 150px;
}

.tab-title {
  font-family: 'Rubik Bubbles', cursive;
  background-color: #f1b4c4;
  color: #a4444c;
  padding: 0.6rem 1.2rem;
  border-radius: 12px;
  font-weight: 400;
  display: inline-block;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.tab-title:hover {
  background-color: #db7586;
  color: #f7e2e6;
}

.dropdown-link {
  font-family: 'Rubik Bubbles', cursive;
  color: #a4444c;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  display: block;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.dropdown-link:hover,
.active-link {
  background-color: #eaa0ab;
  color: #f7e2e6;
  font-weight: bold;
}

/* Transiciones */
.slide-enter-active,
.slide-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
  .desktop-nav {
    display: none;
  }
  .mobile-nav {
    position: fixed;
    top: 0;
    right: 0;
    width: 75%;
    height: 100vh;
    background-color: #fff;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  }
}

@media (min-width: 769px) {
  .mobile-nav {
    display: none !important;
  }
  .hamburger {
    display: none;
  }
  .desktop-nav {
    display: flex;
    gap: 2rem;
    padding: 0.5rem 1rem;
  }
  .desktop-nav .tab-title {
    background-color: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    font-weight: bold;
    display: inline-block;
  }
  .desktop-nav .tab-title:hover {
    background-color: #f1b4c4;
  }

  .desktop-nav .tab {
    position: relative;
  }

  .desktop-nav .dropdown.desktop {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    margin-top: 0.3rem;
    padding: 0.5rem 0;
    min-width: 180px;
    z-index: 100;

    visibility: hidden;
    opacity: 0;
    transition:
      visibility 0s linear 0.3s,
      opacity 0.3s linear 0.3s;
  }
  .desktop-nav .dropdown-link {
    padding: 0.5rem 1rem;
    display: block;
    white-space: nowrap;
  }
  .desktop-nav .tab:hover .dropdown.desktop {
    visibility: visible;
    opacity: 1;
    transition-delay: 0s;
  }
}


</style>
