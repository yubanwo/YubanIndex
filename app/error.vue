<script setup lang="ts">
import { ArrowLeft, Home, LayoutGrid } from 'lucide-vue-next'

const { t } = useI18n()
const localePath = useLocalePath()

usePageSeo({
  title: () => t('error.404.seoTitle'),
  description: () => t('error.404.seoDescription'),
  noindex: true,
})
</script>

<template>
  <NuxtLayout name="default">
    <div class="mt-10 flex flex-col items-center text-center sm:mt-16">
      <p class="mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-8xl font-extrabold tracking-tight text-transparent md:text-9xl">
        {{ t('error.404.code') }}
      </p>

      <h1 class="mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl">
        {{ t('error.404.title') }}
      </h1>

      <p class="mb-10 max-w-2xl text-lg leading-relaxed text-slate-500 md:text-xl">
        {{ t('error.404.description') }}
      </p>

      <div class="mb-20 flex flex-col gap-4 sm:flex-row">
        <NuxtLink
          :to="localePath('/')"
          class="flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-3.5 font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20"
        >
          <ArrowLeft class="h-5 w-5" />
          {{ t('error.404.home') }}
        </NuxtLink>
        <NuxtLink
          :to="localePath('/sites')"
          class="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-3.5 font-semibold text-slate-800 transition-all hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm"
        >
          <LayoutGrid class="h-5 w-5" />
          {{ t('error.404.products') }}
        </NuxtLink>
      </div>


    </div>
  </NuxtLayout>
</template>
