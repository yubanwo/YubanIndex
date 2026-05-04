<script setup lang="ts">
import { Layers, LayoutGrid, Mail, Sparkles, Zap } from 'lucide-vue-next'

const { locale, t } = useI18n()
const localePath = useLocalePath()
const homeSeoTitle = computed(() => locale.value === 'zh'
  ? 'Yuban 生态服务矩阵 - 数字工具与网络基础设施'
  : 'Yuban Digital Services Matrix - Web Tools and Infrastructure')

usePageSeo({
  title: () => homeSeoTitle.value,
  description: () => t('home.seoDescription'),
})
</script>

<template>
  <div class="mt-10 flex flex-col items-center text-center sm:mt-16">
    <div class="mb-8 h-24 w-24 rounded-3xl bg-gradient-to-tr from-blue-500 to-purple-500 p-1 shadow-2xl shadow-blue-500/20 transition-transform duration-500 hover:scale-105">
      <div class="flex h-full w-full items-center justify-center overflow-hidden rounded-[22px] bg-white">
        <img src="/logo.png" alt="Yuban logo" class="h-full w-full object-cover" />
      </div>
    </div>

    <h1 class="mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl">
      {{ t('home.title') }}
    </h1>
    <p class="mb-10 max-w-2xl text-lg leading-relaxed text-slate-500 md:text-xl">
      {{ t('home.description') }}
    </p>

    <div class="mb-20 flex flex-col gap-4 sm:flex-row">
      <NuxtLink :to="localePath('/sites')" class="flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-3.5 font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20">
        <LayoutGrid class="h-5 w-5" />
        {{ t('actions.explore') }}
      </NuxtLink>
      <NuxtLink :to="localePath('/contact')" class="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-3.5 font-semibold text-slate-800 transition-all hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm">
        <Mail class="h-5 w-5" />
        {{ t('actions.support') }}
      </NuxtLink>
    </div>

    <div class="grid w-full max-w-5xl grid-cols-1 gap-6 text-left md:grid-cols-3">
      <div class="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-purple-200 hover:shadow-xl">
        <Sparkles class="mb-4 h-6 w-6 text-purple-500" />
        <h3 class="mb-2 text-lg font-semibold text-slate-900">{{ t('home.features.experience.title') }}</h3>
        <p class="text-sm leading-relaxed text-slate-500">{{ t('home.features.experience.desc') }}</p>
      </div>
      <div class="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl">
        <Zap class="mb-4 h-6 w-6 text-blue-500" />
        <h3 class="mb-2 text-lg font-semibold text-slate-900">{{ t('home.features.reliable.title') }}</h3>
        <p class="text-sm leading-relaxed text-slate-500">{{ t('home.features.reliable.desc') }}</p>
      </div>
      <div class="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-xl">
        <Layers class="mb-4 h-6 w-6 text-emerald-500" />
        <h3 class="mb-2 text-lg font-semibold text-slate-900">{{ t('home.features.enablement.title') }}</h3>
        <p class="text-sm leading-relaxed text-slate-500">{{ t('home.features.enablement.desc') }}</p>
      </div>
    </div>
  </div>
</template>
