<template>
  <div class="relative w-full min-h-screen bg-transparent">
    <DocsSidebar :sections="sections" :apiSpec="apiSpec" @navigate="scrollToSection"/>
    <main class="ml-0 md:ml-[320px] px-4 md:px-0 pt-10 pb-0 min-h-screen flex flex-col bg-transparent" style="min-height:100vh;">
      <div class="flex-1 w-full max-w-none bg-transparent">
    <!-- Early Development Warning Banner -->
    <div class="w-full flex items-center justify-center px-2 py-4 bg-yellow-400/90 text-yellow-900 font-semibold text-base md:text-lg shadow-lg rounded-xl z-50 mb-4 border-b-2 border-yellow-500 gap-3">
      <svg class="w-6 h-6 flex-shrink-0 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      <span>
        <strong>Caution:</strong> CaddyManager is in early development. Please <u>backup your Caddy configurations</u> and data before testing. Use at your own risk.
      </span>
    </div>
        <DocsSections :sections="sections" />
        <div id="api" class="mb-16 scroll-mt-32 text-left">
          <h3 class="text-2xl font-bold mb-4 text-white drop-shadow text-left">API Reference</h3>
          <DocsApi :apiSpec="apiSpec" />
        </div>
      </div>
      <Footer />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DocsSidebar from '../components/docs/DocsSidebar.vue'
import DocsSections from '../components/docs/DocsSections.vue'
import DocsApi from '../components/docs/DocsApi.vue'
import Footer from '../components/Footer.vue'

const sections = ref([])
const apiSpec = ref(null)
const apiLoading = ref(true)
const apiError = ref(null)

onMounted(async () => {
  try {
    // Load docs.json
    const docsRes = await fetch(import.meta.env.BASE_URL + 'docs.json')
    if (!docsRes.ok) throw new Error('Failed to load docs.json')
    const docsJson = await docsRes.json()
    sections.value = docsJson
    // Load swagger.json
    const res = await fetch(import.meta.env.BASE_URL + 'swagger.json')
    if (!res.ok) throw new Error('Failed to load API spec')
    const json = await res.json()
    if (Object.keys(json).length === 0) {
      apiSpec.value = null
    } else {
      apiSpec.value = json
    }
  } catch (e) {
    apiError.value = e.message
  } finally {
    apiLoading.value = false
  }
})

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>
