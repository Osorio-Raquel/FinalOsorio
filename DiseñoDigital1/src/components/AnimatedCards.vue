<template>
  <div class="carousel">
    <div class="carousel-track">
      <!-- Card 1: PRESENTACION DE LA IDEA -->
      <article class="deconstructed-card">
        <div class="card-layer card-image">
          <svg class="wave-svg" viewBox="0 0 300 400" preserveAspectRatio="none">
            <defs>
              <linearGradient id="pregnancyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FF6B6B" />
                <stop offset="100%" stop-color="#FF8E8E" />
              </linearGradient>
              <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#FF7E7E" />
                <stop offset="50%" stop-color="#FFA0A0" />
                <stop offset="100%" stop-color="#FF7E7E" />
              </linearGradient>
              <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#FFA0A0" />
                <stop offset="50%" stop-color="#FFBCBC" />
                <stop offset="100%" stop-color="#FFA0A0" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#pregnancyGradient)" />
            <path
              d="M0,230 C30,220 60,240 90,230 C120,220 150,240 180,230 C210,220 240,240 270,230 C290,225 295,230 300,225 L300,400 L0,400 Z"
              fill="url(#waveGradient1)"
              opacity="0.8"
            />
            <path
              d="M0,260 C40,250 80,270 120,260 C160,250 200,270 240,260 C280,250 290,260 300,255 L300,400 L0,400 Z"
              fill="url(#waveGradient2)"
              opacity="0.9"
            />
            <path
              d="M0,290 C50,280 100,300 150,290 C200,280 250,300 300,290 L300,400 L0,400 Z"
              fill="#FFD4D4"
              opacity="0.9"
            />
          </svg>
        </div>
        <div class="card-layer card-frame">
          <svg viewBox="0 0 300 400" preserveAspectRatio="none">
            <path class="frame-path" d="M 20,20 H 280 V 380 H 20 Z" />
          </svg>
        </div>
        <div class="card-layer card-content pregnancy-content">
          <div class="content-fragment fragment-heading">
            <h2 class="content-text">Raquel</h2>
            <h3 class="content-subtext">Osorio</h3>
          </div>
          <div class="content-fragment fragment-meta">
            <div class="meta-line"></div>
            <span class="meta-text">Propuesta</span>
          </div>
          <div class="content-fragment fragment-body">
            <p class="content-text">
              En el apartado anterior se pude apreciar mi concepcion de los temas de la materia en forma de nodos.
            </p>
          </div>
        </div>
      </article>

      <!-- Card 2: Baby Eye Color Calculator -->
      <article class="deconstructed-card">
        <div class="card-layer card-image">
          <svg class="wave-svg" viewBox="0 0 300 400" preserveAspectRatio="none">
            <defs>
              <linearGradient id="babyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#4ECDC4" />
                <stop offset="100%" stop-color="#7EE8E1" />
              </linearGradient>
              <linearGradient id="waveBabyGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#5DDED5" />
                <stop offset="50%" stop-color="#8CEEEA" />
                <stop offset="100%" stop-color="#5DDED5" />
              </linearGradient>
              <linearGradient id="waveBabyGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#8CEEEA" />
                <stop offset="50%" stop-color="#BCF6F4" />
                <stop offset="100%" stop-color="#8CEEEA" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#babyGradient)" />
            <path
              d="M0,230 C30,220 60,240 90,230 C120,220 150,240 180,230 C210,220 240,240 270,230 C290,225 295,230 300,225 L300,400 L0,400 Z"
              fill="url(#waveBabyGradient1)"
              opacity="0.8"
            />
            <path
              d="M0,260 C40,250 80,270 120,260 C160,250 200,270 240,260 C280,250 290,260 300,255 L300,400 L0,400 Z"
              fill="url(#waveBabyGradient2)"
              opacity="0.9"
            />
            <path
              d="M0,290 C50,280 100,300 150,290 C200,280 250,300 300,290 L300,400 L0,400 Z"
              fill="#D6F9F7"
              opacity="0.9"
            />
          </svg>
        </div>
        <div class="card-layer card-frame">
          <svg viewBox="0 0 300 400" preserveAspectRatio="none">
            <path class="frame-path" d="M 20,20 H 280 V 380 H 20 Z" />
          </svg>
        </div>
        <div class="card-layer card-content baby-content">
          <div class="content-fragment fragment-heading">
            <h2 class="content-text">MODULOS</h2>
            <h3 class="content-subtext">3 modulos</h3>
          </div>
          <div class="content-fragment fragment-meta">
            <div class="meta-line"></div>
            <span class="meta-text">Propuesta</span>
          </div>
          <div class="content-fragment fragment-body">
            <p class="content-text">
              Para el glosario tome un concepto importante para mi de cada tema avanzado dividido por modulos.
            </p>
          </div>
        </div>
      </article>

      <!-- Card 3: Percentage Calculator -->
      <article class="deconstructed-card text-card">
        <div class="card-layer card-background">
          <div class="bg-grid">
            <div class="grid-line horizontal" style="top: 25%"></div>
            <div class="grid-line horizontal" style="top: 50%"></div>
            <div class="grid-line horizontal" style="top: 75%"></div>
            <div class="grid-line vertical" style="left: 33.33%"></div>
            <div class="grid-line vertical" style="left: 66.66%"></div>
          </div>
          <div class="bg-objects">
            <div class="bg-object circle"></div>
            <div class="bg-object square"></div>
            <div class="bg-object triangle"></div>
          </div>
        </div>
        <div class="card-layer card-frame">
          <svg viewBox="0 0 300 400" preserveAspectRatio="none">
            <path class="frame-path" d="M 20,20 H 280 V 380 H 20 Z" />
          </svg>
        </div>
        <div class="card-layer card-content percentage-content">
          <div class="content-fragment fragment-meta text-align-right">
            <span class="meta-text">MATH</span>
            <div class="meta-line"></div>
          </div>
          <div class="content-fragment fragment-heading">
            <h2 class="content-text align-right">PAGINA</h2>
            <h3 class="content-subtext align-right">RESPONSIVE</h3>
          </div>
          <div class="content-fragment fragment-body text-align-right">
            <p class="content-text">
              La pagina cuenta con version mobile mas no es catalogada A.
            </p>
          </div>
        </div>
      </article>

      <!-- Card 4: Perfect Boiled Egg Calculator -->
      <article class="deconstructed-card text-card">
        <div class="card-layer card-background">
          <div class="bg-grid">
            <div class="grid-line horizontal" style="top: 25%"></div>
            <div class="grid-line horizontal" style="top: 50%"></div>
            <div class="grid-line horizontal" style="top: 75%"></div>
            <div class="grid-line vertical" style="left: 33.33%"></div>
            <div class="grid-line vertical" style="left: 66.66%"></div>
          </div>
          <div class="bg-objects">
            <div class="bg-object circle"></div>
            <div class="bg-object square"></div>
            <div class="bg-object triangle"></div>
          </div>
        </div>
        <div class="card-layer card-frame">
          <svg viewBox="0 0 300 400" preserveAspectRatio="none">
            <path class="frame-path" d="M 20,20 H 280 V 380 H 20 Z" />
          </svg>
        </div>
        <div class="card-layer card-content egg-content">
          <div class="content-fragment fragment-meta">
            <div class="meta-line"></div>
            <span class="meta-text"></span>
          </div>
          <div class="content-fragment fragment-heading">
            <h2 class="content-text">Cards</h2>
            <h3 class="content-subtext">Conceptos Presentados</h3>
          </div>
          <div class="content-fragment fragment-body">
            <p class="content-text">
              La idea presentada es como un slide show que pueda servir de memoria para pivote de cada tema avanzado.
            </p>
          </div>
        </div>
      </article>
    </div>

    <div class="carousel-controls">
      <button class="carousel-button prev">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button class="carousel-button next">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>

    <div class="dots-container"></div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&family=Space+Mono:wght@400;700&display=swap');

