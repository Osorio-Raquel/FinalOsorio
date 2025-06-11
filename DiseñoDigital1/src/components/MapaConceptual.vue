<template>
  <div id="network"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import { DataSet, Network } from 'vis-network/standalone/esm/vis-network';

onMounted(() => {
  const nodes = new DataSet([
    { id: 1, label: 'Diseño Digital', color: '#FFD700', shape: 'ellipse', font: { size: 20, color: '#000' } },
    { id: 2, label: 'Historia del Diseño', color: '#FFA500', shape: 'box' },
    { id: 3, label: 'Funcionamiento de Internet', color: '#87CEEB', shape: 'box' },
    { id: 4, label: 'Comunicación Visual', color: '#FF69B4', shape: 'box' },
    { id: 5, label: 'Accesibilidad e Inclusión', color: '#90EE90', shape: 'box' },
    { id: 6, label: 'Tendencias y Palabras Clave', color: '#9370DB', shape: 'box' },
    { id: 7, label: 'Plataformas Digitales', color: '#40E0D0', shape: 'box' },

    { id: 8, label: 'Primera computadora (1940s)', color: '#FFDAB9' },
    { id: 9, label: 'Internet y WWW (1990s)', color: '#FFDAB9' },
    { id: 10, label: 'Diseño gráfico digital (2000s)', color: '#FFDAB9' },

    { id: 11, label: 'Red TCP/IP', color: '#B0E0E6' },
    { id: 12, label: 'Protocolo HTTP', color: '#B0E0E6' },
    { id: 13, label: 'IPV4 e IPV6', color: '#B0E0E6' },

    { id: 14, label: 'Tipografía', color: '#FFB6C1' },
    { id: 15, label: 'Color y Contraste', color: '#FFB6C1' },
    { id: 16, label: 'Iconografía', color: '#FFB6C1' },

    { id: 17, label: 'WCAG 2.0', color: '#98FB98' },
    { id: 18, label: 'Contraste y Lectura', color: '#98FB98' },
    { id: 19, label: 'Navegación por teclado', color: '#98FB98' },

    { id: 20, label: 'Diseño Responsive', color: '#D8BFD8' },
    { id: 21, label: 'UX/UI', color: '#D8BFD8' },
    { id: 22, label: 'Microinteracciones', color: '#D8BFD8' },

    { id: 23, label: 'Redes Sociales', color: '#48D1CC' },
    { id: 24, label: 'CMS (WordPress, etc)', color: '#48D1CC' },
    { id: 25, label: 'Apps Móviles', color: '#48D1CC' },

    // Más nodos interrelacionados
    { id: 26, label: 'Diseño Inclusivo', color: '#7FFFD4' },
    { id: 27, label: 'Accesibilidad Web', color: '#7FFF00' },
    { id: 28, label: 'Experiencia de Usuario', color: '#DA70D6' },
    { id: 29, label: 'Interacción Humano-Computadora', color: '#FF6347' },
    { id: 30, label: 'Diseño Adaptativo', color: '#FF8C00' },
  ]);

  const edges = new DataSet([
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 1, to: 5 },
    { from: 1, to: 6 },
    { from: 1, to: 7 },

    { from: 2, to: 8 },
    { from: 2, to: 9 },
    { from: 2, to: 10 },

    { from: 3, to: 11 },
    { from: 3, to: 12 },
    { from: 3, to: 13 },

    { from: 4, to: 14 },
    { from: 4, to: 15 },
    { from: 4, to: 16 },

    { from: 5, to: 17 },
    { from: 5, to: 18 },
    { from: 5, to: 19 },

    { from: 6, to: 20 },
    { from: 6, to: 21 },
    { from: 6, to: 22 },

    { from: 7, to: 23 },
    { from: 7, to: 24 },
    { from: 7, to: 25 },

    { from: 9, to: 11 },
    { from: 15, to: 18 },
    { from: 21, to: 24 },

    // Nuevas conexiones interrelacionadas
    { from: 5, to: 26 }, // Accesibilidad e Inclusión → Diseño Inclusivo
    { from: 26, to: 27 }, // Diseño Inclusivo → Accesibilidad Web
    { from: 27, to: 19 }, // Accesibilidad Web → Navegación por teclado
    { from: 21, to: 28 }, // UX/UI → Experiencia de Usuario
    { from: 28, to: 29 }, // Experiencia de Usuario → Interacción Humano-Computadora
    { from: 20, to: 30 }, // Diseño Responsive → Diseño Adaptativo
    { from: 30, to: 21 }, // Diseño Adaptativo → UX/UI
    { from: 4, to: 29 },  // Comunicación Visual → Interacción Humano-Computadora
  ]);

  const container = document.getElementById('network');
  const data = { nodes, edges };

  // Opciones iniciales con física activada
  const options = {
    layout: {
      hierarchical: false,
    },
    edges: {
      color: '#888',
      arrows: {
        to: { enabled: true, scaleFactor: 0.5 },
      },
      smooth: {
        enabled: true,
        type: 'dynamic',
      },
    },
    nodes: {
      font: { size: 14, face: 'Arial' },
      shape: 'box',
      margin: 10,
    },
    physics: {
      enabled: true,
      barnesHut: {
        gravitationalConstant: -500,
        centralGravity: 0.1,
        springLength: 180,
        springConstant: 0.02,
        damping: 0.2,
        avoidOverlap: 1.3,
      },
    },
    interaction: {
      hover: true,
      navigationButtons: true,
      keyboard: true,
    },
  };

  const network = new Network(container, data, options);

  // Después de 5 segundos, desactivamos la física para que quede estático
  setTimeout(() => {
    network.setOptions({ physics: { enabled: false } });
  }, 5000);
});
</script>

<style scoped>
#network {
  width: 100%;
  height: 650px;
  border: 1px solid #ccc;
  margin: 1.5rem auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  max-width: 1000px;
  background: #fff;
  display: block;
}
</style>
