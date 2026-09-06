<script setup>
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import FloatingContact from '@/components/FloatingContact.vue'
</script>

<template>
  <div class="relative min-h-screen text-ink overflow-x-hidden selection:bg-brand/30 selection:text-white">
    <!-- Apple Liquid Glass Thick Dark Blue Gradient Canvas -->
    <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <!-- Dense thick dark blue gradient wash -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#061536] to-[#03091e]" />

      <!-- Luminous deep sapphire and royal blue refraction orbs -->
      <div
        class="animate-orb-1 absolute -top-32 -left-20 h-[650px] w-[650px] rounded-full bg-gradient-to-br from-[#0055d4]/45 via-[#0284c7]/35 to-[#1e40af]/30 blur-[130px]"
      />
      <div
        class="animate-orb-2 absolute top-1/3 -right-32 h-[750px] w-[750px] rounded-full bg-gradient-to-bl from-[#0369a1]/35 via-[#0052cc]/35 to-[#1d4ed8]/30 blur-[140px]"
      />
      <div
        class="animate-orb-3 absolute -bottom-32 left-1/4 h-[700px] w-[700px] rounded-full bg-gradient-to-tr from-[#0284c7]/35 via-[#1e40af]/35 to-[#020617]/50 blur-[140px]"
      />

      <!-- Glass specular light sheen overlay for thick dark glass -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,189,248,0.15),transparent_70%)]" />
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,85,212,0.15),transparent_70%)]" />
    </div>

    <AppHeader />
    <main class="relative z-10">
      <RouterView />
    </main>
    <AppFooter />
    <FloatingContact />
  </div>
</template>
