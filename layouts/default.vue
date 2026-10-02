<template>
  <div class="min-h-screen flex flex-col bg-dark text-white font-noto selection:bg-white/20 selection:text-white">
    <HeaderNav />
    <main class="flex-grow">
      <slot />
    </main>
    <FooterNav />
  </div>
</template>
