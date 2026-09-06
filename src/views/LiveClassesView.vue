<script setup>
import LiveClassCard from '@/components/LiveClassCard.vue'
import { liveClasses } from '@/data/catalog.js'
</script>

<template>
  <section class="mx-auto max-w-6xl px-5 py-12">
    <div>
      <div class="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand backdrop-blur-md">
        Live Classes
      </div>
      <h1 class="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
        Rooms that open on the hour.
      </h1>
      <p class="mt-3 max-w-2xl text-base leading-relaxed text-ink/65">
        Join a live session as a card on the board. Reserve a seat, show up with a question, leave with a working sketch.
      </p>
    </div>
    <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
      <LiveClassCard v-for="session in liveClasses" :key="session.id" :session="session" />
    </div>
  </section>
</template>
