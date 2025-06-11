import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Historia from '../components/PrimerModulo/Historia.vue'
import Evolucion from '../components/PrimerModulo/Evolucion.vue'
import Metaforas from '../components/PrimerModulo/Metaforas.vue'
import Iconos from '../components/PrimerModulo/Iconos.vue'
import Pixel from '../components/PrimerModulo/Pixel.vue'
import Comunicacion from '../components/PrimerModulo/Comunicacion.vue'
import Tendencias from '../components/PrimerModulo/Tendencias.vue'

// Importaciones Segundo Módulo
import Actualidad from '../components/SegundoModulo/Actualidad.vue'
import Actores from '../components/SegundoModulo/Actores.vue'
import Negocio from '../components/SegundoModulo/Negocio.vue'
import Rrss from '../components/SegundoModulo/Rrss.vue'
import Planificacion from '../components/SegundoModulo/Planificacion.vue'
import Videojuegos from '../components/SegundoModulo/Videojuegos.vue'
import Webapp from '../components/SegundoModulo/Webapp.vue'

// Importaciones Tercer Módulo
import Accesibilidad from '../components/TercerModulo/Accesibilidad.vue'
import Pautas from '../components/TercerModulo/Pautas.vue'
import Criterios from '../components/TercerModulo/Criterios.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
     // Primer Módulo
  { path: '/historia', name: 'Historia', component: Historia },
  { path: '/evolucion', name: 'Evolucion', component: Evolucion },
  { path: '/metaforas', name: 'Metaforas', component: Metaforas },
  { path: '/iconos', name: 'Iconos', component: Iconos },
  { path: '/pixel', name: 'Pixel', component: Pixel },
  { path: '/comunicacion-visual', name: 'Comunicacion', component: Comunicacion },
  { path: '/tendencias', name: 'Tendencias', component: Tendencias },

  // Segundo Módulo
  { path: '/actualidad', name: 'Actualidad', component: Actualidad },
  { path: '/actores', name: 'Actores', component: Actores },
  { path: '/negocio', name: 'Negocio', component: Negocio },
  { path: '/rrss', name: 'Rrss', component: Rrss },
  { path: '/planificacion', name: 'Planificacion', component: Planificacion },
  { path: '/videojuegos', name: 'Videojuegos', component: Videojuegos },
  { path: '/webApp', name: 'Webapp', component: Webapp },

  // Tercer Módulo
  { path: '/accesibilidad', name: 'Accesibilidad', component: Accesibilidad },
  { path: '/pautas', name: 'Pautas', component: Pautas },
  { path: '/criterios', name: 'Criterios', component: Criterios },
  ],
})

export default router
