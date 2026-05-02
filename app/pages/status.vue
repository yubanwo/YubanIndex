<script setup lang="ts">
import { Activity } from 'lucide-vue-next'
import { sites } from '~/data/sites'

const { t } = useI18n()
const metrics = [
  { labelKey: 'status.metrics.current', valueKey: 'status.metrics.normal', value: '', color: 'text-green-500' },
  { labelKey: 'status.metrics.uptime', valueKey: '', value: '99.99%', color: 'text-slate-800' },
  { labelKey: 'status.metrics.incidents', valueKey: '', value: '0', color: 'text-slate-800' },
  { labelKey: 'status.metrics.latency', valueKey: '', value: '32ms', color: 'text-blue-500' },
]

usePageSeo({
  title: () => t('status.seoTitle'),
  description: () => t('status.seoDescription'),
})
</script>

<template>
  <div class="mx-auto max-w-6xl py-8 lg:py-16">
    <AppPageHeader
      :title="t('status.title')"
      :description="t('status.description')"
      :icon="Activity"
      icon-class="text-green-500"
    >
      <template #actions>
      <div class="flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-2.5 text-sm font-semibold text-green-700 shadow-sm shadow-green-100">
        <span class="relative flex h-3 w-3">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span class="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
        </span>
        {{ t('status.allGood') }}
      </div>
      </template>
    </AppPageHeader>

    <div class="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
      <div v-for="metric in metrics" :key="metric.labelKey" class="flex flex-col justify-center rounded-3xl border border-slate-100 bg-white p-5 text-center shadow-sm">
        <div class="mb-1.5 text-sm font-medium text-slate-400">{{ t(metric.labelKey) }}</div>
        <div :class="`text-3xl font-black ${metric.color}`">{{ metric.valueKey ? t(metric.valueKey) : metric.value }}</div>
      </div>
    </div>

    <h2 class="mb-4 px-1 text-lg font-bold text-slate-900">{{ t('status.detail') }}</h2>
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      <StatusRow
        v-for="(site, index) in sites"
        :key="site.url"
        :site="site"
        :is-last="index === sites.length - 1"
      />
    </div>
  </div>
</template>
