<script setup lang="ts">
import type { Site } from '~/data/sites'

defineProps<{
  site: Site
  isLast?: boolean
}>()

const { t } = useI18n()
</script>

<template>
  <div
    class="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-200 hover:shadow-[0_12px_30px_-18px_rgba(15,23,42,0.35)]"
  >
    <div :class="`absolute -right-12 -top-12 h-28 w-28 rounded-full bg-gradient-to-br ${site.color} opacity-10 blur-2xl transition-opacity duration-300 group-hover:opacity-20`" />

    <div class="relative flex items-start justify-between gap-4">
      <div class="flex items-center gap-4">
        <div class="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 shadow-sm transition-transform duration-300 group-hover:scale-105">
          <component :is="site.icon" :class="`h-6 w-6 ${site.textColor}`" />
        </div>
        <div>
          <div class="text-base font-bold text-slate-800">{{ t(site.titleKey) }}</div>
          <div class="mt-1 text-sm text-slate-500">{{ site.url.replace('https://', '') }}</div>
        </div>
      </div>

      <span class="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-green-500 shadow-[0_0_0_5px_rgba(34,197,94,0.12)]" />
    </div>

    <div class="relative mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
      <div>
        <div class="text-sm font-bold text-green-600">{{ t('common.operational') }}</div>
        <div class="mt-0.5 text-xs text-slate-400">{{ t('common.lastChecked') }}</div>
      </div>

      <div class="text-right">
        <div class="text-sm font-black text-slate-800">100%</div>
        <div class="mt-0.5 text-xs text-slate-400">{{ t('common.uptimeLabel') }}</div>
      </div>
    </div>
  </div>
</template>
