<template>
  <div class="flex flex-col items-center justify-center text-center w-full relative overflow-x-hidden">
    <!-- Decorative crosses from Roadmap.vue -->
    <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <span class="map-cross map-cross-xl absolute left-[-3vw] top-[10vh] animate-breath-slow text-accent-1/60">✕</span>
      <span class="map-cross absolute left-8 top-32 animate-breath text-accent-1/80">✕</span>
      <span class="map-cross absolute right-24 top-20 animate-breath-slow text-accent-2/70">✕</span>
      <span class="map-cross absolute right-[22%] bottom-24 animate-breath text-accent-1/60">✕</span>
      <span class="map-cross absolute left-[38%] top-[58%] animate-breath-slow text-accent-3/70">✕</span>
      <span class="map-cross absolute left-[70%] bottom-10 animate-breath text-accent-2/60">✕</span>
      <!-- Fewer animated racing lines for a cleaner look -->
      <svg class="racing-lines w-full h-full absolute inset-0" viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="racing1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#e94e77" />
            <stop offset="100%" stop-color="#3a3a5d" />
          </linearGradient>
          <linearGradient id="racing2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#c33c54" />
            <stop offset="100%" stop-color="#e94e77" />
          </linearGradient>
          <linearGradient id="fade-mask" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="white" stop-opacity="0" />
            <stop offset="10%" stop-color="white" stop-opacity="1" />
            <stop offset="90%" stop-color="white" stop-opacity="1" />
            <stop offset="100%" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <mask id="racing-fade-mask">
            <rect x="0" y="0" width="1600" height="900" fill="url(#fade-mask)" />
          </mask>
        </defs>
        <g class="racing-group" mask="url(#racing-fade-mask)">
          <line x1="1800" y1="900" x2="-200" y2="100" stroke="url(#racing1)" stroke-width="6" stroke-dasharray="40 32" opacity="0.13" class="racing-line racing-line-1" />
          <line x1="1700" y1="800" x2="-100" y2="0" stroke="url(#racing2)" stroke-width="4" stroke-dasharray="32 24" opacity="0.10" class="racing-line racing-line-2" />
        </g>
      </svg>
    </div>
    <h2 class="text-3xl md:text-5xl font-extrabold mb-4 text-white drop-shadow">Open Source Caddy Server Management</h2>
    <p class="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto font-medium drop-shadow">Caddy Manager is a free, open source tool to easily manage your Caddy web server with a beautiful UI, automation, and powerful features. Simplify your workflow and focus on what matters.</p>
    <ul class="mb-8 space-y-2 text-left">
      <li class="flex items-center text-base md:text-lg text-white font-semibold drop-shadow"><span class="text-accent-1-dark mr-2">✔️</span> Easy site and SSL management</li>
      <li class="flex items-center text-base md:text-lg text-white font-semibold drop-shadow"><span class="text-accent-1-dark mr-2">✔️</span> Automated backups & restores</li>
      <li class="flex items-center text-base md:text-lg text-white font-semibold drop-shadow"><span class="text-accent-1-dark mr-2">✔️</span> User-friendly dashboard</li>
      <li class="flex items-center text-base md:text-lg text-white font-semibold drop-shadow"><span class="text-accent-1-dark mr-2">✔️</span> Open source & community-driven</li>
    </ul>
    <a href="https://github.com/caddymanager/caddymanager" target="_blank" rel="noopener" class="inline-block bg-secondary text-white px-8 py-3 rounded-lg text-lg font-semibold shadow hover:bg-secondary-dark transition mb-12">Get Started on GitHub</a>

    <section class="w-full max-w-5xl mx-auto mt-8 mb-8">
      <h3 class="text-2xl md:text-3xl font-bold text-white mb-6 drop-shadow">Screenshots</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="n in 3" :key="n" class="roadmap-panel flex flex-col items-center justify-center min-h-[220px]">
          <div class="flex-1 flex items-center justify-center w-full h-full">
            <span class="text-white/60 italic">Screenshot {{ n }}</span>
          </div>
          <!-- Replace the above with <img :src="..." alt="Screenshot ..." class="w-full h-auto object-cover" /> when you have real images -->
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
// No script needed for this simple landing page
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.roadmap-panel {
  background: linear-gradient(120deg, rgba(255,255,255,0.13) 60%, rgba(255,255,255,0.07) 100%);
  border-radius: 1.25rem;
  border: 1.5px solid rgba(255,255,255,0.18);
  box-shadow: 0 8px 32px 0 rgba(40,40,80,0.18), 0 1.5px 8px 0 rgba(80,80,120,0.10);
  backdrop-filter: blur(12px) saturate(1.2);
  -webkit-backdrop-filter: blur(12px) saturate(1.2);
  padding: 1.5rem;
  margin-top: 0.5rem;
  color: #fff;
  font-size: 1.08rem;
  font-weight: 500;
  transition: transform 0.32s cubic-bezier(.4,2,.6,1), box-shadow 0.32s, background 0.32s;
  max-width: 28rem;
  width: 100%;
  text-align: left;
  position: relative;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
}
.roadmap-panel:hover {
  transform: scale(1.035) translateY(-2px);
  box-shadow: 0 12px 36px 0 rgba(80,80,120,0.22), 0 2px 12px 0 rgba(80,80,120,0.13);
  background: linear-gradient(120deg, rgba(255,255,255,0.19) 60%, rgba(255,255,255,0.11) 100%);
}
.map-cross {
  font-size: 4.2rem;
  font-weight: bold;
  opacity: 0.18;
  filter: blur(1.2px);
  pointer-events: none;
  user-select: none;
}
.map-cross-xl {
  font-size: 11vw;
  opacity: 0.07;
  filter: blur(2.5px);
}
.animate-breath { animation: breath 6.2s infinite; }
.animate-breath-slow { animation: breath-slow 10.4s infinite; }
@keyframes breath {
  0%, 100% { transform: scale(1); opacity: 0.15; }
  50% { transform: scale(1.08); opacity: 0.19; }
}
@keyframes breath-slow {
  0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.15; }
  50% { transform: scale(1.04) rotate(-3deg); opacity: 0.19; }
}
.racing-lines {
  position: absolute;
  top: 0; left: 0; width: 100vw; height: 100vh;
  min-width: 100%; min-height: 100%;
  z-index: 0;
  pointer-events: none;
  user-select: none;
}
.racing-line {
  filter: blur(1.5px);
  will-change: stroke-dashoffset;
}
.racing-line-1 {
  animation: dash-move-1 0.7s linear infinite;
}
.racing-line-2 {
  animation: dash-move-2 0.9s linear infinite;
  animation-delay: 0.3s;
}
@keyframes dash-move-1 {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -144px; }
}
@keyframes dash-move-2 {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -112px; }
}
</style>
