<template>
  <footer class="bg-dark text-white font-zen pt-16 pb-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <!-- Brand column -->
        <div class="md:col-span-2 space-y-5">
          <NuxtLink to="/" class="inline-block group">
            <img
              src="/images/logo/logo.svg"
              alt="TechnoTUT logo"
              class="h-10 sm:h-12 w-auto object-contain transition-opacity group-hover:opacity-80"
            />
          </NuxtLink>
          <p class="text-sm text-gray-400 leading-relaxed font-zen">
            豊橋技術科学大学 音楽技術部<br />
            Music &amp; Live production Club - TechnoTUT<br />
            Official Club of Toyohashi University of Technology. We are interested in music and technology.
          </p>
          <div class="flex items-center gap-4 pt-2">
            <a
              href="https://twitter.com/toyohashitechno"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all text-sm font-quicksand"
              aria-label="X (Twitter)"
            >
              𝕏
            </a>
            <a
              href="https://www.instagram.com/tut_technotut/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all text-xs font-quicksand"
              aria-label="Instagram"
            >
              IG
            </a>
            <a
              href="https://soundcloud.com/technotut"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all text-xs font-quicksand"
              aria-label="SoundCloud"
            >
              SC
            </a>
            <a
              href="https://technotut.bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all text-xs font-quicksand"
              aria-label="Bandcamp"
            >
              BC
            </a>
            <a
              href="https://www.youtube.com/@technotut2884/about"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all text-xs font-quicksand"
              aria-label="YouTube"
            >
              YT
            </a>
            <a
              href="https://github.com/TechnoTUT/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all text-xs font-quicksand"
              aria-label="GitHub"
            >
              GH
            </a>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="space-y-3 font-quicksand text-sm tracking-wider">
          <p class="text-xs uppercase text-gray-500 font-semibold mb-4">Sitemap</p>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-gray-400 hover:text-white transition-colors">HOME</NuxtLink></li>
            <li><NuxtLink to="/activity" class="text-gray-400 hover:text-white transition-colors">ACTIVITY</NuxtLink></li>
            <li><NuxtLink to="/gikadaifes" class="text-gray-400 hover:text-white transition-colors">GIKADAIFES</NuxtLink></li>
            <li><NuxtLink to="/access" class="text-gray-400 hover:text-white transition-colors">ACCESS</NuxtLink></li>
            <li><NuxtLink to="/faq" class="text-gray-400 hover:text-white transition-colors">FAQ</NuxtLink></li>
            <li><NuxtLink to="/join-us" class="text-gray-400 hover:text-white transition-colors">JOIN US</NuxtLink></li>
          </ul>
        </div>

        <!-- Address & Contact -->
        <div class="space-y-3 text-sm text-gray-400 font-zen">
          <p class="text-xs uppercase text-gray-500 font-quicksand font-semibold mb-4">Address</p>
          <p class="leading-relaxed">
            愛知県豊橋市天伯町雲雀ヶ丘1-1<br />
            豊橋技術科学大学 クラブハウス2階<br />
            音楽技術部室
          </p>

          <!-- Spam-protected Contact -->
          <div class="pt-3">
            <p class="text-xs uppercase text-gray-500 font-quicksand font-semibold mb-1.5">Contact</p>
            <p class="text-xs font-quicksand text-gray-400">
              contact [at] technotut.net
            </p>
          </div>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-quicksand">
        <p>&copy; 2014 - {{ currentYear }} TechnoTUT. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
