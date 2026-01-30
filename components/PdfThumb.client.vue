<template>
  <div class="pdf-thumb">
    <canvas v-show="ready" ref="canvasEl" />
    <img
        v-if="!ready"
        class="fallback"
        src="/media/default-pdf-thumb.png"
        :alt="alt"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as pdfjsLib from 'pdfjs-dist'
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc

const props = defineProps<{
  src: string
  alt: string
  scale?: number
}>()

const canvasEl = ref<HTMLCanvasElement | null>(null)
const ready = ref(false)

let aborted = false

onMounted(async () => {
  try {
    const loadingTask = pdfjsLib.getDocument(props.src)
    const pdf = await loadingTask.promise
    if (aborted) return

    const page = await pdf.getPage(1)
    if (aborted) return

    const viewport = page.getViewport({ scale: props.scale ?? 0.35 })
    const canvas = canvasEl.value!
    const ctx = canvas.getContext('2d')!

    canvas.width = Math.floor(viewport.width)
    canvas.height = Math.floor(viewport.height)

    await page.render({ canvasContext: ctx, viewport }).promise
    if (!aborted) ready.value = true
  } catch {
    // leave fallback
  }
})

onBeforeUnmount(() => {
  aborted = true
})
</script>

<style scoped>
.pdf-thumb { width: 100%; height: 100%; }
canvas, .fallback { width: 100%; height: 100%; border-radius: 4px; }
canvas { object-fit: cover; display: block; }
.fallback { object-fit: contain; display: block; }
</style>
