<template>
  <div class="relative w-full min-h-screen bg-transparent">
    <DocsSidebar :sections="sections" :apiSpec="apiSpec" @navigate="scrollToSection"/>
    <main class="ml-0 md:ml-[320px] px-4 md:px-0 pt-10 pb-0 min-h-screen flex flex-col bg-transparent" style="min-height:100vh;">
      <div class="flex-1 w-full max-w-none bg-transparent">
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
    const docsRes = await fetch('/docs.json')
    if (!docsRes.ok) throw new Error('Failed to load docs.json')
    const docsJson = await docsRes.json()
    sections.value = docsJson
    // Load swagger.json
    const res = await fetch('/swagger.json')
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
