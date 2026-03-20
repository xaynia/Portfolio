import { onMounted, onUnmounted } from 'vue'

/**
 * Scroll-reveal cards + fade-in images on load.
 * Call once in any page that uses .masonry-item cards.
 */
export function useReveal() {
  let observer: IntersectionObserver | null = null

  function initImageFade() {
    document.querySelectorAll<HTMLImageElement>('.masonry-item img').forEach(img => {
      if (img.complete) {
        img.classList.add('loaded')
      } else {
        img.addEventListener('load', () => img.classList.add('loaded'), { once: true })
      }
    })
  }

  function initScrollReveal() {
    const items = document.querySelectorAll('.masonry-item')
    if (!items.length) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            // Stagger based on position in the grid
            const siblings = Array.from(el.parentElement?.children ?? [])
            const index = siblings.indexOf(el)
            el.style.transitionDelay = `${index * 0.08}s`
            el.classList.add('revealed')
            observer?.unobserve(el)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    items.forEach(item => observer?.observe(item))
  }

  onMounted(() => {
    // Small delay to ensure DOM is painted
    requestAnimationFrame(() => {
      initImageFade()
      initScrollReveal()
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
