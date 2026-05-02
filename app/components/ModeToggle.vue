<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'

const colorMode = useColorMode()

const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})

const isDark = computed(() => colorMode.value === 'dark')

const toggleMode = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <button
    type="button"
    class="fab-surface fixed bottom-8 right-8 z-50"
    :aria-label="isDark ? '切换到浅色模式' : '切换到深色模式'"
    :title="isDark ? '切换到浅色模式' : '切换到深色模式'"
    @click="toggleMode"
  >
    <Sun v-if="mounted && isDark" class="h-5 w-5" />
    <Moon v-else class="h-5 w-5" />
  </button>
</template>
