<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

// 在此处填写备案号与版权信息（按语言分别填写）
const footerByLang: Record<string, { copyright: string; icp: string }> = {
  'zh-CN': {
    copyright: '© 2026 XFlySim · 保留所有权利',
    icp: '京ICP备XXXXXXXX号'
  },
  'zh-TW': {
    copyright: '© 2026 XFlySim · 保留所有權利',
    icp: '京ICP備XXXXXXXX號'
  },
  'en-US': {
    copyright: '© 2026 XFlySim · All rights reserved',
    icp: 'ICP Filing No.: 京ICP备XXXXXXXX号'
  }
}

const { lang } = useData()
const footer = computed(() => footerByLang[lang.value] ?? footerByLang['zh-CN'])
</script>

<template>
  <footer class="xfly-footer">
    <div class="xfly-footer-inner">
      <span class="xfly-footer-item">{{ footer.copyright }}</span>
      <span class="xfly-footer-item">
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">{{ footer.icp }}</a>
      </span>
    </div>
  </footer>
</template>

<style scoped>
.xfly-footer {
  border-top: 1px solid var(--vp-c-divider);
  padding: 0.6rem 1.5rem 1.2rem;
}

.xfly-footer-inner {
  max-width: 1376px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 1.2rem;
  justify-content: center;
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
}

.xfly-footer-item a {
  color: var(--vp-c-text-2);
  text-decoration: none;
}

.xfly-footer-item a:hover {
  color: var(--vp-c-brand-1);
}
</style>