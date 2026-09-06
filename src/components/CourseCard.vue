<script setup>
defineProps({
  course: { type: Object, required: true },
})
</script>

<template>
  <article
    class="group flex h-full flex-col overflow-hidden rounded-[28px] apple-glass-card"
  >
    <!-- Card Cover with Vibrant Apple Gradient & Specular Light -->
    <div :class="['relative h-36 overflow-hidden bg-gradient-to-br', course.accent]">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.4),transparent_55%)]" />
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
      <div class="absolute bottom-3.5 left-4 right-4 flex items-end justify-between text-white">
        <span class="rounded-full border border-white/40 bg-white/20 px-3 py-1 text-[11px] font-semibold text-white shadow-sm backdrop-blur-md">
          {{ course.category }}
        </span>
        <div class="flex items-center gap-1 rounded-full border border-white/30 bg-black/20 px-2.5 py-0.5 backdrop-blur-md">
          <span class="text-amber-300 text-xs">★</span>
          <span class="font-display text-sm font-bold leading-none">{{ course.rating }}</span>
        </div>
      </div>
    </div>

    <!-- Glass Card Body -->
    <div class="flex flex-1 flex-col p-5">
      <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">{{ course.level }}</p>
      <h3 class="mt-1 font-display text-xl font-bold tracking-tight text-ink transition-colors group-hover:text-brand">
        {{ course.title }}
      </h3>
      <p class="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{{ course.blurb }}</p>

      <!-- Apple Glass Stat Chips -->
      <dl class="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
        <div class="apple-glass-chip rounded-xl p-2">
          <dt class="text-[10px] font-medium uppercase tracking-wider text-ink/45">Weeks</dt>
          <dd class="mt-0.5 font-bold text-ink">{{ course.duration }}</dd>
        </div>
        <div class="apple-glass-chip rounded-xl p-2">
          <dt class="text-[10px] font-medium uppercase tracking-wider text-ink/45">Lessons</dt>
          <dd class="mt-0.5 font-bold text-ink">{{ course.lessons }}</dd>
        </div>
        <div class="apple-glass-chip rounded-xl p-2">
          <dt class="text-[10px] font-medium uppercase tracking-wider text-ink/45">Learners</dt>
          <dd class="mt-0.5 font-bold text-ink">{{ course.students.toLocaleString() }}</dd>
        </div>
      </dl>

      <!-- Glass Footer Row -->
      <div class="mt-5 flex items-center justify-between border-t border-white/10 pt-3.5">
        <div>
          <p class="text-[11px] font-medium text-ink/45">{{ course.instructor }}</p>
          <p class="text-lg font-bold text-ink">${{ course.price }}</p>
        </div>
        <button
          type="button"
          class="apple-primary-btn rounded-full px-4 py-2 text-xs font-semibold text-white shadow-sm transition"
        >
          View class
        </button>
      </div>
    </div>
  </article>
</template>
