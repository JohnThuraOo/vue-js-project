import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CoursesView from '@/views/CoursesView.vue'
import RoadmapView from '@/views/RoadmapView.vue'
import BlogView from '@/views/BlogView.vue'
import LiveClassesView from '@/views/LiveClassesView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/courses', name: 'courses', component: CoursesView },
    { path: '/road-to-fullstack', name: 'roadmap', component: RoadmapView },
    { path: '/blog', name: 'blog', component: BlogView },
    { path: '/live-classes', name: 'live', component: LiveClassesView },
  ],
})

export default router
