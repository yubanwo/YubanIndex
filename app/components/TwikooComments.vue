<script setup lang="ts">
import { MessageCircle } from 'lucide-vue-next'
import twikooScriptUrl from 'twikoo/dist/twikoo.all.min.js?url'
import 'twikoo/dist/twikoo.css'

const { locale, t } = useI18n()
const config = useRuntimeConfig()
const route = useRoute()

const envId = computed(() => config.public.twikooEnvId as string)
const twikooLang = computed(() => locale.value === 'zh' ? 'zh-CN' : 'en')
const errorMessage = ref('')

declare global {
  interface Window {
    twikoo?: {
      init: (options: {
        envId: string
        el: string
        lang: string
        path: string
      }) => void
    }
  }
}

let twikooScriptPromise: Promise<void> | undefined

const loadTwikoo = () => {
  if (window.twikoo?.init) {
    return Promise.resolve()
  }

  if (twikooScriptPromise) {
    return twikooScriptPromise
  }

  twikooScriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>('script[data-twikoo-script]')

    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(), { once: true })
      existingScript.addEventListener('error', () => reject(new Error('Twikoo script failed to load.')), { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = twikooScriptUrl
    script.async = true
    script.dataset.twikooScript = 'true'
    script.addEventListener('load', () => resolve(), { once: true })
    script.addEventListener('error', () => reject(new Error('Twikoo script failed to load.')), { once: true })
    document.head.appendChild(script)
  })

  return twikooScriptPromise
}

const initTwikoo = async () => {
  if (!envId.value) {
    return
  }

  const commentEl = document.querySelector('#twikoo')

  if (!commentEl) {
    return
  }

  errorMessage.value = ''
  commentEl.innerHTML = ''

  await nextTick()

  try {
    await loadTwikoo()

    if (!window.twikoo?.init) {
      throw new Error('Twikoo init is not available.')
    }

    window.twikoo.init({
      envId: envId.value,
      el: '#twikoo',
      lang: twikooLang.value,
      path: route.path,
    })
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Twikoo failed to initialize.'
  }
}

onMounted(initTwikoo)

watch([() => route.path, () => locale.value, envId], initTwikoo)
</script>

