<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import CourseCard from '@/components/CourseCard.vue'
import LiveClassCard from '@/components/LiveClassCard.vue'
import { courses, liveClasses } from '@/data/catalog.js'

const featured = computed(() => courses.slice(0, 6))
const upcoming = computed(() => liveClasses.slice(0, 3))
</script>

<template>
  <section class="relative overflow-hidden pt-6 pb-16 lg:pb-24">
    <div class="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
      <div>
        <div class="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-brand backdrop-blur-md">
          <span class="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
          AI-Power Learning Platform
        </div>
        <h1 class="mt-4 font-display text-5xl font-extrabold leading-[1.06] tracking-tight text-ink md:text-6xl lg:text-[64px]">
          Master The <br><span class="violet-shimmer-text">Future of Coding</span>
        </h1>
        <p class="mt-5 max-w-xl text-lg font-normal leading-relaxed text-ink/65">
          Small cohorts, live rooms, and course cards you can actually scan. Pick a path, join a session, ship something this month.
        </p>
        <div class="mt-8 flex flex-wrap items-center gap-3.5">
          <RouterLink
            to="/courses"
            class="apple-primary-btn rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition"
          >
            Browse classes
          </RouterLink>
          <RouterLink
            to="/live-classes"
            class="apple-glass-pill-btn rounded-full px-6 py-3 text-sm font-semibold text-ink transition"
          >
            Tonight’s live rooms
          </RouterLink>
        </div>
        
        <!-- Apple Glass Stats Grid -->
        <dl class="mt-10 grid max-w-md grid-cols-3 gap-3">
          <div class="apple-glass-chip rounded-2xl p-3.5 text-center">
            <dt class="text-[11px] font-semibold uppercase tracking-wider text-ink/45">Classes</dt>
            <dd class="mt-1 font-display text-2xl font-bold tracking-tight text-ink">{{ courses.length }}</dd>
          </div>
          <div class="apple-glass-chip rounded-2xl p-3.5 text-center">
            <dt class="text-[11px] font-semibold uppercase tracking-wider text-ink/45">Live this week</dt>
            <dd class="mt-1 font-display text-2xl font-bold tracking-tight text-ink">{{ liveClasses.length }}</dd>
          </div>
          <div class="apple-glass-chip rounded-2xl p-3.5 text-center">
            <dt class="text-[11px] font-semibold uppercase tracking-wider text-ink/45">Mentors</dt>
            <dd class="mt-1 font-display text-2xl font-bold tracking-tight text-ink">8</dd>
          </div>
        </dl>
      </div>

      <!-- macOS Terminal Glass Featured Cohort Card -->
      <aside class="overflow-hidden rounded-[24px] border border-white/15 bg-slate-950/80 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-2xl">
        <!-- Mac Window Titlebar -->
        <div class="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-md">
          <!-- Traffic Lights -->
          <div class="flex items-center gap-2">
            <span class="h-3 w-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/60 shadow-sm" />
            <span class="h-3 w-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/60 shadow-sm" />
            <span class="h-3 w-3 rounded-full bg-[#27c93f] border border-[#1aab29]/60 shadow-sm" />
          </div>
          <!-- Terminal Title -->
          <div class="flex items-center gap-1.5 font-mono text-[11px] font-medium text-white/50">
            <svg class="h-3.5 w-3.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>studio@mac: ~/cohorts/vue-studio</span>
          </div>
          <!-- Spacer for symmetric centering -->
          <div class="w-12" />
        </div>

        <!-- Terminal Console Body -->
        <div class="p-6 font-mono text-xs">
          <!-- Command line -->
          <div class="flex items-center gap-2 text-white/70">
            <span class="text-emerald-400 font-bold">➜</span>
            <span class="text-cyan-300">~/cohorts/vue-studio</span>
            <span class="text-white/40">git:(<span class="text-purple-400">main</span>)</span>
            <span class="text-white/90">cat info.json</span>
          </div>

          <!-- Terminal Content Card -->
          <div class="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4.5 space-y-3">
            <div class="flex items-center justify-between">
              <span class="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 text-[11px] font-semibold text-emerald-300">
                <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                FEATURED COHORT
              </span>
              <span class="text-[11px] text-white/40">opens: friday</span>
            </div>

            <div>
              <p class="font-sans text-2xl font-bold tracking-tight text-white">Vue.js Studio</p>
              <p class="mt-1.5 font-sans text-xs leading-relaxed text-white/75">
                Eight weeks from first component to a published app. Next intake opens Friday.
              </p>
            </div>

            <!-- Terminal Key-Value Grid -->
            <div class="mt-4 grid grid-cols-2 gap-2.5 pt-1">
              <div class="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <p class="text-[10px] font-semibold uppercase tracking-wider text-cyan-300">Format</p>
                <p class="mt-0.5 font-sans text-xs font-semibold text-white">Cards + live lab</p>
              </div>
              <div class="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <p class="text-[10px] font-semibold uppercase tracking-wider text-purple-300">Level</p>
                <p class="mt-0.5 font-sans text-xs font-semibold text-white">Intermediate</p>
              </div>
            </div>
          </div>

          <!-- Terminal active command with blinking cursor -->
          <div class="mt-4 flex items-center gap-2 text-white/70">
            <span class="text-emerald-400 font-bold">➜</span>
            <span class="text-cyan-300">~/cohorts/vue-studio</span>
            <span class="text-white/90">enroll --open</span>
            <span class="inline-block h-3.5 w-2 rounded-sm bg-emerald-400 animate-pulse" />
          </div>
        </div>
      </aside>
    </div>
  </section>

  <!-- Courses Section -->
  <section class="mx-auto max-w-6xl px-5 py-6">
    <div class="mb-8 flex items-end justify-between gap-4">
      <div>
        <div class="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-brand backdrop-blur-md">
          Catalog
        </div>
        <h2 class="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">Every class, Start Learning</h2>
      </div>
      <RouterLink
        to="/courses"
        class="inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-semibold text-brand transition hover:bg-brand/10 active:scale-95"
      >
        All courses →
      </RouterLink>
    </div>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <CourseCard v-for="course in featured" :key="course.id" :course="course" />
    </div>
  </section>

  <!-- Live Classes Section -->
  <section class="mx-auto mt-16 max-w-6xl px-5 pb-12">
    <div class="mb-8">
      <div class="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-brand backdrop-blur-md">
        This week
      </div>
      <h2 class="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">Live classes</h2>
    </div>
    <div class="grid gap-6 md:grid-cols-3">
      <LiveClassCard v-for="session in upcoming" :key="session.id" :session="session" />
    </div>
  </section>
</template>
