<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'

type ThemeMode = 'light' | 'dark'

const mode = ref<ThemeMode>('light')
const mounted = ref(false)

const applyMode = (nextMode: ThemeMode) => {
  mode.value = nextMode
  document.documentElement.classList.toggle('dark', nextMode === 'dark')
  localStorage.setItem('theme-mode', nextMode)
}

const toggleMode = () => {
  applyMode(mode.value === 'dark' ? 'light' : 'dark')
}

onMounted(() => {
  const savedMode = localStorage.getItem('theme-mode') as ThemeMode | null
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  applyMode(savedMode ?? (prefersDark ? 'dark' : 'light'))
  mounted.value = true
})
</script>

<template>
  <button
    type="button"
    class="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xl shadow-slate-900/10 transition-all duration-300 hover:scale-110 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:shadow-black/30 dark:hover:border-slate-600 dark:hover:bg-slate-800"
    :aria-label="mode === 'dark' ? '切换到浅色模式' : '切换到深色模式'"
    :title="mode === 'dark' ? '切换到浅色模式' : '切换到深色模式'"
    @click="toggleMode"
  >
    <Sun v-if="mounted && mode === 'dark'" class="h-5 w-5" />
    <Moon v-else class="h-5 w-5" />
  </button>
</template>
