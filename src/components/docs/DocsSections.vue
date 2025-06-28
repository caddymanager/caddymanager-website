<template>
  <div>
    <div v-for="section in sectionsSorted" :key="section.id" :id="section.id" class="mb-16 scroll-mt-32 text-left">
      <div class="flex items-center mb-2">
        <span v-if="section.icon" class="mr-2 text-2xl">{{ section.icon }}</span>
        <h3 class="text-2xl font-bold text-white drop-shadow border-b border-white/20 pb-2 text-left flex-1 mb-0">{{ section.title }}</h3>
      </div>
      <div v-if="section.description" class="text-white/70 text-base mb-2">{{ section.description }}</div>
      <div class="bg-white/5 rounded-lg p-4 md:p-6 shadow border border-white/10 text-left text-white/90 text-base md:text-lg leading-relaxed">
        <div v-html="formatContent(section.content)" class="prose prose-invert max-w-none"></div>
        <div v-if="section.links && section.links.length" class="mt-4 flex flex-wrap gap-2">
          <a v-for="link in section.links" :key="link.url" :href="link.url" target="_blank" rel="noopener" class="inline-block bg-primary/80 hover:bg-primary-dark text-white px-3 py-1 rounded shadow text-sm font-semibold transition">
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  sections: Array
})
// Sort by 'order' if present
const sectionsSorted = computed(() => {
  return [...props.sections].sort((a, b) => (a.order || 0) - (b.order || 0))
})
// Custom formatter to style <pre> and <code> blocks like DocsApi
function formatContent(content) {
  if (!content) return ''
  // Style <pre> blocks
  content = content.replace(/<pre(.*?)><code(.*?)>/g, '<pre class="bg-black/60 text-white/80 rounded p-3 mt-1 text-xs overflow-x-auto"$1><code$2>')
  // Style inline <code> blocks
  content = content.replace(/<code>(.*?)<\/code>/g, '<code class="bg-black/60 text-white/80 rounded px-2 py-1 text-xs font-mono">$1</code>')
  return content
}
</script>

<style scoped>
.prose pre,
.prose code,
pre,
code {
  background: none !important;
  color: inherit !important;
  border-radius: 0.5rem;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
}
</style>
