<script setup lang="ts">
import type { Component } from 'vue'

withDefaults(defineProps<{
  title: string
  description: string
  icon?: Component
  iconClass?: string
}>(), {
  iconClass: 'text-blue-500',
})
</script>

<template>
  <header class="mb-16 text-center">
    <h1 class="mb-6 flex items-center justify-center gap-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
      <component :is="icon" v-if="icon" :class="`h-10 w-10 ${iconClass}`" />
      {{ title }}
    </h1>
    <p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-500 md:text-xl">
      {{ description }}
    </p>
    <div v-if="$slots.actions" class="mt-6 flex justify-center">
      <slot name="actions" />
    </div>
  </header>
</template>
