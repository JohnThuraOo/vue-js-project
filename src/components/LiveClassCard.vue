<script setup>
defineProps({
  session: { type: Object, required: true },
})
</script>

<template>
  <article
    class="apple-glass-card group flex h-full flex-col rounded-[28px] p-6"
  >
    <div class="flex items-start justify-between gap-3">
      <span :class="['rounded-full border border-white/30 bg-gradient-to-r px-3 py-1 text-[11px] font-semibold text-white shadow-sm', session.accent]">
        {{ session.tag }}
      </span>
      <span class="inline-flex items-center gap-1.5 rounded-full border border-rose-500/20 bg-rose-500/10 px-2.5 py-0.5 text-xs font-semibold text-rose-600 backdrop-blur-md">
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
          <span class="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
        </span>
        Live
      </span>
    </div>

    <h3 class="mt-4 font-display text-xl font-bold tracking-tight text-ink transition-colors group-hover:text-brand">
      {{ session.title }}
    </h3>
    <p class="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{{ session.blurb }}</p>

    <!-- Apple Glass Session Details Widget -->
    <div class="apple-glass-chip mt-5 rounded-2xl p-3.5 space-y-1.5 text-xs font-medium text-ink/75">
      <div class="flex items-center justify-between">
        <span class="text-ink/45">Date & Time</span>
        <span class="font-semibold text-ink">{{ session.date }} · {{ session.time }}</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-ink/45">Duration</span>
        <span class="font-semibold text-ink">{{ session.duration }} with {{ session.host }}</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-ink/45">Seats</span>
        <span class="font-semibold text-brand">{{ session.seats }} remaining</span>
      </div>
    </div>

    <button
      type="button"
      class="apple-primary-btn mt-6 w-full rounded-full py-2.5 text-xs font-semibold text-white shadow-sm transition"
    >
      Reserve a seat
    </button>
  </article>
</template>
