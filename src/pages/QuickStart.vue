<template>
  <div class="relative flex flex-col items-center justify-center min-h-[60vh] text-center overflow-hidden mt-10">
    <h2 class="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow z-10">Get a head start using Docker!</h2>
    <div class="mt-8 w-full max-w-2xl mx-auto z-10 roadmap-panel-glass">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-xl md:text-2xl font-bold text-white drop-shadow">Docker Compose Stack</h3>
        <button @click="copyCompose" class="ml-4 px-3 py-1.5 rounded bg-primary text-white text-xs font-semibold shadow hover:bg-primary-dark transition focus:outline-none focus:ring-2 focus:ring-primary/60">
          Copy
        </button>
      </div>
      <pre class="docker-pre cursor-pointer" @click="copyCompose"><code v-html="dockerCompose"></code></pre>
      <transition name="fade">
        <div v-if="showCopied" class="fixed left-1/2 top-8 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded shadow-lg z-50 text-base font-semibold animate-glow">
          Copied to clipboard!
        </div>
      </transition>
    </div>
    <RouterLink to="/docs" class="mt-8 inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition shadow focus:outline-none focus:ring-2 focus:ring-primary/60 animate-glow z-10">View Full Docs</RouterLink>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Footer from '../components/Footer.vue'
import { RouterLink } from 'vue-router'

const dockerCompose = ref('')
const showCopied = ref(false)

function stripHtmlEntities(str) {
  // Replace HTML entities with their actual characters
  return str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
            .replace(/&nbsp;/g, ' ')
}

async function copyCompose() {
  if (!dockerCompose.value) return
  // Remove HTML tags and decode entities
  const text = stripHtmlEntities(dockerCompose.value.replace(/<[^>]+>/g, ''))
  await navigator.clipboard.writeText(text)
  showCopied.value = true
  setTimeout(() => { showCopied.value = false }, 1800)
}

onMounted(async () => {
  try {
    const res = await fetch('/src/assets/docs.json')
    if (!res.ok) throw new Error('Failed to load docs.json')
    const docs = await res.json()
    const dockerSection = docs.find(s => s.id === 'docker-compose')
    if (dockerSection && dockerSection.content) {
      // Extract code block from HTML content
      const match = dockerSection.content.match(/<code>([\s\S]*?)<\/code>/)
      dockerCompose.value = match ? match[1] : 'Not found.'
    } else {
      dockerCompose.value = 'Not found.'
    }
  } catch (e) {
    dockerCompose.value = 'Error loading Docker Compose stack.'
  }
})
</script>

<style scoped>
.roadmap-panel-glass {
  background: linear-gradient(120deg, rgba(255,255,255,0.13) 60%, rgba(255,255,255,0.07) 100%);
  border-radius: 1.25rem;
  border: 1.5px solid rgba(255,255,255,0.18);
  box-shadow: 0 8px 32px 0 rgba(40,40,80,0.18), 0 1.5px 8px 0 rgba(80,80,120,0.10);
  backdrop-filter: blur(12px) saturate(1.2);
  -webkit-backdrop-filter: blur(12px) saturate(1.2);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  margin-top: 0.5rem;
  color: #fff;
  font-size: 1.08rem;
  font-weight: 500;
  transition: transform 0.32s cubic-bezier(.4,2,.6,1), box-shadow 0.32s, background 0.32s;
  max-width: 32rem;
  width: 100%;
  text-align: left;
  position: relative;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
}
.roadmap-panel-glass:hover {
  transform: scale(1.025) translateY(-2px);
  box-shadow: 0 12px 36px 0 rgba(80,80,120,0.22), 0 2px 12px 0 rgba(80,80,120,0.13);
  background: linear-gradient(120deg, rgba(255,255,255,0.19) 60%, rgba(255,255,255,0.11) 100%);
}
.docker-pre {
  background: transparent;
  color: #fff;
  font-size: 0.98rem;
  font-family: 'Fira Mono', 'Menlo', 'Monaco', 'Consolas', monospace;
  padding: 0;
  margin: 0;
  border: none;
  box-shadow: none;
  overflow-x: auto;
  white-space: pre;
  line-height: 1.6;
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
