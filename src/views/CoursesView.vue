<script setup>
import { computed, ref } from 'vue'
import CourseCard from '@/components/CourseCard.vue'
import { courses } from '@/data/catalog.js'

const filter = ref('All')
const categories = ['All', ...new Set(courses.map((c) => c.category))]

const visible = computed(() =>
  filter.value === 'All' ? courses : courses.filter((c) => c.category === filter.value),
)
</script>

<template>
  <section class="mx-auto max-w-6xl px-5 py-12">
    <div>
      <div class="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand backdrop-blur-md">
        Courses
      </div>
      <h1 class="mt-3 font-display text-4xl font-extrabold tracking-tight text-brand sm:text-5xl">
        Creative Coder's <br> Courses
      </h1>
      <p class="mt-3 max-w-2xl text-base leading-relaxed text-ink/65">
        Every offering is a single card: level, length, lessons, and who teaches it. Filter by studio.
      </p>
    </div>

    <!-- Apple Segmented Control Filter Bar - Dark Glass -->
    <div class="mt-8 inline-flex flex-wrap items-center gap-1 rounded-full border border-white/15 bg-white/[0.05] p-1 shadow-sm backdrop-blur-xl">
      <button
        v-for="cat in categories"
        :key="cat"
        type="button"
        class="rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 active:scale-95"
        :class="
          filter === cat
            ? 'border border-white/20 bg-white/15 font-semibold text-white shadow-[0_2px_8px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.25)]'
            : 'text-white/70 hover:bg-white/10 hover:text-white'
        "
        @click="filter = cat"
      >
        {{ cat }}
      </button>
    </div>

    <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <CourseCard v-for="course in visible" :key="course.id" :course="course" />
    </div>
  </section>
</template>
