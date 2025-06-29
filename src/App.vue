<template>
  <div class="min-h-screen flex flex-col breathing-background-gentle custom-scrollbar scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
    <Navbar />
    <main
      class="flex-1 flex flex-col items-center justify-center text-center px-4 w-full custom-scrollbar scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent"
      :style="{ paddingTop: 'var(--navbar-height, 8rem)' }"
    >
      <keep-alive include="Docs">
        <router-view />
      </keep-alive>
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style scoped>
.router-link-exact-active {
  background: rgba(195, 60, 84, 0.9);
  color: #fff;
}
.custom-scrollbar::-webkit-scrollbar {
  width: 12px;
  background: #23233a;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #c33c54 40%, #3a3a5d 100%);
  border-radius: 8px;
  border: 2px solid rgba(255,255,255,0.15);
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #e94e77 40%, #4b4b7d 100%);
}
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #c33c54 #23233a;
  color-scheme: dark;
}
:root {
  --navbar-height: 8rem;
}
@media (max-width: 640px) {
  :root {
    --navbar-height: 4.5rem;
  }
}
</style>
