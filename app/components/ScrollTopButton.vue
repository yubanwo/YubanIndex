<script setup lang="ts">
import { ArrowUp } from 'lucide-vue-next'

const showScrollTop = ref(false)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
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
    class="fixed bottom-40 right-8 z-50 rounded-full bg-slate-900 p-3 text-white shadow-xl shadow-slate-900/20 transition-all duration-300 hover:scale-110 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:shadow-black/30 dark:hover:bg-slate-100"
    :class="showScrollTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-10 opacity-0'"
    @click="scrollToTop"
  >
    <ArrowUp class="h-5 w-5" />
  </button>
</template>
