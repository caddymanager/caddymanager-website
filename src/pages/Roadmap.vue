<template>
  <div class="flex flex-col items-center justify-center min-h-[60vh] text-center w-full relative select-none">
    <div class="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <!-- Decorative map elements, scattered and some very large/faded -->
      <span class="map-cross map-cross-xl absolute left-[-3vw] top-[10vh] animate-breath-slow text-accent-1/60">✕</span>
      <span class="map-dot map-dot-xl absolute right-[-5vw] top-[60vh] animate-pulse-dot text-accent-2/50">●</span>
      <span class="map-cross absolute left-8 top-32 animate-breath text-accent-1/80">✕</span>
      <span class="map-cross absolute right-24 top-20 animate-breath-slow text-accent-2/70">✕</span>
      <span class="map-dot absolute left-[18%] bottom-36 animate-pulse-dot text-accent-3/70">●</span>
      <span class="map-cross absolute right-[22%] bottom-24 animate-breath text-accent-1/60">✕</span>
      <span class="map-dot absolute left-[53%] top-10 animate-pulse-dot text-accent-2/60">●</span>
      <span class="map-cross absolute left-[38%] top-[58%] animate-breath-slow text-accent-3/70">✕</span>
      <span class="map-dot absolute right-10 top-[65%] animate-pulse-dot text-accent-1/60">●</span>
      <span class="map-cross absolute left-[70%] bottom-10 animate-breath text-accent-2/60">✕</span>
      <span class="map-dot absolute left-[10%] top-[80%] animate-pulse-dot text-accent-3/60">●</span>
    </div>
    <div class="w-full max-w-none pt-24 pb-24 px-2 md:px-8 relative z-10">
      <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4 flex items-center gap-3 justify-center">
        <span>🗺️</span> Roadmap
      </h1>
      <p class="text-lg text-white/80 mb-12">Upcoming features and development milestones for Caddy Manager.</p>
      <div class="relative flex flex-col items-center w-full">
        <svg class="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 1000 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="swirl-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="var(--tw-gradient-from, #c33c54)" />
              <stop offset="50%" stop-color="var(--tw-gradient-via, #e94e77)" />
              <stop offset="100%" stop-color="var(--tw-gradient-to, #3a3a5d)" />
            </linearGradient>
            <linearGradient id="fade-mask" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="white" stop-opacity="0" />
              <stop offset="10%" stop-color="white" stop-opacity="1" />
              <stop offset="90%" stop-color="white" stop-opacity="1" />
              <stop offset="100%" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <mask id="swirl-fade-mask">
              <rect x="0" y="0" width="1000" height="200" fill="url(#fade-mask)" />
            </mask>
          </defs>
          <path mask="url(#swirl-fade-mask)" d="M 0 100 Q 250 0 500 100 T 1000 100" fill="none" stroke="url(#swirl-gradient)" stroke-width="8" stroke-opacity="0.18" stroke-dasharray="24 18" class="swirl-animated" />
        </svg>
        <ul class="relative z-10 w-full flex flex-row justify-between items-center mt-8">
          <li class="flex flex-col items-center w-1/3" style="transform: translateY(-30px);">
            <div class="flex flex-col items-center">
              <span class="inline-block w-7 h-7 rounded-full bg-accent-1 border-4 border-white shadow-lg mb-2"></span>
              <span class="font-semibold text-xl md:text-2xl text-white mb-2">v0.1 – Public Beta</span>
            </div>
            <ul class="roadmap-panel">
              <li>Initial release with multi-server management</li>
              <li>Live Caddyfile editor & validation</li>
              <li>API key management</li>
              <li>Audit logging</li>
              <li>Swagger-based API docs</li>
            </ul>
          </li>
          <li class="flex flex-col items-center w-1/3" style="transform: translateY(40px);">
            <div class="flex flex-col items-center">
              <span class="inline-block w-7 h-7 rounded-full bg-accent-2 border-4 border-white shadow-lg mb-2"></span>
              <span class="font-semibold text-xl md:text-2xl text-white mb-2">v0.2 – Quality of Life</span>
            </div>
            <ul class="roadmap-panel">
              <li>Role-based access control</li>
              <li>Improved mobile UI</li>
              <li>Server groupings/tags</li>
              <li>Enhanced status monitoring</li>
            </ul>
          </li>
          <li class="flex flex-col items-center w-1/3" style="transform: translateY(-20px);">
            <div class="flex flex-col items-center">
              <span class="inline-block w-7 h-7 rounded-full bg-accent-3 border-4 border-white shadow-lg mb-2"></span>
              <span class="font-semibold text-xl md:text-2xl text-white mb-2">v1.0 – General Availability</span>
            </div>
            <ul class="roadmap-panel">
              <li>Plugin marketplace</li>
              <li>Automated backups</li>
              <li>Multi-language support</li>
              <li>Extensive documentation</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed
</script>

<style scoped>
html, body, #app {
  overflow-x: hidden !important;
  overscroll-behavior-x: none !important;
  touch-action: pan-y !important;
}

.flex,
.flex-col,
.flex-row,
.relative,
.absolute {
  overscroll-behavior: none !important;
  /* Remove overflow: hidden here to allow panels to be fully visible */
}

/* Decorative background wrapper only */
.absolute.inset-0.pointer-events-none.overflow-hidden {
  overflow: hidden !important;
  z-index: 0;
}

.map-cross {
  font-size: 4.2rem;
  font-weight: bold;
  opacity: 0.18;
  filter: blur(1.2px);
  pointer-events: none;
  user-select: none;
}
.map-dot {
  font-size: 3.2rem;
  opacity: 0.12;
  filter: blur(1.5px);
  pointer-events: none;
  user-select: none;
}
.map-cross-xl {
  font-size: 11vw;
  opacity: 0.07;
  filter: blur(2.5px);
}
.map-dot-xl {
  font-size: 9vw;
  opacity: 0.05;
  filter: blur(3px);
}
@keyframes breath {
  0%, 100% { transform: scale(1); opacity: 0.15; }
  50% { transform: scale(1.08); opacity: 0.19; }
}
@keyframes breath-slow {
  0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.15; }
  50% { transform: scale(1.04) rotate(-3deg); opacity: 0.19; }
}
@keyframes pulse-dot {
  0%, 100% { transform: scale(1); opacity: 0.10; }
  50% { transform: scale(1.12); opacity: 0.14; }
}
.animate-breath { animation: breath 6.2s infinite; }
.animate-breath-slow { animation: breath-slow 10.4s infinite; }
.animate-pulse-dot { animation: pulse-dot 7.8s infinite; }
.swirl-animated {
  animation: swirl-dash-move 3.2s linear infinite;
}
@keyframes swirl-dash-move {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -84px; }
}
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
  max-width: 24rem;
  width: 100%;
  text-align: left;
  position: relative;
  z-index: 1;
}
.roadmap-panel:hover {
  transform: scale(1.035) translateY(-2px);
  box-shadow: 0 12px 36px 0 rgba(80,80,120,0.22), 0 2px 12px 0 rgba(80,80,120,0.13);
  background: linear-gradient(120deg, rgba(255,255,255,0.19) 60%, rgba(255,255,255,0.11) 100%);
}
@media (max-width: 900px) {
  ul.flex-row > li {
    width: 100% !important;
    margin-bottom: 3rem;
    transform: none !important;
  }
  ul.flex-row {
    flex-direction: column !important;
    align-items: stretch !important;
  }
  svg.absolute.top-0.left-0.w-full.h-full {
    height: 120px !important;
  }
}
</style>
