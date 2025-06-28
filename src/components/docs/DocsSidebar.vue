<template>
  <!-- Desktop Sidebar -->
  <nav class="hidden md:flex fixed left-6 mt-14 top-8 md:left-8 md:top-8 w-[270px] md:w-72 bg-white/10 shadow-2xl z-30 flex-col p-0 rounded-2xl border border-white/20 backdrop-blur-lg custom-scrollbar"
    style="height:calc(100vh - 86px - 32px);">
    <div class="p-4 border-b border-white/10 text-left">
      <input v-model="search" type="text" placeholder="Search docs or API..." class="w-full px-3 py-2 rounded bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary" />
    </div>
    <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-2 text-left custom-scrollbar">
      <button v-for="section in filteredSections" :key="section.id" @click="handleNavigate(section.id)"
        :class="['text-left px-3 py-2 rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-primary w-full',
          activeSection === section.id ? 'bg-primary/90 text-white/80' : 'hover:bg-primary/80 text-white/80 hover:text-white']">
        {{ section.title }}
      </button>
      <div v-if="apiSpec && apiSpec.paths">
        <button @click="toggleApiMenu" class="text-left px-3 py-2 rounded-lg font-semibold hover:bg-primary/80 transition focus:outline-none focus:ring-2 focus:ring-primary w-full flex items-center justify-between text-white/80 hover:text-white">
          API Reference
          <span>{{ apiMenuOpen ? '▲' : '▼' }}</span>
        </button>
        <div v-if="apiMenuOpen" class="ml-2 mt-2 flex flex-col gap-2 pr-1">
          <template v-for="entry in apiSidebarEntries" :key="entry.id">
            <button @click="handleNavigate(entry.id)"
              :class="['text-left px-3 py-2 rounded-md bg-white/20 hover:bg-accent-1-dark/40 text-xs font-mono w-full truncate border border-white/10 shadow-sm transition-all duration-150 min-h-[40px] flex items-center gap-2',
                activeSection === entry.id ? 'bg-primary/90 text-white/80' : 'text-white/80 hover:text-white']"
              :title="entry.path">
              <span :class="['uppercase font-bold px-1.5 py-0.5 rounded mr-1', methodColor(entry.method)]">{{ entry.method }}</span>
              <span class="truncate">{{ entry.path }}</span>
            </button>
          </template>
        </div>
      </div>
    </div>
  </nav>

  <!-- Mobile Sidebar Button -->
  <button class="fixed bottom-6 left-6 z-40 md:hidden bg-primary text-white px-5 py-3 rounded-full shadow-lg font-bold flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary" @click="mobileOpen = true" aria-label="Open docs menu">
    <!-- Hamburger icon -->
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
    Docs Menu
  </button>

  <!-- Mobile Sidebar Drawer -->
  <transition name="slide-fade">
    <div v-if="mobileOpen" class="fixed inset-0 z-50 flex md:hidden">
      <div class="absolute inset-0 bg-black/70" @click="mobileOpen = false"></div>
      <nav class="relative w-80 max-w-[90vw] h-full bg-white/10 shadow-2xl flex flex-col p-0 rounded-r-2xl border border-white/20 backdrop-blur-lg custom-scrollbar animate-slide-in-left">
        <div class="flex items-center justify-between p-4 border-b border-white/10">
          <span class="font-bold text-white text-lg">Docs Menu</span>
          <button @click="mobileOpen = false" class="text-white text-2xl px-2 py-1 rounded hover:bg-white/20 focus:outline-none">&times;</button>
        </div>
        <div class="p-4 border-b border-white/10 text-left">
          <input v-model="search" type="text" placeholder="Search docs or API..." class="w-full px-3 py-2 rounded bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-2 text-left custom-scrollbar">
          <button v-for="section in filteredSections" :key="section.id" @click="navigateMobile(section.id)"
            :class="['text-left px-3 py-2 rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-primary w-full',
              activeSection === section.id ? 'bg-primary/90 text-white/80' : 'hover:bg-primary/80 text-white/80 hover:text-white']">
            {{ section.title }}
          </button>
          <div v-if="apiSpec && apiSpec.paths">
            <button @click="toggleApiMenu" class="text-left px-3 py-2 rounded-lg font-semibold hover:bg-primary/80 transition focus:outline-none focus:ring-2 focus:ring-primary w-full flex items-center justify-between text-white/80 hover:text-white">
              API Reference
              <span>{{ apiMenuOpen ? '▲' : '▼' }}</span>
            </button>
            <div v-if="apiMenuOpen" class="ml-2 mt-2 flex flex-col gap-2 pr-1">
              <template v-for="entry in apiSidebarEntries" :key="entry.id">
                <button @click="navigateMobile(entry.id)"
                  :class="['text-left px-3 py-2 rounded-md bg-white/20 hover:bg-accent-1-dark/40 text-xs font-mono w-full truncate border border-white/10 shadow-sm transition-all duration-150 min-h-[40px] flex items-center gap-2',
                    activeSection === entry.id ? 'bg-primary/90 text-white/80' : 'text-white/80 hover:text-white']"
                  :title="entry.path">
                  <span :class="['uppercase font-bold px-1.5 py-0.5 rounded mr-1', methodColor(entry.method)]">{{ entry.method }}</span>
                  <span class="truncate">{{ entry.path }}</span>
                </button>
              </template>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'
