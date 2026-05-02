<script setup lang="ts">
import { ExternalLink, Globe } from 'lucide-vue-next'
import type { Site } from '~/data/sites'

defineProps<{
  site: Site
}>()

const { t } = useI18n()
</script>

<template>
  <a
    :href="site.url"
    target="_blank"
    rel="noopener noreferrer"
    :title="t('common.visit', { title: t(site.titleKey) })"
    class="group relative z-10 flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] md:p-10"
  >
    <div :class="`absolute -bottom-24 -right-24 -z-10 h-64 w-64 rounded-full bg-gradient-to-br ${site.color} opacity-0 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-[0.08]`" />

    <div class="absolute right-8 top-8 flex h-11 w-11 items-center justify-center rounded-full border border-slate-100 bg-slate-50 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:shadow-md">
      <ExternalLink class="h-5 w-5 text-slate-400 transition-colors duration-500 group-hover:text-white" />
    </div>

    <div class="relative mb-8">
      <div class="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:shadow-md">
        <div :class="`absolute inset-0 bg-gradient-to-br ${site.color} opacity-10 transition-opacity duration-500 group-hover:opacity-20`" />
        <component :is="site.icon" :class="`relative z-10 h-8 w-8 ${site.textColor}`" />
      </div>
    </div>

    <h3 class="mb-3 text-2xl font-extrabold text-slate-800 transition-colors group-hover:text-slate-900">
      {{ t(site.titleKey) }}
    </h3>
    <p class="mb-8 flex-grow leading-relaxed text-slate-500">
      {{ t(site.descKey) }}
    </p>

    <div class="mt-auto border-t border-slate-100/80 pt-6">
      <span class="inline-flex items-center gap-2 text-sm font-bold text-slate-400 transition-colors group-hover:text-slate-900">
        <Globe :class="`h-4 w-4 ${site.textColor}`" />
        {{ site.url.replace('https://', '') }}
      </span>
    </div>
  </a>
</template>
