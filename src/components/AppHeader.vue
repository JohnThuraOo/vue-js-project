<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const links = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/road-to-fullstack', label: 'Road To Fullstack' },
  { to: '/blog', label: 'Blog' },
  { to: '/live-classes', label: 'Live Classes' },
]
</script>

<template>
  <header class="sticky top-0 z-40 px-3 sm:px-6 pt-3 transition-all duration-300">
    <div
      class="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-[24px] border border-white/15 bg-slate-900/60 px-4 py-2.5 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl backdrop-saturate-200 transition-all"
    >
      <RouterLink to="/" class="group flex items-center gap-2.5 transition active:scale-95">
        <img
          src="/logo.svg"
          alt="Creative Coder Logo"
          class="h-9 w-9 rounded-xl shadow-[0_4px_14px_rgba(56,189,248,0.35)] transition group-hover:scale-105"
        />
        <span class="leading-tight">
          <span class="block text-sm font-semibold tracking-tight text-white">Creative Coder</span>
          <span class="block text-[11px] font-medium text-white/50">Studio classroom</span>
        </span>
      </RouterLink>

      <!-- Apple Segmented Control Navigation - Dark Glass -->
      <nav class="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] p-1 backdrop-blur-md md:flex">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200"
          :class="
            route.path === link.to
              ? 'border border-white/20 bg-white/15 text-white shadow-[0_2px_8px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.25)] font-semibold'
              : 'text-white/70 hover:bg-white/10 hover:text-white'
          "
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <a
        href="#contact"
        class="apple-primary-btn hidden rounded-full px-4 py-1.5 text-xs font-medium text-white md:inline-flex"
      >
        Enroll
      </a>
    </div>

    <!-- Mobile Navigation Bar - Dark Glass -->
    <nav class="mt-2 flex gap-1.5 overflow-x-auto rounded-2xl border border-white/15 bg-slate-900/65 p-1.5 shadow-sm backdrop-blur-xl md:hidden">
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition"
        :class="
          route.path === link.to
            ? 'apple-primary-btn text-white'
            : 'text-white/70 hover:bg-white/10'
        "
      >
        {{ link.label }}
      </RouterLink>
    </nav>
  </header>
</template>
