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
    class="fab-scroll fixed bottom-40 right-8 z-50"
    :class="showScrollTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-10 opacity-0'"
    @click="scrollToTop"
  >
    <ArrowUp class="h-5 w-5" />
  </button>
</template>
