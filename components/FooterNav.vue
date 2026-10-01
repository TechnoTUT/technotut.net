<template>
  <footer class="bg-dark text-white font-noto pt-16 pb-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <!-- Brand column -->
        <div class="md:col-span-2 space-y-5">
          <NuxtLink to="/" class="inline-block group">
            <img
              src="/images/logo/logo.svg"
              alt="TechnoTUT logo"
              class="h-10 sm:h-12 w-auto object-contain transition-opacity group-hover:opacity-80"
            >
          </NuxtLink>
          <p class="text-sm text-gray-400 leading-relaxed font-noto font-[350]">
            豊橋技術科学大学 音楽技術部<br >
            Music &amp; Live production Club - TechnoTUT<br >
            Official Club of Toyohashi University of Technology. We are interested in music and technology.
          </p>
          <div class="flex items-center gap-4 pt-2">
            <a
              href="https://twitter.com/toyohashitechno"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all"
              aria-label="X (Twitter)"
            >
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/tut_technotut/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all"
              aria-label="Instagram"
            >
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
              </svg>
            </a>
            <a
              href="https://soundcloud.com/technotut"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all"
              aria-label="SoundCloud"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.999 14.165c-.052 1.796-1.612 3.169-3.4 3.169h-8.18a.68.68 0 0 1-.675-.683V7.862a.747.747 0 0 1 .452-.724s.75-.513 2.333-.513a5.364 5.364 0 0 1 2.763.755 5.433 5.433 0 0 1 2.57 3.54c.282-.08.574-.121.868-.12.884 0 1.73.358 2.347.992s.948 1.49.922 2.373ZM10.721 8.421c.247 2.98.427 5.697 0 8.672a.264.264 0 0 1-.53 0c-.395-2.946-.22-5.718 0-8.672a.264.264 0 0 1 .53 0ZM9.072 9.448c.285 2.659.37 4.986-.006 7.655a.277.277 0 0 1-.55 0c-.331-2.63-.256-5.02 0-7.655a.277.277 0 0 1 .556 0Zm-1.663-.257c.27 2.726.39 5.171 0 7.904a.266.266 0 0 1-.532 0c-.38-2.69-.257-5.21 0-7.904a.266.266 0 0 1 .532 0Zm-1.647.77a26.108 26.108 0 0 1-.008 7.147.272.272 0 0 1-.542 0 27.955 27.955 0 0 1 0-7.147.275.275 0 0 1 .55 0Zm-1.67 1.769c.421 1.865.228 3.5-.029 5.388a.257.257 0 0 1-.514 0c-.21-1.858-.398-3.549 0-5.389a.272.272 0 0 1 .543 0Zm-1.655-.273c.388 1.897.26 3.508-.01 5.412-.026.28-.514.283-.54 0-.244-1.878-.347-3.54-.01-5.412a.283.283 0 0 1 .56 0Zm-1.668.911c.4 1.268.257 2.292-.026 3.572a.257.257 0 0 1-.514 0c-.241-1.262-.354-2.312-.023-3.572a.283.283 0 0 1 .563 0Z" />
              </svg>
            </a>
            <a
              href="https://technotut.bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all"
              aria-label="Bandcamp"
            >
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@technotut2884/about"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all"
              aria-label="YouTube"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://github.com/TechnoTUT/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all"
              aria-label="GitHub"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
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
        <div class="space-y-3 text-sm text-gray-400 font-noto">
          <p class="text-xs uppercase text-gray-500 font-quicksand font-semibold mb-4">Address</p>
          <p class="leading-relaxed">
            愛知県豊橋市天伯町雲雀ヶ丘1-1<br >
            豊橋技術科学大学 クラブハウス2階<br >
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
