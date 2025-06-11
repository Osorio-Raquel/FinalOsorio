<template>
  <svg
    ref="svg"
    viewBox="0 0 1280 720"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100vh"
    style="font-family: 'Rubik', sans-serif"
  >
    <defs>
      <mask id="maskLeft">
        <rect x="-50%" width="100%" height="100%" fill="#fff" />
      </mask>
      <mask id="maskRight">
        <rect x="50%" width="100%" height="100%" fill="#fff" />
      </mask>
    </defs>
    <g font-size="150">
      <!-- Texto izquierdo -->
      <g mask="url(#maskLeft)" fill="#f7e2e6" class="left">
        <text y="120">DISEÑO</text>
        <text y="250">DIGITAL</text>
        <text y="380">REWIND</text>
      </g>

      <!-- Texto derecho -->
      <g mask="url(#maskRight)" fill="#ac344a" class="right">
        <text y="120">DISEÑO</text>
        <text y="250">DIGITAL</text>
        <text y="380">REWIND</text>
      </g>
    </g>
  </svg>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const svg = ref(null)

onMounted(() => {
  const tl = gsap.timeline({
    defaults: {
      duration: 2,
      yoyo: true,
      ease: 'power2.inOut',
    },
  })

  tl.fromTo(
    '.left, .right',
    {
      svgOrigin: '640 500',
      skewY: (i) => [-30, 15][i],
      scaleX: (i) => [0.6, 0.85][i],
      x: 200,
    },
    {
      skewY: (i) => [-15, 30][i],
      scaleX: (i) => [0.85, 0.6][i],
      x: -200,
    },
  ).play(0.5)

  const tl2 = gsap.timeline()
  document.querySelectorAll('text').forEach((t, i) => {
    tl2.add(
      gsap.fromTo(
        t,
        { xPercent: -100, x: 700 },
        { duration: 1, xPercent: 0, x: 575, ease: 'sine.inOut' },
      ),
      (i % 3) * 0.2,
    )
  })

  window.onpointermove = (e) => {
    tl.pause()
    tl2.pause()
    gsap.to([tl, tl2], {
      duration: 2,
      ease: 'power4',
      progress: e.x / innerWidth,
    })
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap');

svg {
  background: linear-gradient(to bottom, #f7e2e6 0%, #f1b4c4 50%, #eaa0ab 100%);
  overflow: hidden;
}
</style>
