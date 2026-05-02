<template>
  <div class="relative min-h-screen overflow-hidden bg-slate-50 pb-24 font-sans text-slate-900 selection:bg-blue-200">
    <AppBackground />
    <AppNav />

    <main class="relative z-10 mx-auto max-w-6xl px-6 pt-32 md:pt-24">
      <slot />
      <AppFooter />
    </main>

    <ScrollTopButton />
    <LocaleToggle />
    <ModeToggle />
  </div>
</template>
