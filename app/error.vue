<script setup lang="ts">
import { AlertTriangle, ArrowLeft, LayoutGrid } from 'lucide-vue-next'

const { t } = useI18n()
const localePath = useLocalePath()

usePageSeo({
  title: () => t('error.404.seoTitle'),
  description: () => t('error.404.seoDescription'),
  noindex: true,
})
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-slate-50 pb-24 font-sans text-slate-900 selection:bg-blue-200">
    <AppBackground />
    <AppNav />

    <main class="relative z-10 mx-auto max-w-6xl px-6 pt-32 md:pt-24">
      <div class="mx-auto max-w-6xl py-8 lg:py-16">
        <AppPageHeader
          :title="t('error.404.title')"
          :description="t('error.404.description')"
          :icon="AlertTriangle"
          icon-class="text-blue-500"
        />

        <section class="mx-auto max-w-3xl rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm md:p-10">
          <p class="mb-8 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            {{ t('error.404.code') }}
          </p>

          <div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <NuxtLink
              :to="localePath('/')"
              class="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-3.5 font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20"
            >
              <ArrowLeft class="h-5 w-5" />
              {{ t('error.404.home') }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/sites')"
              class="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-3.5 font-semibold text-slate-800 transition-all hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm"
            >
              <LayoutGrid class="h-5 w-5" />
              {{ t('error.404.products') }}
            </NuxtLink>
          </div>
        </section>
      </div>

      <AppFooter />
    </main>

    <ScrollTopButton />
    <LocaleToggle />
    <ModeToggle />
  </div>
</template>
