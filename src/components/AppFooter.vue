<template>
  <footer class="mt-20 border-t border-white/10 bg-slate-950/40 shadow-[0_-8px_32px_rgba(0,0,0,0.3)] backdrop-blur-2xl">
    <div class="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
      <div>
        <div class="flex items-center gap-2.5">
          <img src="/logo.svg" alt="Creative Coder Logo" class="h-7 w-7 rounded-lg shadow-sm" />
          <p class="font-display text-xl font-bold tracking-tight text-white">Creative Coder</p>
        </div>
        <p class="mt-2 max-w-sm text-xs leading-relaxed text-white/60">
          A calm classroom for people who want to ship real software — not collect certificates.
        </p>
      </div>
      <div class="text-xs text-white/65 space-y-1">
        <p class="font-semibold uppercase tracking-wider text-white/50 text-[10px]">Studio</p>
        <p class="mt-1 text-white/80">Yangon · Remote cohorts</p>
        <p class="text-brand">hello@creativecoder.studio</p>
      </div>
      <div class="text-xs text-white/65 space-y-1">
        <p class="font-semibold uppercase tracking-wider text-white/50 text-[10px]">Hours</p>
        <p class="mt-1 text-white/80">Live rooms open 17:00–21:00 IST</p>
        <p class="text-white/60">Weekend labs on Saturday</p>
      </div>
    </div>
    <div class="border-t border-white/10 px-5 py-4 text-center text-[11px] text-white/40">
      © {{ new Date().getFullYear() }} Creative Coder. Inspired by Apple Liquid Glass UI.
    </div>
  </footer>
</template>
