<template>
  <header class="fixed py-4 px-4 md:px-12 flex justify-between items-center bg-white/10 backdrop-blur-md shadow-lg  w-full z-40 overflow-hidden">
    <div class="flex items-center gap-3 z-10">
      <img src="/Logo_Plain_SVG.png" alt="Caddy Manager Logo" class="h-16 w-16" />
      <h1 class="text-2xl md:text-3xl font-extrabold text-white drop-shadow tracking-tight -ml-2">Caddy Manager</h1>
    </div>
    <button @click="toggleMobileMenu" class="md:hidden flex items-center justify-center p-2 rounded-lg text-white hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary z-50 transition-transform duration-200" aria-label="Open menu">
      <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
        <path stroke-linecap="round" stroke-width="2.5" d="M4 7h16M4 12h16M4 17h16"/>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
        <path stroke-linecap="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
    <nav class="hidden md:flex gap-2 md:gap-4 items-center">
      <router-link v-for="item in menuItems" :key="item.to" :to="item.to"
        class="px-4 py-2 rounded-lg font-semibold text-white hover:bg-primary/80 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-primary"
        :class="item.to === '/roadmap' ? 'hover:bg-accent-2/80 focus:ring-accent-2' : ''"
        active-class="bg-primary/90"
        exact-active-class="bg-primary/90"
      >
        {{ item.label }}
      </router-link>
      <a href="https://github.com/caddymanager/caddymanager" target="_blank" rel="noopener" class="ml-2 bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-primary-dark transition flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" class="octicon octicon-mark-github v-align-middle" fill="white">
          <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"/>
        </svg>
        GitHub
      </a>
    </nav>
    <!-- Mobile menu is now teleported -->
    <teleport to="body">
      <transition name="slide-fade">
        <nav v-if="mobileOpen" class="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center gap-8 z-50 md:hidden">
          <!-- Static black/80 background -->
          <div class="absolute inset-0 bg-black/80 z-50"></div>
          <router-link v-for="(item, i) in menuItems" :key="item.to" @click.native="closeMobileMenu" :to="item.to" class="text-2xl font-bold text-white px-8 py-4 rounded-lg hover:bg-primary/80 transition z-50 transform-gpu" :style="{ transitionDelay: (i * 60) + 'ms' }">
            {{ item.label }}
          </router-link>
          <a href="https://github.com/caddymanager/caddymanager" target="_blank" rel="noopener" class="bg-primary text-white px-8 py-4 rounded-lg font-bold shadow flex items-center gap-3 text-2xl hover:bg-primary-dark transition z-50 transform-gpu" style="transition-delay: 300ms;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" class="octicon octicon-mark-github v-align-middle" fill="white">
              <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"/>
            </svg>
            GitHub
          </a>
        </nav>
      </transition>
    </teleport>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
const mobileOpen = ref(false)
const menuItems = [
  { to: '/', label: 'Home' },
  { to: '/quick-start', label: 'Quick Start' },
  { to: '/docs', label: 'Docs' },
  { to: '/roadmap', label: 'Roadmap' },
]

function toggleMobileMenu() {
  mobileOpen.value = !mobileOpen.value
}
function closeMobileMenu() {
  mobileOpen.value = false
}
// Prevent background scroll when mobile menu is open
watch(mobileOpen, (open) => {
  if (open) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
.slide-fade-enter-active {
  transition: opacity 0.3s cubic-bezier(.4,0,.2,1), transform 0.4s cubic-bezier(.4,0,.2,1);
}
.slide-fade-leave-active {
  transition: opacity 0.2s cubic-bezier(.4,0,.2,1), transform 0.3s cubic-bezier(.4,0,.2,1);
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-40px) scale(0.98);
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-40px) scale(0.98);
}
header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  /* Ensure background SVG stays behind content */
}
</style>
