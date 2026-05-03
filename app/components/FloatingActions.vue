<script setup lang="ts">
import { Languages, Moon, Sun, ArrowUp } from 'lucide-vue-next'

const { locale, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const colorMode = useColorMode()

const mounted = ref(false)
const showScrollTop = ref(false)

const nextLocale = computed(() => locale.value === 'zh' ? 'en' : 'zh')
const isDark = computed(() => colorMode.value === 'dark')

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const toggleMode = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

onMounted(() => {
  mounted.value = true
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <button
    type="button"
    aria-label="返回顶部"
    class="fab-scroll fixed bottom-8 right-8 z-50"
    :class="showScrollTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-10 opacity-0'"
    @click="scrollToTop"
  >
    <ArrowUp class="h-5 w-5" />
  </button>

  <button
    type="button"
    class="fab-surface fixed right-8 z-50"
    :class="showScrollTop ? 'bottom-24' : 'bottom-8'"
    :aria-label="isDark ? '切换到浅色模式' : '切换到深色模式'"
    :title="isDark ? '切换到浅色模式' : '切换到深色模式'"
    @click="toggleMode"
  >
    <Sun v-if="mounted && isDark" class="h-5 w-5" />
    <Moon v-else class="h-5 w-5" />
  </button>

  <NuxtLink
    :to="switchLocalePath(nextLocale)"
    class="fab-surface fixed right-8 z-50"
    :class="showScrollTop ? 'bottom-40' : 'bottom-24'"
    :aria-label="t('actions.toggleLanguage')"
    :title="t('actions.toggleLanguage')"
  >
    <Languages class="h-5 w-5" />
  </NuxtLink>
</template>
