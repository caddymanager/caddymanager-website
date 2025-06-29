import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import QuickStart from './pages/QuickStart.vue'
import Docs from './pages/Docs.vue'
import Roadmap from './pages/Roadmap.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/quick-start', name: 'QuickStart', component: QuickStart },
  { path: '/docs', name: 'Docs', component: Docs },
  { path: '/roadmap', name: 'Roadmap', component: Roadmap },
]

const router = createRouter({
  history: createWebHashHistory('/'), // Use hash mode for GitHub Pages
  routes,
})

export default router
