<script setup lang="ts">
import { Languages } from 'lucide-vue-next'

const { locale, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const nextLocale = computed(() => locale.value === 'zh' ? 'en' : 'zh')
</script>

<template>
  <NuxtLink
    :to="switchLocalePath(nextLocale)"
    class="fab-surface fixed bottom-24 right-8 z-50"
    :aria-label="t('actions.toggleLanguage')"
    :title="t('actions.toggleLanguage')"
  >
    <Languages class="h-5 w-5" />
  </NuxtLink>
</template>
