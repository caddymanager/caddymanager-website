<template>
  <header class="fixed py-4 px-4 md:px-12 flex justify-between items-center bg-white/10 backdrop-blur-md shadow-lg rounded-b-xl w-full z-40">
    <div class="flex items-center gap-3">
      <img src="https://caddyserver.com/resources/images/caddy-circle.svg" alt="Caddy Logo" class="h-10 w-10 bg-white/80 rounded-full p-1 shadow" />
      <h1 class="text-2xl md:text-3xl font-extrabold text-white drop-shadow tracking-tight">Caddy Manager</h1>
    </div>
    <nav class="flex gap-2 md:gap-4 items-center">
      <router-link to="/" class="px-4 py-2 rounded-lg font-semibold text-white hover:bg-primary/80 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-primary" active-class="bg-primary/90">Home</router-link>
      <router-link to="/quick-start" class="px-4 py-2 rounded-lg font-semibold text-white hover:bg-primary/80 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-primary" active-class="bg-primary/90">Quick Start</router-link>
      <router-link to="/docs" class="px-4 py-2 rounded-lg font-semibold text-white hover:bg-primary/80 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-primary" active-class="bg-primary/90">Docs</router-link>
      <router-link to="/roadmap" class="px-4 py-2 rounded-lg font-semibold text-white hover:bg-accent-2/80 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-accent-2" active-class="bg-accent-2/90">Roadmap</router-link>
      <a href="https://github.com/caddymanager/caddymanager" target="_blank" rel="noopener" class="ml-2 bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-primary-dark transition flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
        GitHub
      </a>
    </nav>
  </header>
</template>

<script setup>
// No script needed
</script>
