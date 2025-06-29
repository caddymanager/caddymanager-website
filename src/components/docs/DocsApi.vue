<template>
  <div v-if="apiSpec">
    <div v-for="(pathItem, path) in apiSpec.paths" :key="path" class="mb-8 text-left">
      <div class="bg-white/5 rounded-lg p-4 md:p-6 shadow border border-white/10 text-left">
        <h4 class="text-lg font-bold text-accent-1-dark mb-2 text-left">{{ path }}</h4>
        <div v-for="(method, methodName) in pathItem" :key="methodName"
          :id="`api-${methodName}-${path}`.replace(/[^a-zA-Z0-9-_]/g, '_')"
          class="mb-6 text-left scroll-mt-32">
          <span class="inline-block bg-primary/80 text-white px-2 py-1 rounded text-xs font-mono uppercase mr-2">{{ methodName }}</span>
          <span class="font-semibold text-white/90">{{ method.summary || method.operationId || 'No summary' }}</span>
          <div v-if="method.description" class="text-white/70 text-sm mt-1" v-html="method.description"></div>
          <div v-if="method.parameters && method.parameters.length" class="mt-1">
            <span class="font-semibold text-xs text-white/80">Parameters:</span>
            <ul class="list-disc list-inside ml-4">
              <li v-for="param in method.parameters" :key="param.name" class="text-white/80">
                <span class="font-mono text-xs text-white/90">{{ param.name }}</span>
                <span class="text-xs text-white/60">({{ param.in }})</span>
                <span class="text-xs text-white/80">- {{ param.description }}</span>
              </li>
            </ul>
          </div>
          <div class="mt-3">
            <span class="font-semibold text-xs text-white/80">Example Query:</span>
            <pre class="bg-black/60 text-white/80 rounded p-3 mt-1 text-xs overflow-x-auto"><code>{{ exampleQuery(methodName, path, method) }}</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-white/60 italic text-left">No API spec found.</div>
</template>

<script setup>
const props = defineProps({
  apiSpec: Object
})

function exampleQuery(methodName, path, method) {
  // Basic example for GET/DELETE: curl, for POST/PUT: curl with -X and -d
  let url = `http://localhost:3000${path.replace(/\{([^}]+)\}/g, ':$1')}`;
  let curl = `curl -X ${methodName.toUpperCase()} "${url}" \\\n  -H \"x-api-key: YOUR_API_KEY_HERE\"`;
  if (["post", "put", "patch"].includes(methodName.toLowerCase())) {
    curl +=
      ' \\\n  -H "Content-Type: application/json" \\\n  -d "{}"';
  }
  return curl;
}
</script>
