<script setup lang="ts">
import { Languages } from 'lucide-vue-next'

const { locale, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const nextLocale = computed(() => locale.value === 'zh' ? 'en' : 'zh')
</script>

<template>
  <NuxtLink
    :to="switchLocalePath(nextLocale)"
    class="fixed bottom-24 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xl shadow-slate-900/10 transition-all duration-300 hover:scale-110 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:shadow-black/30 dark:hover:border-slate-600 dark:hover:bg-slate-800"
    :aria-label="t('actions.toggleLanguage')"
    :title="t('actions.toggleLanguage')"
  >
    <Languages class="h-5 w-5" />
  </NuxtLink>
</template>
