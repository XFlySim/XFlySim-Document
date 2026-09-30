<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

const visible = ref(false)
const currentIndex = ref(0)
const srcList = ref<string[]>([])

function collect() {
  const imgs = Array.from(document.querySelectorAll<HTMLImageElement>('.vp-doc img'))
  const list: string[] = []
  for (const img of imgs) {
    img.loading = 'lazy'
    img.decoding = 'async'
    img.style.cursor = 'zoom-in'
    img.removeEventListener('click', onImgClick)
    img.addEventListener('click', onImgClick)
    list.push(img.currentSrc || img.src)
  }
  srcList.value = list
}

function onImgClick(e: Event) {
  e.preventDefault()
  e.stopPropagation()
  const img = e.currentTarget as HTMLImageElement
  const src = img.currentSrc || img.src
  const idx = srcList.value.indexOf(src)
  currentIndex.value = idx >= 0 ? idx : 0
  visible.value = true
}

function close() {
  visible.value = false
}

function next() {
  if (srcList.value.length === 0) return
  currentIndex.value = (currentIndex.value + 1) % srcList.value.length
}

function prev() {
  if (srcList.value.length === 0) return
  currentIndex.value = (currentIndex.value - 1 + srcList.value.length) % srcList.value.length
}

function onKeydown(e: KeyboardEvent) {
  if (!visible.value) return
  if (e.key === 'Escape') close()
  else if (e.key === 'ArrowRight') next()
  else if (e.key === 'ArrowLeft') prev()
}

let collectTimer: number | undefined

function collectSoon() {
  if (collectTimer) return
  collectTimer = window.setTimeout(() => {
    collectTimer = undefined
    collect()
  }, 50)
}

watch(
  () => route.path,
  () => {
    close()
    collectSoon()
  }
)

onMounted(() => {
  collect()
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  if (collectTimer) {
    window.clearTimeout(collectTimer)
    collectTimer = undefined
  }
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="visible"
      class="xfly-image-viewer"
      role="dialog"
      aria-modal="true"
      @click.self="close"
    >
      <button class="iv-close" type="button" aria-label="关闭" @click="close">&times;</button>
      <button
        v-if="srcList.length > 1"
        class="iv-nav iv-prev"
        type="button"
        aria-label="上一张"
        @click="prev"
      >
        &#8249;
      </button>
      <img class="iv-img" :src="srcList[currentIndex]" alt="教程截图" />
      <button
        v-if="srcList.length > 1"
        class="iv-nav iv-next"
        type="button"
        aria-label="下一张"
        @click="next"
      >
        &#8250;
      </button>
      <div v-if="srcList.length > 1" class="iv-meta">{{ currentIndex + 1 }} / {{ srcList.length }}</div>
    </div>
  </Teleport>
</template>

<style>
.xfly-image-viewer {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.88);
  padding: 3rem;
}

.iv-img {
  max-width: 94vw;
  max-height: 86vh;
  object-fit: contain;
  border-radius: 4px;
  background: #fff;
}

.iv-close {
  position: absolute;
  top: 1rem;
  right: 1.25rem;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
}

.iv-close:hover {
  background: rgba(255, 255, 255, 0.28);
}

.iv-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
  font-size: 1.8rem;
  line-height: 1;
  cursor: pointer;
}

.iv-nav:hover {
  background: rgba(255, 255, 255, 0.28);
}

.iv-prev {
  left: 1rem;
}

.iv-next {
  right: 1rem;
}

.iv-meta {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 0.9rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.2rem 0.8rem;
  border-radius: 2rem;
}
</style>