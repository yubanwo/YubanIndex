<script setup lang="ts">
import { ShieldCheck } from 'lucide-vue-next'

const { locale } = useI18n()

const content = computed(() => {
  if (locale.value === 'zh') {
    return {
      seoTitle: '隐私政策 - Yuban',
      seoDescription: '了解 Yuban 如何处理访问数据、评论数据和第三方服务。',
      title: '隐私政策',
      description: '我们尊重您的隐私，并尽量以最少的数据完成站点运行、联系沟通和服务改进。',
      updated: '最后更新：2026 年 5 月 3 日',
      sections: [
        {
          title: '我们收集的信息',
          body: '当您访问本站时，服务器可能会记录基本请求信息，例如 IP 地址、浏览器类型、访问时间、来源页面和访问路径。若您在联系页使用 Twikoo 留言，我们会根据您主动填写的内容保存昵称、邮箱、留言内容及相关评论记录。',
        },
        {
          title: '信息使用方式',
          body: '这些信息主要用于保障网站稳定运行、排查异常访问、回复您的留言、改进页面体验以及进行必要的安全审计。我们不会出售、出租或以广告画像为目的共享您的个人信息。',
        },
        {
          title: 'Cookie 与本地存储',
          body: '本站可能使用 Cookie 或本地存储记住语言偏好、主题模式以及评论组件所需的基础状态。这些数据仅用于提升访问体验，您可以在浏览器设置中清除或禁用。',
        },
        {
          title: '第三方服务',
          body: '本站可能使用 Twikoo、统计分析、CDN 或字体镜像等第三方服务。这些服务可能根据其自身政策处理必要的技术数据。我们会尽量选择可信赖且数据收集范围较小的服务。',
        },
        {
          title: '数据保留与删除',
          body: '留言数据会在网站运营期间保留，除非您请求删除或我们因维护、合规、安全原因进行清理。您可以通过 support@osyb.cn 联系我们处理相关数据请求。',
        },
        {
          title: '政策更新',
          body: '我们可能会根据服务变化更新本政策。更新后会在本页面显示新的更新时间，继续使用本站即表示您了解更新后的内容。',
        },
      ],
    }
  }

  return {
    seoTitle: 'Privacy Policy - Yuban',
    seoDescription: 'Learn how Yuban handles access data, comments, and third-party services.',
    title: 'Privacy Policy',
    description: 'We respect your privacy and keep data collection limited to what is needed for site operation, communication, and improvement.',
    updated: 'Last updated: May 3, 2026',
    sections: [
      {
        title: 'Information We Collect',
        body: 'When you visit this site, the server may record basic request information such as IP address, browser type, request time, referrer, and visited paths. If you leave a message through Twikoo, we store the name, email, comment content, and related comment records you provide.',
      },
      {
        title: 'How We Use Information',
        body: 'We use this information to keep the site reliable, investigate abnormal access, reply to messages, improve the experience, and perform necessary security reviews. We do not sell, rent, or share personal information for advertising profiles.',
      },
      {
        title: 'Cookies and Local Storage',
        body: 'This site may use cookies or local storage to remember language preferences, theme mode, and basic states required by the comment system. You can clear or disable them in your browser settings.',
      },
      {
        title: 'Third-Party Services',
        body: 'This site may use services such as Twikoo, analytics, CDN, or font mirrors. These providers may process necessary technical data under their own policies. We try to choose trusted services with limited data collection.',
      },
      {
        title: 'Retention and Deletion',
        body: 'Comment data may be retained while the site operates, unless you request deletion or we remove it for maintenance, compliance, or security reasons. You can contact support@osyb.cn for data-related requests.',
      },
      {
        title: 'Policy Updates',
        body: 'We may update this policy as services change. The updated date will be shown on this page, and continued use of the site means you understand the revised policy.',
      },
    ],
  }
})

usePageSeo({
  title: () => content.value.seoTitle,
  description: () => content.value.seoDescription,
})
</script>

<template>
  <div class="mx-auto max-w-5xl py-8 lg:py-16">
    <AppPageHeader
      :title="content.title"
      :description="content.description"
      :icon="ShieldCheck"
      icon-class="text-blue-500"
    />

    <article class="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm md:p-10">
      <p class="mb-8 text-sm font-medium text-slate-400">{{ content.updated }}</p>

      <div class="space-y-8">
        <section v-for="section in content.sections" :key="section.title" class="border-b border-slate-100 pb-8 last:border-b-0 last:pb-0">
          <h2 class="mb-3 text-xl font-extrabold text-slate-900">{{ section.title }}</h2>
          <p class="text-base leading-8 text-slate-600">{{ section.body }}</p>
        </section>
      </div>
    </article>
  </div>
</template>