<template>
  <div class="twikoo-shell rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] md:p-8">
    <div v-if="envId" class="min-h-64">
      <div id="twikoo" class="twikoo-panel" />

      <div v-if="errorMessage" class="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-rose-200 bg-rose-50 p-8 text-center">
        <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-rose-600 shadow-sm">
          <MessageCircle class="h-7 w-7" />
        </div>
        <h2 class="mb-2 text-xl font-extrabold text-slate-900">Twikoo 加载失败</h2>
        <p class="max-w-xl text-sm leading-relaxed text-rose-500">
          {{ errorMessage }}
        </p>
      </div>
    </div>

    <div v-else class="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center">
      <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
        <MessageCircle class="h-7 w-7" />
      </div>
      <h2 class="mb-2 text-xl font-extrabold text-slate-900">{{ t('contact.twikooMissingTitle') }}</h2>
      <p class="max-w-xl text-sm leading-relaxed text-slate-500">
        {{ t('contact.twikooMissingDesc') }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.twikoo-shell {
  min-height: 100%;
}

.twikoo-panel {
  color: #0f172a;
}

.twikoo-panel :deep(.tk-submit) {
  margin-top: 0;
}

.twikoo-panel :deep(.el-textarea__inner),
.twikoo-panel :deep(.el-input__inner) {
  border: 0;
  background: #f8fafc;
  color: #0f172a;
  box-shadow: inset 0 0 0 1px rgb(226 232 240 / 0.85);
  transition: box-shadow 180ms ease, background-color 180ms ease;
}

.twikoo-panel :deep(.el-textarea__inner) {
  min-height: 150px !important;
  border-radius: 24px;
  padding: 18px 20px;
  line-height: 1.8;
  resize: none;
}

.twikoo-panel :deep(.el-input__inner) {
  height: 54px;
  border-radius: 20px;
  padding: 0 18px;
}

.twikoo-panel :deep(.el-textarea__inner:focus),
.twikoo-panel :deep(.el-input__inner:focus) {
  background: #fff;
  box-shadow: inset 0 0 0 2px rgb(59 130 246 / 0.8), 0 12px 28px -18px rgb(15 23 42 / 0.35);
}

.twikoo-panel :deep(.el-textarea__inner::placeholder),
.twikoo-panel :deep(.el-input__inner::placeholder) {
  color: #94a3b8;
}

.twikoo-panel :deep(.tk-row) {
  gap: 12px;
}

.twikoo-panel :deep(.tk-meta-input) {
  gap: 12px;
}

.twikoo-panel :deep(.tk-input) {
  margin-top: 14px;
}

.twikoo-panel :deep(.tk-submit-action) {
  margin-top: 16px;
}

.twikoo-panel :deep(.tk-submit-action-icon) {
  border-radius: 14px;
  color: #64748b;
}

.twikoo-panel :deep(.tk-submit-action-icon:hover) {
  background: #f1f5f9;
  color: #2563eb;
}

.twikoo-panel :deep(.el-button) {
  min-height: 46px;
  border: 0;
  border-radius: 18px;
  padding: 12px 22px;
  font-weight: 800;
  box-shadow: none;
}

.twikoo-panel :deep(.el-button--primary) {
  background: #0f172a;
  color: #fff;
  box-shadow: 0 16px 34px -20px rgb(15 23 42 / 0.75);
}

.twikoo-panel :deep(.el-button--primary:hover),
.twikoo-panel :deep(.el-button--primary:focus) {
  background: #1e293b;
  color: #fff;
}

.twikoo-panel :deep(.tk-comments-title) {
  margin-top: 34px;
  color: #0f172a;
  font-size: 18px;
  font-weight: 900;
}

.twikoo-panel :deep(.tk-comments-no) {
  color: #64748b;
}

.twikoo-panel :deep(.tk-comment) {
  margin-top: 18px;
  border-radius: 24px;
  background: #f8fafc;
  padding: 18px;
}

.twikoo-panel :deep(.tk-avatar) {
  border-radius: 18px;
  box-shadow: 0 8px 20px -14px rgb(15 23 42 / 0.55);
}

.twikoo-panel :deep(.tk-main) {
  margin-left: 14px;
}

.twikoo-panel :deep(.tk-nick) {
  color: #0f172a;
  font-weight: 900;
}

.twikoo-panel :deep(.tk-time),
.twikoo-panel :deep(.tk-action),
.twikoo-panel :deep(.tk-extra) {
  color: #94a3b8;
}

.twikoo-panel :deep(.tk-content) {
  color: #334155;
  line-height: 1.8;
}

.twikoo-panel :deep(a) {
  color: #2563eb;
}

.twikoo-panel :deep(.tk-replies .tk-comment) {
  background: #fff;
  box-shadow: inset 0 0 0 1px rgb(226 232 240 / 0.75);
}

:global(.dark) .twikoo-shell {
  background: #0f172a;
  border-color: #1e293b;
}

:global(.dark) .twikoo-panel {
  color: #e2e8f0;
}

:global(.dark) .twikoo-panel :deep(.el-textarea__inner),
:global(.dark) .twikoo-panel :deep(.el-input__inner) {
  background: #1e293b;
  color: #e2e8f0;
  box-shadow: inset 0 0 0 1px rgb(51 65 85 / 0.9);
}

:global(.dark) .twikoo-panel :deep(.el-textarea__inner:focus),
:global(.dark) .twikoo-panel :deep(.el-input__inner:focus) {
  background: #0f172a;
  box-shadow: inset 0 0 0 2px rgb(96 165 250 / 0.8), 0 12px 28px -18px rgb(0 0 0 / 0.8);
}

:global(.dark) .twikoo-panel :deep(.tk-submit-action-icon:hover),
:global(.dark) .twikoo-panel :deep(.tk-comment) {
  background: #1e293b;
}

:global(.dark) .twikoo-panel :deep(.el-button--primary) {
  background: #f1f5f9;
  color: #020617;
}

:global(.dark) .twikoo-panel :deep(.el-button--primary:hover),
:global(.dark) .twikoo-panel :deep(.el-button--primary:focus) {
  background: #e2e8f0;
  color: #020617;
}

:global(.dark) .twikoo-panel :deep(.tk-comments-title),
:global(.dark) .twikoo-panel :deep(.tk-nick) {
  color: #f8fafc;
}

:global(.dark) .twikoo-panel :deep(.tk-content) {
  color: #cbd5e1;
}

:global(.dark) .twikoo-panel :deep(.tk-replies .tk-comment) {
  background: #0f172a;
  box-shadow: inset 0 0 0 1px rgb(51 65 85 / 0.85);
}
</style>