:root {
  --bg-color: #f1f1f1;
  --card-width: 300px;
  --card-height: 400px;
  --black: #080808;
  --white: #fafafa;
  --accent: #ff2d55;
  --grid-color: rgba(0, 0, 0, 0.08);
  --frame-color: rgba(8, 8, 8, 0.8);
  --transition-slow: 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-fast: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  background-color: var(--bg-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-feature-settings:
    'salt' 1,
    'ss01' 1,
    'ss02' 1;
  color: var(--black);
  overflow-x: hidden;
}

.carousel {
  position: relative;
  width: 100%;
  max-width: 1400px;
  padding: 5vh 0;
}

.carousel-track {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 40px 0;
  gap: 40px;
}

.carousel-controls {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.carousel-button {
  background: var(--black);
  color: var(--white);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.carousel-button:hover {
  transform: translateY(-2px);
}

.carousel-button:active {
  transform: translateY(0);
}

.carousel-button svg {
  width: 24px;
  height: 24px;
}

.card-system {
  display: flex;
  gap: 40px;
}

.deconstructed-card {
  position: relative;
  width: var(--card-width);
  height: var(--card-height);
  cursor: pointer;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  transform-style: preserve-3d;
  flex-shrink: 0;
}

.card-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition:
    transform var(--transition-slow),
    opacity var(--transition-slow);
}

.card-image {
  overflow: hidden;
  z-index: 1;
}

.wave-svg {
  width: 100%;
  height: 100%;
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.card-frame {
  z-index: 3;
  pointer-events: none;
}

.frame-path {
  fill: none;
  stroke: var(--frame-color);
  stroke-width: 1;
  stroke-dasharray: 1520;
  stroke-dashoffset: 1520;
  transition: stroke-dashoffset 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.card-background {
  z-index: 0;
  background-color: var(--white);
}

.bg-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.grid-line {
  position: absolute;
  background-color: var(--grid-color);
  transition:
    transform var(--transition-slow),
    opacity var(--transition-fast);
}

.grid-line.horizontal {
  width: 100%;
  height: 1px;
  transform: scaleX(0.3);
  transform-origin: left;
}

.grid-line.vertical {
  height: 100%;
  width: 1px;
  transform: scaleY(0.3);
  transform-origin: top;
}

.bg-objects {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.bg-object {
  position: absolute;
  opacity: 0.3;
  transition:
    transform var(--transition-slow),
    opacity var(--transition-slow);
}

.bg-object.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  bottom: 40px;
  left: -30px;
  transform: translateY(20px);
}

.bg-object.square {
  width: 60px;
  height: 60px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  top: 40px;
  right: 30px;
  transform: rotate(45deg) translateY(-20px);
}

.bg-object.triangle {
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 70px solid rgba(0, 0, 0, 0.05);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.5);
}

.card-content {
  z-index: 2;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.ocean-content {
  color: var(--white);
}

.ocean-content .content-text,
.ocean-content .meta-text,
.ocean-content .cta-text {
  color: var(--white);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.ocean-content .meta-line {
  background-color: var(--white);
}

.ocean-content .fragment-body {
  background: rgba(15, 30, 44, 0.5);
  padding: 10px;
  border-radius: 4px;
  backdrop-filter: blur(2px);
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.content-fragment {
  position: relative;
}

.fragment-heading {
  margin-top: auto;
  margin-bottom: 1.5rem;
}

.content-text {
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--black);
  transition:
    transform var(--transition-fast),
    opacity var(--transition-fast);
  transform: translateY(10px);
  opacity: 0.7;
}

.content-subtext {
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  margin-top: 1rem;
  color: var(--black);
  opacity: 0.5;
  transform: translateY(10px);
  transition:
    transform var(--transition-fast),
    opacity var(--transition-fast);
}

.fragment-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 2rem;
}

.meta-line {
  width: 40px;
  height: 1px;
  background-color: var(--black);
  transform: scaleX(0.5);
  transform-origin: left;
  transition: transform var(--transition-fast);
}

.meta-text {
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  opacity: 0.6;
  transform: translateX(-5px);
  transition:
    transform var(--transition-fast),
    opacity var(--transition-fast);
}

.fragment-body {
  max-width: 85%;
  margin: 1.5rem 0;
}

.fragment-body .content-text {
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: normal;
  opacity: 0.6;
}

.fragment-cta {
  margin-top: auto;
  overflow: visible;
}

.cta-link {
  text-decoration: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 8px 0;
}

.cta-box {
  position: absolute;
  top: 0;
  left: -10px;
  width: calc(100% + 20px);
  height: 100%;
  background-color: var(--black);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition-fast);
}

.ocean-content .cta-box {
  background-color: var(--white);
}

.cta-text {
  position: relative;
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--black);
  transition: color var(--transition-fast);
  transform: translateX(-5px);
  opacity: 0.7;
  transition:
    transform var(--transition-fast),
    opacity var(--transition-fast),
    color var(--transition-fast);
}

.ocean-content .cta-text {
  color: var(--white);
}

.ocean-content .cta-link:hover .cta-text {
  color: var(--black) !important;
}

.align-right {
  text-align: right;
}

.text-align-right {
  align-self: flex-end;
  text-align: right;
}

.text-align-right .meta-line {
  transform-origin: right;
}

.text-align-right .cta-box {
  transform-origin: right;
}

.text-align-right .meta-text {
  transform: translateX(5px);
}

.text-card .content-text,
.text-card .content-subtext {
  color: var(--black);
}

.deconstructed-card:hover .frame-path {
  stroke-dashoffset: 0;
}

.deconstructed-card:hover .content-text,
.deconstructed-card:hover .content-subtext {
  transform: translateY(0);
  opacity: 1;
  transition-delay: 0.05s;
}

.deconstructed-card:hover .fragment-body .content-text {
  transition-delay: 0.1s;
  opacity: 1;
}

.deconstructed-card:hover .meta-text {
  transform: translateX(0);
  opacity: 1;
  transition-delay: 0.15s;
}

.deconstructed-card:hover .meta-line {
  transform: scaleX(1);
  transition-delay: 0.05s;
}

.deconstructed-card:hover .wave-svg {
  transform: scale(1.05);
}

.deconstructed-card:hover .cta-text {
  transform: translateX(0);
  opacity: 1;
  transition-delay: 0.2s;
}

.deconstructed-card:hover .cta-link:hover .cta-box {
  transform: scaleX(1);
}

.deconstructed-card:hover .cta-link:hover .cta-text {
  color: var(--white);
}

.text-card:hover .grid-line.horizontal {
  transform: scaleX(1);
}

.text-card:hover .grid-line.vertical {
  transform: scaleY(1);
}

.text-card:hover .bg-object {
  opacity: 1;
  transform: translate(0, 0) rotate(0);
}

.text-card:hover .bg-object.square {
  transform: rotate(45deg) translate(0, 0);
}

.text-card:hover .bg-object.triangle {
  transform: translate(-50%, -50%) scale(1);
}

.deconstructed-card:hover .grid-line:nth-child(1) {
  transition-delay: 0.1s;
}

.deconstructed-card:hover .grid-line:nth-child(2) {
  transition-delay: 0.2s;
}

.deconstructed-card:hover .grid-line:nth-child(3) {
  transition-delay: 0.3s;
}

.deconstructed-card:hover .grid-line:nth-child(4) {
  transition-delay: 0.15s;
}

.deconstructed-card:hover .grid-line:nth-child(5) {
  transition-delay: 0.25s;
}

.pregnancy-content .card-image svg {
  background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
}

.baby-content .card-image svg {
  background: linear-gradient(135deg, #4ecdc4, #7ee8e1);
}

.percentage-content {
  color: var(--black);
}

.percentage-content .card-image svg {
  background: linear-gradient(135deg, #ffd166, #ffe0a3);
}

.egg-content {
  color: var(--black);
}

.egg-content .card-image svg {
  background: linear-gradient(135deg, #06d6a0, #62f7d1);
}

.sleep-content {
  color: var(--white);
}

.sleep-content .card-image svg {
  background: linear-gradient(135deg, #118ab2, #5ac8e3);
}

.age-content {
  color: var(--white);
}

.age-content .card-image svg {
  background: linear-gradient(135deg, #073b4c, #3c7c8c);
}

.percentage-content .meta-line,
.egg-content .meta-line {
  background-color: var(--black);
}

.sleep-content .meta-line,
.age-content .meta-line {
  background-color: var(--white);
}

.percentage-content .content-text,
.percentage-content .meta-text,
.percentage-content .cta-text,
.egg-content .content-text,
.egg-content .meta-text,
.egg-content .cta-text {
  color: var(--black);
}

.sleep-content .content-text,
.sleep-content .meta-text,
.sleep-content .cta-text,
.age-content .content-text,
.age-content .meta-text,
.age-content .cta-text {
  color: var(--white);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.sleep-content .cta-box,
.age-content .cta-box {
  background-color: var(--white);
}

.sleep-content .cta-link:hover .cta-text,
.age-content .cta-link:hover .cta-text {
  color: var(--black) !important;
}

.dots-container {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
}

.dot {
  width: 8px;
  height: 8px;
  background-color: var(--black);
  border-radius: 50%;
  opacity: 0.3;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  cursor: pointer;
}

.dot.active {
  opacity: 1;
  transform: scale(1.3);
}

.attribution {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 12px;
  opacity: 0.7;
}

.attribution a {
  color: var(--black);
  text-decoration: none;
}

@media (max-width: 768px) {
  :root {
    --card-width: 280px;
    --card-height: 380px;
  }

  .card-content {
    padding: 20px;
  }

  .content-text {
    font-size: 1.8rem;
  }
}
</style>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  setup() {
    const track = ref(null)
    const cards = ref([])
    const dotsContainer = ref(null)
    const prevBtn = ref(null)
    const nextBtn = ref(null)

    let dots = []
    let currentIndex = 0
    const cardMargin = 40
    let cardWidth = 0
    let totalCardWidth = 0

    let touchStartX = 0
    let touchEndX = 0

    const goToCard = (index) => {
      index = Math.max(0, Math.min(index, cards.value.length - 1))
      currentIndex = index
      updateCarousel()
    }

    const updateCarousel = () => {
      const translateX = -currentIndex * totalCardWidth
      if (track.value) {
        track.value.style.transform = `translateX(${translateX}px)`
      }
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex)
      })
    }

    const handleSwipe = () => {
      if (touchStartX - touchEndX > 50) {
        goToCard(currentIndex + 1)
      } else if (touchEndX - touchStartX > 50) {
        goToCard(currentIndex - 1)
      }
    }

    const onResize = () => {
      if (!cards.value.length || !track.value) return
      cardWidth = cards.value[0].offsetWidth
      totalCardWidth = cardWidth + cardMargin
      const translateX = -currentIndex * totalCardWidth
      track.value.style.transition = 'none'
      track.value.style.transform = `translateX(${translateX}px)`
      setTimeout(() => {
        if (track.value)
          track.value.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
      }, 50)
    }

    const onKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        goToCard(currentIndex - 1)
      } else if (e.key === 'ArrowRight') {
        goToCard(currentIndex + 1)
      }
    }

    const setupCardsListeners = () => {
      cards.value.forEach((card) => {
        const onMouseMove = (e) => {
          const rect = card.getBoundingClientRect()
          const x = (e.clientX - rect.left) / rect.width
          const y = (e.clientY - rect.top) / rect.height
          const xDeg = (y - 0.5) * 8
          const yDeg = (x - 0.5) * -8
          card.style.transform = `perspective(1200px) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`
          const layers = card.querySelectorAll('.card-layer')
          layers.forEach((layer, index) => {
            const depth = 30 * (index + 1)
            const translateZ = depth
            const offsetX = (x - 0.5) * 10 * (index + 1)
            const offsetY = (y - 0.5) * 10 * (index + 1)
            layer.style.transform = `translate3d(${offsetX}px, ${offsetY}px, ${translateZ}px)`
          })
          const waveSvg = card.querySelector('.wave-svg')
          if (waveSvg) {
            const moveX = (x - 0.5) * -20
            const moveY = (y - 0.5) * -20
            waveSvg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`
            const wavePaths = waveSvg.querySelectorAll('path:not(:first-child)')
            wavePaths.forEach((path, index) => {
              const factor = 1 + index * 0.5
              const waveX = moveX * factor * 0.5
              const waveY = moveY * factor * 0.3
              path.style.transform = `translate(${waveX}px, ${waveY}px)`
            })
          }
          const bgObjects = card.querySelectorAll('.bg-object')
          bgObjects.forEach((obj, index) => {
            const factorX = (index + 1) * 10
            const factorY = (index + 1) * 8
            const moveX = (x - 0.5) * factorX
            const moveY = (y - 0.5) * factorY
            if (obj.classList.contains('square')) {
              obj.style.transform = `rotate(45deg) translate(${moveX}px, ${moveY}px)`
            } else if (obj.classList.contains('triangle')) {
              obj.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px)) scale(1)`
            } else {
              obj.style.transform = `translate(${moveX}px, ${moveY}px)`
            }
          })
        }

        const onMouseLeave = () => {
          card.style.transform = ''
          const layers = card.querySelectorAll('.card-layer')
          layers.forEach((layer) => {
            layer.style.transform = ''
          })
          const waveSvg = card.querySelector('.wave-svg')
          if (waveSvg) {
            waveSvg.style.transform = ''
            const wavePaths = waveSvg.querySelectorAll('path:not(:first-child)')
            wavePaths.forEach((path) => {
              path.style.transform = ''
            })
          }
          const bgObjects = card.querySelectorAll('.bg-object')
          bgObjects.forEach((obj) => {
            if (obj.classList.contains('square')) {
              obj.style.transform = 'rotate(45deg) translateY(-20px)'
            } else if (obj.classList.contains('triangle')) {
              obj.style.transform = 'translate(-50%, -50%) scale(0.5)'
            } else {
              obj.style.transform = 'translateY(20px)'
            }
          })
        }

        card.addEventListener('mousemove', onMouseMove)
        card.addEventListener('mouseleave', onMouseLeave)

        // Guardar referencia para limpiar luego
        card._onMouseMove = onMouseMove
        card._onMouseLeave = onMouseLeave
      })
    }

    const cleanupCardsListeners = () => {
      cards.value.forEach((card) => {
        card.removeEventListener('mousemove', card._onMouseMove)
        card.removeEventListener('mouseleave', card._onMouseLeave)
        delete card._onMouseMove
        delete card._onMouseLeave
      })
    }

    onMounted(() => {
      cards.value = Array.from(document.querySelectorAll('.deconstructed-card'))
      track.value = document.querySelector('.carousel-track')
      dotsContainer.value = document.querySelector('.dots-container')
      prevBtn.value = document.querySelector('.carousel-button.prev')
      nextBtn.value = document.querySelector('.carousel-button.next')

      dotsContainer.value.innerHTML = ''
      cards.value.forEach((_, index) => {
        const dot = document.createElement('div')
        dot.classList.add('dot')
        if (index === 0) dot.classList.add('active')
        dot.addEventListener('click', () => goToCard(index))
        dotsContainer.value.appendChild(dot)
      })
      dots = Array.from(document.querySelectorAll('.dot'))

      if (cards.value.length) {
        cardWidth = cards.value[0].offsetWidth
        totalCardWidth = cardWidth + cardMargin
      }

      setupCardsListeners()

      prevBtn.value.addEventListener('click', () => goToCard(currentIndex - 1))
      nextBtn.value.addEventListener('click', () => goToCard(currentIndex + 1))
      document.addEventListener('keydown', onKeyDown)

      track.value.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX
      })
      track.value.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX
        handleSwipe()
      })

      window.addEventListener('resize', onResize)

      updateCarousel()
    })

    onBeforeUnmount(() => {
      cleanupCardsListeners()
      if (prevBtn.value)
        prevBtn.value.removeEventListener('click', () => goToCard(currentIndex - 1))
      if (nextBtn.value)
        nextBtn.value.removeEventListener('click', () => goToCard(currentIndex + 1))
      document.removeEventListener('keydown', onKeyDown)
      if (track.value) {
        track.value.removeEventListener('touchstart', () => {})
        track.value.removeEventListener('touchend', () => {})
      }
      window.removeEventListener('resize', onResize)
    })

    return {
      track,
      dotsContainer,
      prevBtn,
      nextBtn,
    }
  },
}
</script>
