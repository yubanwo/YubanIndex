<script setup lang="ts">
import { FileText } from 'lucide-vue-next'

const { locale } = useI18n()

const content = computed(() => {
  if (locale.value === 'zh') {
    return {
      seoTitle: 'Yuban 服务条款 - 站点使用规则、用户内容与免责声明',
      seoDescription: '了解使用 Yuban 相关站点、工具、评论互动和网络服务时适用的基础规则，涵盖合理使用、用户内容、外部链接、免责声明与条款更新。',
      title: '服务条款',
      description: '使用本站及相关服务前，请了解这些基础规则。它们帮助我们保持服务可靠、清晰并可持续。',
      updated: '最后更新：2026 年 5 月 3 日',
      sections: [
        {
          title: '服务范围',
          body: 'Yuban 提供博客、工具、资源站点、评论互动和相关网络服务。具体功能可能会随着维护、升级或业务调整发生变化，我们会尽量保持服务稳定可用。',
        },
        {
          title: '合理使用',
          body: '您同意不以攻击、滥用、爬取过载、绕过限制、传播恶意内容或侵犯他人权益的方式使用本站。若发现异常或高风险行为，我们可能临时限制访问或清理相关内容。',
        },
        {
          title: '用户内容',
          body: '当您提交留言、反馈或其他内容时，应确保内容合法、真实且不侵犯第三方权利。您仍保留对自己内容的权利，同时授权我们在网站展示、管理和维护这些内容。',
        },
        {
          title: '外部链接',
          body: '本站可能包含前往第三方网站或服务的链接。外部网站的内容、安全性与隐私实践由其运营方负责，请您自行判断并遵守其条款。',
        },
        {
          title: '免责声明',
          body: '我们会尽力保证信息准确和服务稳定，但不承诺所有内容始终完整、无误或不中断。因网络环境、第三方服务、不可抗力或用户自身操作造成的损失，我们在法律允许范围内不承担额外责任。',
        },
        {
          title: '条款变更',
          body: '我们可能根据服务变化更新本条款。更新后的内容会发布在本页面，继续使用本站即表示您接受更新后的条款。',
        },
      ],
    }
  }

  return {
    seoTitle: 'Yuban Terms - Site Rules, Content, and Disclaimer',
    seoDescription: 'Review the rules for using Yuban sites, tools, comments, and web services, including acceptable use, user content, external links, and disclaimers.',
    title: 'Terms of Service',
    description: 'Before using this site and related services, please review these basic rules. They help keep the services reliable, clear, and sustainable.',
    updated: 'Last updated: May 3, 2026',
    sections: [
      {
        title: 'Scope of Services',
        body: 'Yuban provides blogs, tools, resource sites, comment features, and related web services. Features may change due to maintenance, upgrades, or service adjustments, and we try to keep services stable and available.',
      },
      {
        title: 'Acceptable Use',
        body: 'You agree not to use this site for attacks, abuse, excessive scraping, bypassing limits, distributing harmful content, or infringing the rights of others. We may temporarily restrict access or remove related content when abnormal or high-risk behavior is found.',
      },
      {
        title: 'User Content',
        body: 'When you submit comments, feedback, or other content, you are responsible for ensuring it is lawful, accurate, and does not infringe third-party rights. You retain your rights while allowing us to display, manage, and maintain that content on the site.',
      },
      {
        title: 'External Links',
        body: 'This site may include links to third-party websites or services. Their content, security, and privacy practices are controlled by their operators. Please review and follow their terms when visiting them.',
      },
      {
        title: 'Disclaimer',
        body: 'We try to keep information accurate and services stable, but we do not guarantee that all content is always complete, error-free, or uninterrupted. To the extent permitted by law, we are not liable for losses caused by network conditions, third-party services, force majeure, or user actions.',
      },
      {
        title: 'Changes to Terms',
        body: 'We may update these terms as services change. The updated terms will be posted on this page, and continued use of the site means you accept the revised terms.',
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
      :icon="FileText"
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
