<script setup lang="ts">
import { Code, Shield, Sparkles, Terminal, User } from 'lucide-vue-next'

const { t } = useI18n()
const clientTech = ['React', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion']
const infraTech = ['Node.js', 'Golang', 'PHP', 'Python', 'Java', 'Docker', 'Nginx', 'PostgreSQL', 'Kubernetes']

usePageSeo({
  title: () => t('about.seoTitle'),
  description: () => t('about.seoDescription'),
})
</script>

<template>
  <div class="mx-auto max-w-6xl py-8 lg:py-16">
    <AppPageHeader
      :title="t('about.title')"
      :description="t('about.description')"
      :icon="User"
      icon-class="text-blue-500"
    />

    <div class="space-y-8">
      <section class="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-sm md:p-10">
        <div class="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-50 opacity-60 blur-3xl" />
        <h2 class="relative z-10 mb-4 flex items-center gap-2 text-xl font-bold text-slate-900">
          <Sparkles class="h-5 w-5 text-blue-500" />
          {{ t('about.missionTitle') }}
        </h2>
        <p class="relative z-10 text-lg leading-relaxed text-slate-600">
          {{ t('about.mission') }}
        </p>
      </section>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <section class="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)]">
          <h2 class="mb-6 flex items-center gap-3 text-lg font-bold text-slate-900">
            <span class="rounded-xl bg-purple-50 p-2.5 text-purple-600 transition-transform group-hover:scale-110">
              <Code class="h-5 w-5" />
            </span>
            {{ t('about.clientTitle') }}
          </h2>
          <div class="flex flex-wrap gap-2.5">
            <span v-for="tech in clientTech" :key="tech" class="cursor-default rounded-xl border border-slate-100 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-purple-50 hover:text-purple-700">
              {{ tech }}
            </span>
          </div>
        </section>

        <section class="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)]">
          <h2 class="mb-6 flex items-center gap-3 text-lg font-bold text-slate-900">
            <span class="rounded-xl bg-emerald-50 p-2.5 text-emerald-600 transition-transform group-hover:scale-110">
              <Terminal class="h-5 w-5" />
            </span>
            {{ t('about.infraTitle') }}
          </h2>
          <div class="flex flex-wrap gap-2.5">
            <span v-for="tech in infraTech" :key="tech" class="cursor-default rounded-xl border border-slate-100 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-emerald-50 hover:text-emerald-700">
              {{ tech }}
            </span>
          </div>
        </section>
      </div>

      <section class="relative overflow-hidden rounded-3xl bg-slate-900 p-8 shadow-xl md:p-10">
        <div class="absolute right-0 top-0 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl" />
        <h2 class="relative z-10 mb-6 flex items-center gap-3 text-xl font-bold text-white">
          <Shield class="h-6 w-6 text-blue-400" />
          {{ t('about.promiseTitle') }}
        </h2>
        <ul class="relative z-10 space-y-5 text-slate-300">
          <li class="flex items-start gap-3">
            <span class="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
            <span class="leading-relaxed"><strong class="text-white">{{ t('about.promisePerformanceStrong') }}</strong> {{ t('about.promisePerformance') }}</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400" />
            <span class="leading-relaxed"><strong class="text-white">{{ t('about.promiseAvailabilityStrong') }}</strong> {{ t('about.promiseAvailability') }}</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
            <span class="leading-relaxed"><strong class="text-white">{{ t('about.promisePrivacyStrong') }}</strong> {{ t('about.promisePrivacy') }}</span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
