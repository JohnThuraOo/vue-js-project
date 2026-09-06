<script setup>
import { ref } from 'vue'

const open = ref(false)
const sent = ref(false)
const form = ref({ name: '', email: '', message: '' })

function submit() {
  if (!form.value.name || !form.value.email || !form.value.message) return
  sent.value = true
}

function close() {
  open.value = false
  sent.value = false
  form.value = { name: '', email: '', message: '' }
}
</script>

<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
    <transition
      enter-active-class="transition duration-250 cubic-bezier(0.16, 1, 0.3, 1)"
      enter-from-class="translate-y-4 opacity-0 scale-95"
      enter-to-class="translate-y-0 opacity-100 scale-100"
      leave-active-class="transition duration-180 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="translate-y-3 opacity-0 scale-95"
    >
      <!-- Apple Control Center / Quick Note Frosted Dark Glass Window -->
      <section
        v-if="open"
        id="contact"
        class="w-[min(22rem,calc(100vw-2.5rem))] overflow-hidden rounded-[28px] border border-white/15 bg-slate-900/85 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.6),inset_0_1px_1px_0_rgba(255,255,255,0.2)] backdrop-blur-2xl backdrop-saturate-200"
      >
        <header class="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-5 py-3.5 backdrop-blur-md">
          <div>
            <p class="text-xs font-semibold text-white">Talk with Creative Coder</p>
            <p class="text-[11px] text-white/50">We reply within one business day</p>
          </div>
          <button
            type="button"
            class="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-xs text-white/70 transition hover:bg-white/20 active:scale-90"
            aria-label="Close contact"
            @click="close"
          >
            ✕
          </button>
        </header>

        <form v-if="!sent" class="space-y-3 p-5" @submit.prevent="submit">
          <div>
            <input
              v-model="form.name"
              type="text"
              required
              placeholder="Your name"
              class="apple-glass-input w-full rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-white/40 outline-none"
            />
          </div>
          <div>
            <input
              v-model="form.email"
              type="email"
              required
              placeholder="Email address"
              class="apple-glass-input w-full rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-white/40 outline-none"
            />
          </div>
          <div>
            <textarea
              v-model="form.message"
              required
              rows="4"
              placeholder="What would you like to learn?"
              class="apple-glass-input w-full resize-none rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-white/40 outline-none"
            />
          </div>
          <button
            type="submit"
            class="apple-primary-btn w-full rounded-full py-2.5 text-xs font-semibold text-white shadow-sm transition active:scale-98"
          >
            Send message
          </button>
        </form>

        <div v-else class="p-6 text-center">
          <div class="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full bg-emerald-500/20 text-emerald-400">
            ✓
          </div>
          <p class="font-semibold text-white text-sm">Message Sent</p>
          <p class="mt-1 text-xs leading-relaxed text-white/65">
            Thanks — your note is in. A mentor will write back soon.
          </p>
        </div>
      </section>
    </transition>

    <!-- Apple Specular Floating Action Button -->
    <button
      type="button"
      class="apple-primary-btn flex h-13 w-13 items-center justify-center rounded-full text-white shadow-[0_8px_24px_rgba(0,113,227,0.35)] transition-all hover:scale-105 active:scale-95"
      :aria-expanded="open"
      aria-label="Open contact"
      @click="open = !open"
    >
      <svg v-if="!open" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M4 6h16v9H8l-4 4V6z" />
      </svg>
      <span v-else class="text-base font-bold leading-none">✕</span>
    </button>
  </div>
</template>
