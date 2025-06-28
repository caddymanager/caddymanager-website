<template>
  <div class="relative flex flex-col items-center justify-center min-h-[60vh] text-center overflow-hidden">
    <!-- Animated SVG background -->
    <svg class="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1200 600" fill="none">
      <g>
        <circle cx="200" cy="120" r="60" fill="url(#grad1)" opacity="0.18">
          <animate attributeName="r" values="60;80;60" dur="6s" repeatCount="indefinite"/>
        </circle>
        <circle cx="1000" cy="500" r="40" fill="url(#grad2)" opacity="0.13">
          <animate attributeName="r" values="40;60;40" dur="7s" repeatCount="indefinite"/>
        </circle>
        <path d="M100 400 Q300 300 600 350 T1100 200" stroke="url(#grad3)" stroke-width="3" stroke-dasharray="12 10" stroke-linecap="round" opacity="0.16">
          <animate attributeName="stroke-dashoffset" values="0;44" dur="8s" repeatCount="indefinite"/>
        </path>
      </g>
      <defs>
        <radialGradient id="grad1" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stop-color="#c33c54"/>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="grad2" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stop-color="#3a3a5d"/>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="grad3" x1="100" y1="400" x2="1100" y2="200" gradientUnits="userSpaceOnUse">
          <stop stop-color="#c33c54"/>
          <stop offset="1" stop-color="#3a3a5d"/>
        </linearGradient>
      </defs>
    </svg>
    <!-- Animated floating badge -->
    <div class="z-10 flex items-center justify-center mb-2">
      <span class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/80 shadow-lg animate-float-badge">
        <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
          <circle cx="14" cy="14" r="13" stroke="#fff" stroke-width="2" opacity="0.5"/>
          <path d="M8 14l4 4 8-8" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </div>
    <h2 class="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow z-10">Quick Start</h2>
    <ol class="roadmap-panel animate-breathing z-10">
      <li><span class="font-semibold">1.</span> Clone the repo: <code class="bg-black/40 px-2 py-1 rounded">git clone https://github.com/caddymanager/caddymanager.git</code></li>
      <li><span class="font-semibold">2.</span> Follow the README instructions to install dependencies and start the manager.</li>
      <li><span class="font-semibold">3.</span> Access the dashboard and start managing your Caddy server!</li>
    </ol>
    <a href="https://github.com/caddymanager/caddymanager" target="_blank" rel="noopener" class="mt-8 inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition shadow focus:outline-none focus:ring-2 focus:ring-primary/60 animate-glow z-10">View Full Docs</a>
    <Footer />
  </div>
</template>

<script setup>
// No script needed
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
  margin-bottom: 2rem;
}
.roadmap-panel:hover {
  transform: scale(1.035) translateY(-2px);
  box-shadow: 0 12px 36px 0 rgba(80,80,120,0.22), 0 2px 12px 0 rgba(80,80,120,0.13);
  background: linear-gradient(120deg, rgba(255,255,255,0.19) 60%, rgba(255,255,255,0.11) 100%);
}
@keyframes breathing {
  0%, 100% { box-shadow: 0 8px 32px 0 rgba(40,40,80,0.18), 0 1.5px 8px 0 rgba(80,80,120,0.10); }
  50% { box-shadow: 0 16px 48px 0 rgba(195,60,84,0.22), 0 3px 16px 0 rgba(80,80,120,0.16); }
}
.animate-breathing {
  animation: breathing 4.5s cubic-bezier(.4,2,.6,1) infinite;
}
@keyframes float-badge {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px) scale(1.07); }
}
.animate-float-badge {
  animation: float-badge 3.2s ease-in-out infinite;
}
@keyframes glow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(195,60,84,0.18); }
  50% { box-shadow: 0 0 16px 4px rgba(195,60,84,0.32); }
}
.animate-glow {
  animation: glow 2.8s ease-in-out infinite;
}
</style>
