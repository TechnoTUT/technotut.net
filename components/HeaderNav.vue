<template>
  <header
    class="site-header fixed inset-x-0 top-0 z-50 transition-colors duration-300"
    :class="{ 'is-compact': showLinks, 'is-open': isMenuOpen }"
  >
    <div class="header-row">
      <NuxtLink to="/" class="shrink-0 relative z-50" aria-label="TechnoTUT Home" @click="closeMenu">
        <img src="/images/logo/logo.svg" alt="TechnoTUT" class="h-10 sm:h-12 md:h-14 w-auto" >
      </NuxtLink>
      <div class="header-content">
        <Transition name="header-switch" mode="out-in">
          <p v-if="!showLinks" key="subtitle" class="header-subtitle font-quicksand">Music &amp; Live production Club - TechnoTUT</p>
          <nav v-else key="links" class="header-links font-quicksand" aria-label="Main Navigation">
            <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to">
              {{ item.label }}
            </NuxtLink>
          </nav>
        </Transition>
      </div>
      <!-- Desktop: Static university text without any animation on scroll -->
      <p class="header-university font-noto hidden md:block" :class="{ 'compact-university': showLinks }">
        豊橋技術科学大学 音楽技術部
      </p>

      <!-- Mobile: Animated switch between 2-line university name and hamburger button -->
      <div class="header-right-mobile md:hidden shrink-0">
        <Transition name="header-switch" mode="out-in">
          <p
            v-if="!showLinks"
            key="univ-mobile"
            class="header-university font-noto"
          >
            <span class="block">豊橋技術科学大学</span>
            <span class="block">音楽技術部</span>
          </p>
          <button
            v-else
            key="hamburger-mobile"
            type="button"
            class="hamburger-btn relative z-50"
            :class="{ 'is-active': isMenuOpen }"
            :aria-expanded="isMenuOpen"
            :aria-label="isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'"
            aria-controls="mobile-navigation"
            @click="toggleMenu"
          >
            <span class="hamburger-line" aria-hidden="true" />
            <span class="hamburger-line" aria-hidden="true" />
            <span class="hamburger-line" aria-hidden="true" />
          </button>
        </Transition>
      </div>
    </div>

    <!-- Mobile Drawer Overlay -->
    <Teleport to="body">
      <Transition name="mobile-menu">
        <div
          v-if="showLinks && isMenuOpen"
          id="mobile-navigation"
          class="mobile-drawer fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-md md:hidden flex flex-col justify-between pt-28 px-8 pb-12 overflow-y-auto"
          aria-label="Mobile Navigation"
        >
          <nav class="flex flex-col font-quicksand font-light">
            <NuxtLink
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="mobile-link text-white/90 hover:text-brand"
              @click="closeMenu"
            >
              <span>{{ item.label }}</span>
              <svg class="w-4 h-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </nav>
          <div class="border-t border-white/10 pt-6 text-sm text-gray-400 font-zen mt-8">
            <p class="font-quicksand text-xs tracking-wider text-gray-500 mb-1">Music &amp; Live production Club - TechnoTUT</p>
            <p class="text-xs">豊橋技術科学大学 音楽技術部</p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<script setup lang="ts">
const navItems = [
  { label: 'HOME', to: '/' },
  { label: 'ACTIVITY', to: '/activity' },
  { label: 'GIKADAIFES', to: '/gikadaifes' },
  { label: 'ACCESS', to: '/access' },
  { label: 'FAQ', to: '/faq' },
  { label: 'JOIN US', to: '/join-us' },
]

const route = useRoute()
const scrolled = ref(false)
const isMenuOpen = ref(false)

const showLinks = computed(() => route.path !== '/' || scrolled.value)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const updateScroll = () => {
  if (window.scrollY >= 48) scrolled.value = true
  else if (window.scrollY <= 16) scrolled.value = false
}

const handleResize = () => {
  if (window.innerWidth >= 768 && isMenuOpen.value) {
    closeMenu()
  }
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isMenuOpen.value) {
    closeMenu()
  }
}

watch(isMenuOpen, (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

watch(() => route.fullPath, () => {
  closeMenu()
})

watch(showLinks, (val) => {
  if (!val) {
    closeMenu()
  }
})

onMounted(() => {
  updateScroll()
  window.addEventListener('scroll', updateScroll, { passive: true })
  window.addEventListener('resize', handleResize, { passive: true })
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
  window.removeEventListener('scroll', updateScroll)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
.site-header { background: linear-gradient(to bottom, #050505 0%, rgba(5,5,5,.90) 28%, rgba(5,5,5,0) 100%); padding-bottom: 0; }
.site-header.is-open { background: #050505; }
.header-row { min-height: 88px; display: flex; align-items: center; gap: 20px; padding: 16px 24px; }
.header-content { flex: 1; min-width: 0; }
.header-subtitle { display: none; color: rgba(255,255,255,.9); font-size: 14px; }
.header-right-mobile { display: none; }
@media (max-width: 767px) {
  .header-right-mobile {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-height: 44px;
  }
}
.header-university { margin-left: auto; text-align: right; font-size: 12px; font-weight: 300; line-height: 1.4; }
.header-links { display: none; }
.header-links a { display: inline-flex; align-items: center; min-height: 44px; white-space: nowrap; text-decoration: none; transition: opacity .4s ease, letter-spacing .4s ease; }
.header-links a:hover, .header-links a:focus-visible { opacity: .75; letter-spacing: .06em; }
.header-switch-enter-active, .header-switch-leave-active { transition: opacity .18s ease, transform .18s ease; }
.header-switch-enter-from { opacity: 0; transform: translateY(5px); }
.header-switch-leave-to { opacity: 0; transform: translateY(-5px); }

.compact-university { display: none; }

/* Hamburger Button */
.hamburger-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  padding: 10px;
  margin-left: auto;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease;
}
.hamburger-btn:hover { opacity: 0.8; }
.hamburger-line {
  display: block;
  width: 22px;
  height: 2px;
  background-color: #ffffff;
  border-radius: 1px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;
}
.hamburger-line + .hamburger-line {
  margin-top: 5px;
}
.hamburger-btn.is-active .hamburger-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger-btn.is-active .hamburger-line:nth-child(2) {
  opacity: 0;
}
.hamburger-btn.is-active .hamburger-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Links & Drawer */
.mobile-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 14px;
  font-size: 1.25rem;
  letter-spacing: 0.08em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  text-decoration: none;
  transition: color 0.2s ease, padding-left 0.2s ease;
}
.mobile-link:hover, .mobile-link:focus-visible {
  color: #C7000A;
  padding-left: 6px;
}
.mobile-link.router-link-exact-active {
  color: #C7000A;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (min-width: 640px) {
  .header-row { min-height: 104px; padding: 20px 40px; gap: 24px; }
  .header-subtitle { display: block; }
}
@media (min-width: 768px) {
  .header-links { display: flex; flex-wrap: wrap; gap: 0 16px; font-size: 14px; font-weight: 300; }
  .mobile-drawer { display: none !important; }
  .header-right-mobile { display: none !important; }
}
@media (min-width: 1024px) {
  .header-row { padding-inline: 64px; }
  .header-links { font-size: 1rem; gap: 0 1.5rem; }
  .header-university { font-size: 1rem; }
}
@media (min-width: 1440px) { .compact-university { display: block; } }
@media (min-width: 1920px) {
  .header-row { padding-inline: 5rem; }
}
@media (max-width: 359px) { .header-row { padding-inline: 16px; gap: 12px; } }
</style>
