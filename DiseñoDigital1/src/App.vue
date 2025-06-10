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
    name: 'Inicio',
    subtabs: [
      { label: 'Home', route: '/' },
      { label: 'Quiénes somos', route: '/about' },
      { label: 'Historia', route: '/historia' },
      { label: 'Misión y Visión', route: '/mision' },
      { label: 'Equipo', route: '/equipo' },
    ],
  },
  {
    name: 'Productos',
    subtabs: [
      { label: 'Sabores', route: '/sabores' },
      { label: 'Especiales', route: '/especiales' },
      { label: 'Crea tu Helado', route: '/make' },
      { label: 'Favoritos', route: '/favoritos' },
      { label: 'Vota tu favorito', route: '/votar' },
    ],
  },
  {
    name: 'Contacto',
    subtabs: [
      { label: 'Formulario', route: '/contacto' },
      { label: 'Redes Sociales', route: '/redes' },
      { label: 'Ubicación', route: '/ubicacion' },
      { label: 'Franquicia', route: '/franquicia' },
      { label: 'Trabaja con nosotros', route: '/trabajo' },
    ],
  },
]
</script>

<template>
  <header class="navbar">
    <!-- Botón hamburguesa móvil -->
    <button class="hamburger" @click="isMobileMenuOpen = !isMobileMenuOpen">
      ☰
    </button>

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

        <div
          class="tab"
          v-for="(tab, i) in tabs"
          :key="i"
          @click="toggleTab(i)"
        >
          <span class="tab-title">{{ tab.name }}</span>

          <transition name="fade">
            <div
              v-show="openTabIndex === i"
              class="dropdown mobile"
            >
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

  <RouterView />
</template>

<style scoped>
/* Estilo general */
.navbar {
  background-color: #F0D9EF;
  padding: 1rem;
  position: relative;
}

/* Botón hamburguesa */
.hamburger {
  display: none;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
}

.close {
  font-size: 1.5rem;
  background: none;
  border: none;
  align-self: flex-end;
  margin-bottom: 1rem;
  cursor: pointer;
}

.tab {
  cursor: pointer;
  margin-bottom: 1rem;
}

.tab-title {
  font-family: 'Caviar Dreams', sans-serif;
  background-color: #FFE6BB;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-weight: bold;
  display: inline-block;
}

.tab-title:hover {
  background-color: #FCDCE1;
}

.dropdown-link {
  font-family: 'Caviar Dreams', sans-serif;
  color: #333;
  text-decoration: none;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  display: block;
}

.dropdown-link:hover,
.active-link {
  background-color: #FCDCE1;
  font-weight: bold;
}

/* Animación del menú lateral */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Animación de subtabs */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

/* Móvil */
@media (max-width: 768px) {
  .hamburger {
    display: block;
    justify-content: end;
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

  /* Ocultar menú desktop en móvil */
  .desktop-nav {
    display: none;
  }
}

/* Escritorio */
@media (min-width: 769px) {
  /* Ocultar menú móvil en desktop */
  .mobile-nav {
    display: none !important;
  }

  .hamburger {
    display: none;
  }

  .desktop-nav {
    display: flex;
    gap: 2rem;
    background-color: #F0D9EF;
    padding: 0.5rem 1rem;
    justify-content: center;  /* centra horizontalmente */
    align-items: center;      /* centra verticalmente */
    width: 100%; 
  }

  /* Tabs desktop */
  .desktop-nav .tab {
    position: relative;
    cursor: pointer;
    margin-bottom: 0;
  }

  .desktop-nav .tab-title {
    background-color: #FFE6BB;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    font-weight: bold;
    display: inline-block;
  }

  .desktop-nav .tab-title:hover {
    background-color: #FCDCE1;
  }

  /* Dropdown desktop */
  .desktop-nav .dropdown.desktop {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    margin-top: 0.3rem;
    padding: 0.5rem 0;
    min-width: 180px;
    z-index: 100;
  }

  .desktop-nav .dropdown-link {
    padding: 0.5rem 1rem;
    display: block;
    white-space: nowrap;
  }
}
</style>