const props = defineProps({
  sections: Array,
  apiSpec: Object
})
const apiMenuOpen = ref(false)
const search = ref('')
const activeSection = ref(null)
const mobileOpen = ref(false)
function toggleApiMenu() {
  apiMenuOpen.value = !apiMenuOpen.value
}
watch(() => props.apiSpec, () => { apiMenuOpen.value = false })
const filteredSections = computed(() => {
  if (!search.value) return props.sections
  return props.sections.filter(s => s.title.toLowerCase().includes(search.value.toLowerCase()))
})
const filteredApiPaths = computed(() => {
  if (!props.apiSpec || !props.apiSpec.paths) return []
  if (!search.value) return Object.keys(props.apiSpec.paths)
  return Object.keys(props.apiSpec.paths).filter(p => p.toLowerCase().includes(search.value.toLowerCase()))
})
// Sidebar entries: one per method+path
const apiSidebarEntries = computed(() => {
  if (!props.apiSpec || !props.apiSpec.paths) return []
  let entries = []
  let paths = filteredApiPaths.value
  for (const path of paths) {
    const methods = Object.keys(props.apiSpec.paths[path])
    for (const method of methods) {
      entries.push({
        id: `api-${method}-${path}`.replace(/[^a-zA-Z0-9-_]/g, '_'),
        method: method.toUpperCase(),
        path
      })
    }
  }
  return entries
})
// Listen for navigation events to set active section
function setActiveSection(id) {
  activeSection.value = id
}
const emit = defineEmits(['navigate'])
defineExpose({ setActiveSection })
// Color for HTTP method badges
function methodColor(method) {
  switch (method.toLowerCase()) {
    case 'get': return 'bg-green-600 text-white';
    case 'post': return 'bg-blue-600 text-white';
    case 'put': return 'bg-yellow-600 text-white';
    case 'patch': return 'bg-purple-600 text-white';
    case 'delete': return 'bg-red-600 text-white';
    default: return 'bg-gray-500 text-white';
  }
}
// Scroll to section on navigation (for API docs and regular sections)
function scrollToSection(id) {
  nextTick(() => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}
// Listen for navigation events and scroll
watch(
  () => activeSection.value,
  (id) => {
    if (id) scrollToSection(id)
  }
)
// Update navigation handlers to set active section and emit
function handleNavigate(id) {
  setActiveSection(id)
  emit('navigate', id)
}
function navigateMobile(id) {
  setActiveSection(id)
  mobileOpen.value = false
  emit('navigate', id)
}
</script>

<style scoped>
@media (max-width: 900px) {
  nav.md\:flex { display: none !important; }
}
@keyframes slide-in-left {
  0% { transform: translateX(-100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}
.animate-slide-in-left {
  animation: slide-in-left 0.32s cubic-bezier(.4,0,.2,1);
}
.custom-scrollbar::-webkit-scrollbar {
  width: 10px;
  background: transparent;
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
}
</style>
