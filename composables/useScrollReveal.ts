/**
 * スクロール位置に応じた表示検出 composable。
 * 対象要素が viewport に入った瞬間に isVisible を true にし、
 * 以降は observer を切断して再検出しない（one-shot）。
 *
 * @param threshold - IntersectionObserver の threshold（デフォルト: 0.15）
 */
export function useScrollReveal(threshold = 0.15) {
  const targetRef = ref<HTMLElement | null>(null)
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (targetRef.value) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer?.disconnect()
          }
        },
        { threshold },
      )
      observer.observe(targetRef.value)
    }
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { targetRef, isVisible }
}
