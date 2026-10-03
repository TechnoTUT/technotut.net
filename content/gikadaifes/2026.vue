<template>
  <div ref="pageRoot" class="relative isolate overflow-hidden">
    <!-- Opening Splash / Loading Screen (SVG Line Drawing Animation) -->
    <Teleport to="body">
      <Transition name="splash-fade">
        <div
          v-if="isLoading"
          class="fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center p-6 select-none overflow-hidden"
        >
          <div class="w-full max-w-5xl flex flex-col items-center justify-center px-4 sm:px-8 relative">
            <!-- Animated SVG Logo (Large screen-filling display) -->
            <div class="w-full max-w-[85vw] md:max-w-3xl lg:max-w-4xl max-h-[65vh] flex items-center justify-center utone-svg-loader relative z-10">
              <svg
                id="_レイヤー_2"
                data-name="レイヤー 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 370.14 277.68"
                class="w-full h-auto max-h-[65vh] object-contain"
              >
                <g id="_レイヤー_1-2" data-name="レイヤー 1">
                  <g>
                    <!-- THE -->
                    <g class="utone-path-group">
                      <path d="M17.81,90.97H4.41V4.73H0V0h22.22v4.73h-4.41v86.24Z" />
                      <path d="M42.47,90.97V31.67c0-.98-.6-1.73-1.37-1.73h-2.38v61.02h-13.4V0h13.4v25.14h9.59c4.11,0,7.51,4.28,7.57,9.53v56.29h-13.4Z" />
                      <path d="M81.97,90.97h-15.43c-4.17,0-7.57-4.28-7.57-9.53V7.73c0-4.28,2.8-7.73,6.2-7.73h18.17c3.4,0,6.14,3.45,6.14,7.73v32.35c0,4.28-2.74,7.73-6.14,7.73h-10.96v36.7c0,.9.54,1.58,1.19,1.73h1.19c.77,0,1.37-.83,1.37-1.73v-31.9h13.34v28.82c0,5.25-3.4,9.53-7.51,9.53ZM75,43.08c.66,0,1.13-.6,1.13-1.43V6.15c0-.83-.48-1.43-1.13-1.43h-1.55c-.6,0-1.07.6-1.07,1.43v36.93h2.62Z" />
                    </g>
                    <!-- EXTENDED -->
                    <g class="utone-path-group">
                      <g>
                        <path d="M173.09,194.48v34.04h9.35c2.43,0,4.05-.74,4.86-2.22,1.09-1.95,1.69-5.38,1.82-10.29h1.16v29.98h-1.16c-.29-4.19-.59-6.88-.88-8.07-.38-1.48-.99-2.65-1.85-3.49-.86-.85-2.18-1.27-3.95-1.27h-9.35v28.39c0,3.81.08,6.13.25,6.95s.46,1.48.88,1.97c.42.49,1.21.73,2.39.73h7.22c2.41,0,4.15-.34,5.24-1.02,1.09-.68,2.13-2.01,3.14-4,1.3-2.62,2.63-6.58,3.99-11.88h1.26l-3.67,21.59h-32.8v-2.35h1.51c1,0,1.96-.49,2.86-1.46.67-.68,1.12-1.69,1.37-3.05.24-1.35.36-4.13.36-8.32v-55.95c0-5.46-.27-8.83-.82-10.1-.75-1.69-2.01-2.54-3.77-2.54h-1.51v-2.35h32.8l.47,18.86h-1.22c-.44-4.53-.93-7.64-1.46-9.34-.53-1.69-1.32-2.98-2.37-3.87-.84-.64-2.31-.95-4.42-.95h-11.67Z" />
                        <path d="M195.14,217.73h13.53v2.35c-.86,0-1.46.3-1.8.89-.35.59-.52,1.38-.52,2.35s.37,2.58,1.1,4.7c.23.68.58,1.74,1.04,3.18l2.04,6.6,2.35-6.6c1.51-4.19,2.26-6.84,2.26-7.94,0-.89-.18-1.64-.53-2.25-.36-.61-.93-.92-1.73-.92v-2.35h9.73v2.35c-1.03.13-1.91.7-2.67,1.71-1.03,1.44-2.43,4.57-4.21,9.4l-3.92,10.61,7.16,20.83c1.76,5.12,3.01,8.2,3.77,9.24.75,1.04,1.73,1.62,2.92,1.75v2.29h-13.56v-2.29c.94,0,1.67-.42,2.2-1.27.4-.59.6-1.38.6-2.35s-.67-3.43-2.01-7.37l-4.21-12.45-4.61,12.45c-1.42,3.85-2.13,6.14-2.13,6.86,0,1.02.24,1.94.71,2.76.47.83,1.18,1.28,2.12,1.37v2.29h-9.38v-2.29c.75-.21,1.41-.74,1.98-1.59.79-1.23,2.13-4.36,4.02-9.4l6.03-16.2-5.46-16c-1.55-4.57-2.75-7.44-3.59-8.61-.85-1.16-1.91-1.75-3.19-1.75v-2.35Z" />
                        <path d="M232.16,198.61v19.12h6.72v4.45h-6.72v37.73c0,3.77.27,6.31.8,7.62.53,1.31,1.22,1.97,2.06,1.97.69,0,1.36-.43,2.01-1.3.65-.87,1.15-2.15,1.51-3.84h1.22c-.73,4.15-1.77,7.27-3.11,9.37-1.34,2.1-2.72,3.14-4.14,3.14-.96,0-1.9-.54-2.82-1.62-.92-1.08-1.6-2.62-2.04-4.64-.44-2.01-.66-5.11-.66-9.3v-39.12h-4.55v-2.1c1.15-.93,2.33-2.51,3.53-4.73,1.2-2.22,2.28-4.86,3.22-7.91.48-1.61,1.15-4.55,2.01-8.83h.97Z" />
                        <path d="M241.87,239.64c-.02,8.64,1.01,15.41,3.11,20.32,2.09,4.91,4.55,7.37,7.38,7.37,1.88,0,3.52-1.05,4.91-3.14,1.39-2.1,2.56-5.68,3.5-10.77l.97,1.27c-.44,5.8-1.72,11.08-3.83,15.85s-4.76,7.15-7.94,7.15c-3.45,0-6.41-2.72-8.87-8.16-2.46-5.44-3.69-12.75-3.69-21.94,0-9.95,1.26-17.71,3.78-23.28,2.52-5.57,5.69-8.35,9.49-8.35,3.22,0,5.87,2.15,7.94,6.45,2.07,4.3,3.11,10.05,3.11,17.24h-19.87ZM241.87,235.95h13.31c-.1-3.73-.32-6.35-.66-7.88-.52-2.37-1.3-4.23-2.34-5.59-1.04-1.35-2.12-2.03-3.25-2.03-1.74,0-3.29,1.37-4.66,4.1s-2.17,6.53-2.4,11.4Z" />
                        <path d="M269.32,228.33c3.37-8.21,6.58-12.32,9.63-12.32,1.57,0,2.92.79,4.05,2.38,1.13,1.59,2.03,4.2,2.7,7.84.46,2.54.69,6.44.69,11.69v24.83c0,3.68.15,6.18.44,7.49.23,1.06.6,1.88,1.11,2.48.51.59,1.46.89,2.84.89v2.29h-14.22v-2.29h.6c1.34,0,2.28-.41,2.81-1.24.53-.83.9-2.04,1.11-3.65.08-.64.13-2.62.13-5.97v-23.82c0-5.29-.34-9.13-1.02-11.53-.68-2.39-1.83-3.59-3.44-3.59-2.49,0-4.97,2.75-7.44,8.26v30.68c0,3.94.11,6.37.35,7.3.29,1.23.7,2.13,1.21,2.7.51.57,1.55.86,3.12.86v2.29h-14.22v-2.29h.63c1.46,0,2.45-.75,2.97-2.25.51-1.5.77-4.37.77-8.61v-21.59c0-6.99-.08-11.24-.24-12.77-.16-1.52-.4-2.56-.72-3.11-.32-.55-.76-.83-1.3-.83-.59,0-1.29.32-2.1.95l-.47-2.29,8.66-7.11h1.35v12.32Z" />
                        <path d="M308.75,269.36c-1.4,2.96-2.77,5.09-4.11,6.38s-2.78,1.94-4.33,1.94c-3.14,0-5.88-2.66-8.22-7.97-2.34-5.31-3.52-12.14-3.52-20.48s1.3-15.97,3.89-22.9c2.59-6.92,5.93-10.38,10.01-10.38,2.53,0,4.62,1.63,6.28,4.89v-10.73c0-6.65-.08-10.73-.24-12.26-.16-1.52-.4-2.56-.74-3.11-.33-.55-.75-.83-1.26-.83-.54,0-1.27.34-2.17,1.02l-.41-2.22,8.57-7.11h1.41v67.26c0,6.82.08,10.98.24,12.48.16,1.5.41,2.55.75,3.14.35.59.75.89,1.21.89.57,0,1.32-.36,2.26-1.08l.35,2.22-8.54,7.18h-1.44v-8.32ZM308.75,264.91v-29.98c-.12-2.88-.5-5.5-1.13-7.88-.63-2.37-1.46-4.16-2.5-5.37-1.04-1.21-2.04-1.81-3.03-1.81-1.84,0-3.48,1.67-4.93,5.02-1.9,4.4-2.86,10.84-2.86,19.31s.92,15.11,2.76,19.66c1.84,4.55,3.89,6.83,6.15,6.83,1.9,0,3.75-1.93,5.52-5.78Z" />
                        <path d="M320.79,239.64c-.02,8.64,1.01,15.41,3.11,20.32,2.09,4.91,4.55,7.37,7.38,7.37,1.88,0,3.52-1.05,4.91-3.14,1.39-2.1,2.56-5.68,3.5-10.77l.97,1.27c-.44,5.8-1.72,11.08-3.83,15.85-2.11,4.76-4.76,7.15-7.94,7.15-3.45,0-6.41-2.72-8.87-8.16-2.46-5.44-3.69-12.75-3.69-21.94,0-9.95,1.26-17.71,3.78-23.28,2.52-5.57,5.69-8.35,9.49-8.35,3.22,0,5.87,2.15,7.94,6.45,2.07,4.3,3.11,10.05,3.11,17.24h-19.87ZM320.79,235.95h13.31c-.11-3.73-.33-6.35-.66-7.88-.52-2.37-1.3-4.23-2.34-5.59-1.04-1.35-2.12-2.03-3.25-2.03-1.74,0-3.29,1.37-4.66,4.1s-2.17,6.53-2.4,11.4Z" />
                        <path d="M360.16,269.36c-1.4,2.96-2.77,5.09-4.11,6.38s-2.78,1.94-4.33,1.94c-3.14,0-5.88-2.66-8.22-7.97-2.34-5.31-3.52-12.14-3.52-20.48s1.3-15.97,3.89-22.9c2.59-6.92,5.93-10.38,10.01-10.38,2.53,0,4.62,1.63,6.28,4.89v-10.73c0-6.65-.08-10.73-.24-12.26-.16-1.52-.4-2.56-.74-3.11-.33-.55-.75-.83-1.26-.83-.54,0-1.27.34-2.17,1.02l-.41-2.22,8.57-7.11h1.41v67.26c0,6.82.08,10.98.24,12.48.16,1.5.41,2.55.75,3.14.35.59.75.89,1.21.89.57,0,1.32-.36,2.26-1.08l.35,2.22-8.54,7.18h-1.44v-8.32ZM360.16,264.91v-29.98c-.12-2.88-.5-5.5-1.13-7.88-.63-2.37-1.46-4.16-2.5-5.37-1.04-1.21-2.04-1.81-3.03-1.81-1.84,0-3.48,1.67-4.93,5.02-1.9,4.4-2.86,10.84-2.86,19.31s.92,15.11,2.76,19.66c1.84,4.55,3.89,6.83,6.15,6.83,1.9,0,3.75-1.93,5.52-5.78Z" />
                      </g>
                      <g>
                        <path d="M164.84,251.26v-22.11h27.86v3.74h-20.27v4.9h18.86v3.73h-18.86v6.02h20.99v3.72h-28.58Z" />
                        <path d="M192.56,251.26l9.82-8.25-9.41-7.77h8.79l4.82,4.4,5.07-4.4h8.46l-9.23,7.59,10.07,8.43h-8.84l-5.54-4.96-5.59,4.96h-8.43Z" />
                        <path d="M233.91,235.24v3.38h-4.92v6.45c0,1.31.05,2.07.14,2.28.09.22.31.4.64.54.33.14.74.21,1.22.21.67,0,1.63-.14,2.9-.41l.62,3.29c-1.67.42-3.57.63-5.69.63-1.3,0-2.47-.13-3.51-.38-1.04-.26-1.81-.59-2.29-1-.49-.41-.82-.96-1.01-1.65-.15-.49-.23-1.49-.23-2.99v-6.98h-3.31v-3.38h3.31v-3.18l7.23-2.47v5.66h4.92Z" />
                        <path d="M250.89,246.16l7.18.71c-.92,1.55-2.38,2.73-4.37,3.54-1.99.81-4.48,1.21-7.47,1.21-4.73,0-8.24-.91-10.51-2.73-1.79-1.46-2.69-3.3-2.69-5.52,0-2.65,1.18-4.73,3.54-6.24s5.34-2.25,8.94-2.25c4.05,0,7.24.79,9.59,2.36,2.34,1.57,3.46,3.98,3.36,7.23h-18.04c.05,1.26.63,2.23,1.74,2.93,1.11.7,2.49,1.05,4.15,1.05,1.13,0,2.08-.18,2.84-.54.77-.36,1.35-.94,1.74-1.75ZM251.3,241.88c-.05-1.23-.59-2.16-1.61-2.8-1.03-.64-2.27-.96-3.74-.96-1.57,0-2.87.34-3.9,1.01-1.03.67-1.53,1.59-1.51,2.74h10.76Z" />
                        <path d="M285.31,251.26h-7.2v-8.17c0-1.73-.15-2.85-.46-3.36-.31-.51-.81-.9-1.5-1.18-.69-.28-1.53-.42-2.5-.42-1.25,0-2.37.2-3.36.6-.99.4-1.67.94-2.04,1.6-.37.66-.55,1.89-.55,3.68v7.25h-7.2v-16.02h6.69v2.35c2.37-1.81,5.37-2.71,8.97-2.71,1.59,0,3.04.17,4.36.5,1.31.34,2.31.77,2.98,1.29.68.52,1.14,1.12,1.41,1.78s.4,1.61.4,2.85v9.95Z" />
                        <path d="M313.79,251.26h-6.69v-2.35c-1.11.92-2.42,1.6-3.93,2.04-1.51.45-3.04.67-4.58.67-3.13,0-5.81-.74-8.04-2.22-2.23-1.48-3.34-3.55-3.34-6.21s1.08-4.78,3.25-6.19c2.17-1.41,4.91-2.12,8.23-2.12,3.04,0,5.67.74,7.89,2.23v-7.96h7.2v22.11ZM294.57,242.9c0,1.71.4,2.95,1.21,3.71,1.16,1.11,2.79,1.66,4.87,1.66,1.66,0,3.07-.41,4.23-1.24s1.74-2.07,1.74-3.72c0-1.84-.56-3.16-1.69-3.97-1.13-.81-2.57-1.21-4.33-1.21s-3.14.4-4.29,1.2-1.73,1.99-1.73,3.58Z" />
                        <path d="M332.88,246.16l7.18.71c-.92,1.55-2.38,2.73-4.37,3.54-1.99.81-4.48,1.21-7.47,1.21-4.73,0-8.24-.91-10.51-2.73-1.79-1.46-2.69-3.3-2.69-5.52,0-2.65,1.18-4.73,3.54-6.24s5.34-2.25,8.95-2.25c4.05,0,7.24.79,9.59,2.36,2.34,1.57,3.46,3.98,3.36,7.23h-18.04c.05,1.26.63,2.23,1.74,2.93,1.11.7,2.5,1.05,4.15,1.05,1.13,0,2.08-.18,2.85-.54.77-.36,1.35-.94,1.74-1.75ZM333.29,241.88c-.05-1.23-.59-2.16-1.61-2.8-1.03-.64-2.27-.96-3.74-.96-1.57,0-2.87.34-3.9,1.01-1.03.67-1.53,1.59-1.51,2.74h10.76Z" />
                        <path d="M367.49,251.26h-6.69v-2.35c-1.11.92-2.42,1.6-3.93,2.04-1.51.45-3.04.67-4.58.67-3.13,0-5.81-.74-8.04-2.22-2.23-1.48-3.34-3.55-3.34-6.21s1.08-4.78,3.25-6.19c2.17-1.41,4.91-2.12,8.23-2.12,3.04,0,5.67.74,7.89,2.23v-7.96h7.2v22.11ZM348.27,242.9c0,1.71.4,2.95,1.21,3.71,1.16,1.11,2.79,1.66,4.87,1.66,1.66,0,3.07-.41,4.23-1.24s1.74-2.07,1.74-3.72c0-1.84-.56-3.16-1.69-3.97-1.13-.81-2.57-1.21-4.33-1.21s-3.14.4-4.29,1.2-1.73,1.99-1.73,3.58Z" />
                      </g>
                    </g>
                    <!-- VOL. 11 -->
                    <g class="utone-path-group">
                      <path d="M229.25,184.37v-6.46h-2.38v-6.46h-2.38v-19.38h-2.38v-6.46h-2.38v-25.84h4.77v19.38h2.38v6.46h2.38v19.38h4.77v-19.38h2.38v-6.46h2.38v-19.38h4.77v25.84h-2.38v6.46h-2.38v19.38h-2.38v6.46h-2.38v6.46h-4.77Z" />
                      <path d="M250.34,184.37v-6.46h-2.38v-6.46h-2.38v-38.76h2.38v-6.46h2.38v-6.46h14.3v6.46h2.38v6.46h2.38v38.76h-2.38v6.46h-2.38v6.46h-14.3ZM262.25,171.45v-6.46h2.38v-25.84h-2.38v-6.46h-9.53v6.46h-2.38v25.84h2.38v6.46h9.53Z" />
                      <path d="M285.72,184.37v-6.46h-2.38v-6.46h-2.38v-64.59h-4.77v-12.92h9.53v71.05h2.38v6.46h7.15v12.92h-9.53Z" />
                      <path d="M302.04,184.37v-25.84h9.53v25.84h-9.53Z" />
                      <path d="M327.89,184.37v-12.92h4.77v-51.67h-4.77v-12.92h4.77v-12.92h4.77v77.51h4.77v12.92h-14.3Z" />
                      <path d="M353.74,184.37v-12.92h4.77v-51.67h-4.77v-12.92h4.77v-12.92h4.77v77.51h4.77v12.92h-14.3Z" />
                    </g>
                    <!-- UTOPIA -->
                    <g class="utone-path-group">
                      <path d="M31.78,184.54H12.34c-5.25,0-9.53-4.28-9.53-9.53v-81.44h16.89v85.04c0,.9.68,1.58,1.5,1.73h1.5c.98,0,1.73-.83,1.73-1.73v-85.04h16.81v81.44c0,5.25-4.28,9.53-9.46,9.53Z" />
                      <path d="M67.58,184.54h-12.91c-5.25,0-9.53-4.28-9.53-9.53v-81.44h16.89v43.08h5.55v4.73h-5.55v37.23c0,.9.68,1.58,1.5,1.73h4.05v4.2Z" />
                      <path d="M100.38,184.54h-19.36c-5.25,0-9.53-4.28-9.53-9.53v-71.98c0-5.18,4.28-9.46,9.53-9.46h19.36c5.25,0,9.53,4.28,9.53,9.46v71.98c0,5.25-4.28,9.53-9.53,9.53ZM91.37,180.34c.98,0,1.73-.83,1.73-1.73v-79.11c0-.98-.75-1.73-1.73-1.73h-1.5c-.9.08-1.58.83-1.58,1.73v79.11c0,.9.68,1.58,1.58,1.73h1.5Z" />
                      <path d="M113.81,184.54v-90.97h28.9c5.25,0,9.53,4.2,9.53,9.46v46.84c0,5.18-4.28,9.46-9.53,9.46h-12.08v25.22h-16.81ZM135.35,152.87v-52.84c0-.98-.75-1.73-1.65-1.73h-3.08v56.29h3.08c.9,0,1.65-.75,1.65-1.73Z" />
                      <path d="M173.02,110.39h-16.89v-16.81h16.89v16.81ZM173.02,184.54h-16.89v-69.43h16.89v69.43Z" />
                      <path d="M215.35,184.54h-30.62c-4.28,0-7.81-3.53-7.81-7.81v-32.27c0-4.28,3.53-7.81,7.81-7.81h13.81v-36.63c0-.9-.68-1.65-1.5-1.73h-1.58c-.9,0-1.73.75-1.73,1.73v31.9h-16.81v-28.9c0-5.18,4.28-9.46,9.53-9.46h19.36c5.25,0,9.53,4.28,9.53,9.46v81.51ZM198.54,179.81v-38.43h-3.08c-.98,0-1.73.45-1.73,1.43v35.58c0,.98.75,1.43,1.73,1.43h3.08Z" />
                    </g>
                    <!-- TONE -->
                    <g class="utone-path-group">
                      <path d="M25.25,277.54H8.36v-86.24H2.81v-4.73h28v4.73h-5.55v86.24Z" />
                      <path d="M62.1,277.54h-19.36c-5.25,0-9.53-4.28-9.53-9.53v-71.98c0-5.18,4.28-9.46,9.53-9.46h19.36c5.25,0,9.53,4.28,9.53,9.46v71.98c0,5.25-4.28,9.53-9.53,9.53ZM53.09,273.33c.98,0,1.73-.83,1.73-1.73v-79.11c0-.98-.75-1.73-1.73-1.73h-1.5c-.9.08-1.58.83-1.58,1.73v79.11c0,.9.68,1.58,1.58,1.73h1.5Z" />
                      <path d="M97.15,277.54v-85.04c0-.98-.83-1.73-1.73-1.73h-1.5c-.9.08-1.58.83-1.58,1.73v85.04h-16.81v-81.51c0-5.18,4.28-9.46,9.53-9.46h19.36c5.25,0,9.53,4.28,9.53,9.46v81.51h-16.81Z" />
                      <path d="M146.83,277.54h-19.44c-5.25,0-9.53-4.28-9.53-9.53v-73.71c0-4.28,3.53-7.73,7.81-7.73h22.89c4.28,0,7.73,3.45,7.73,7.73v32.35c0,4.28-3.45,7.73-7.73,7.73h-13.81v36.7c0,.9.68,1.58,1.5,1.73h1.5c.98,0,1.73-.83,1.73-1.73v-31.9h16.81v28.82c0,5.25-4.28,9.53-9.46,9.53ZM138.05,229.65c.83,0,1.43-.6,1.43-1.43v-35.5c0-.83-.6-1.43-1.43-1.43h-1.95c-.75,0-1.35.6-1.35,1.43v36.93h3.3Z" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Ambient Cyber Glow (static theme cyan) -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden">
      <!-- Vertical 'VOL. 11 // THE UTOPIA TONE' Cyber Tag in right margin -->
      <div class="hidden xl:flex absolute top-[calc(100vh-6rem)] right-8 items-center gap-3 rotate-90 origin-bottom-right font-mono text-[10px] tracking-[0.4em] text-[rgba(0,177,224,0.35)] uppercase">
        <span class="w-8 h-[1px] bg-[rgba(0,177,224,0.4)]" />
        <span>VOL.11 EXTENDED</span>
      </div>

    </div>

    <div class="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-5xl mx-auto">
      <!-- Breadcrumb / Back Link -->
      <div class="mb-10">
      <NuxtLink
        to="/gikadaifes"
        class="text-xs font-quicksand tracking-wider text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
      >
        <span class="group-hover:-translate-x-1 transition-transform">&larr;</span>
        <span>BACK TO GIKADAIFES</span>
      </NuxtLink>
    </div>

    <!-- Hero / Title Header -->
    <header data-glow-stop class="relative mb-16">
      <div class="flex flex-wrap items-center gap-3 mb-4">
        <span class="font-quicksand text-xs sm:text-sm tracking-widest text-[#00b1e0] uppercase font-medium">
          The Utopia Tone vol.11 Extended
        </span>
      </div>

      <div class="flex items-center justify-between gap-6 mb-6">
        <div class="relative inline-block overflow-hidden">
          <h1 class="font-quicksand font-light text-4xl sm:text-6xl md:text-7xl text-white tracking-tight pb-1 sm:pb-2">
            技科大祭 2026
          </h1>
          <div aria-hidden="true" class="block-reveal-mask block-reveal-active" />
        </div>

        <!-- Vol.11 logo, vertically centered with the headline -->
        <img
          src="/images/gikadaifes/2026/utone11ext.svg"
          alt=""
          aria-hidden="true"
          class="pointer-events-none select-none shrink-0 w-[28%] max-w-[16rem] hidden sm:block"
        >
      </div>

      <div class="font-noto text-base sm:text-lg text-gray-dim font-[350] leading-relaxed max-w-3xl space-y-2">
        <p>お待たせいたしました！！</p>
        <p>
          10月10日（土）、10月11日（日）に開催される技科大祭にて、DJイベント<span class="whitespace-nowrap">「The Utopia Tone vol.11
            Extended」</span>を開催します！
        </p>
        <p class="text-white font-normal">
          入場無料で、学外の方もご参加いただけます！
        </p>
      </div>

      <!-- Key Info Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div class="p-4 bg-dark border border-white/10">
          <p class="font-quicksand text-xs text-gray-400 tracking-wider uppercase mb-1">DATE</p>
          <p class="font-noto text-sm text-white font-light">2026.10.10 (土) - 10.11 (日)</p>
        </div>
        <div class="p-4 bg-dark border border-white/10">
          <p class="font-quicksand text-xs text-gray-400 tracking-wider uppercase mb-1">TIME</p>
          <p class="font-quicksand text-sm text-white font-light">10:00 - 17:00</p>
        </div>
        <div class="p-4 bg-dark border border-white/10">
          <p class="font-quicksand text-xs text-gray-400 tracking-wider uppercase mb-1">PLACE</p>
          <p class="font-noto text-sm text-white font-light">福利施設1F「コモンズⅠ」</p>
        </div>
        <div class="p-4 bg-dark border border-white/10">
          <p class="font-quicksand text-xs text-gray-400 tracking-wider uppercase mb-1">ENTRANCE</p>
          <p class="font-noto text-sm text-white font-light">入場無料（一般来場可）</p>
        </div>
      </div>
    </header>

    <!-- Flyer Showcase -->
    <section data-glow-stop class="relative mb-20">
      <div class="section-glow" style="top: -7.5rem" />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        <div class="flex items-center justify-center">
          <div
            class="w-full max-w-xs overflow-hidden border border-white/10 bg-dark aspect-[1/1.414] cursor-pointer group"
            @click="activeModalImage = '/images/gikadaifes/2026/2026flyer.png'"
          >
            <NuxtImg
              src="/images/gikadaifes/2026/2026flyer.png"
              alt="The Utopia Tone vol.11 Extended Flyer"
              format="webp"
              class="w-full h-full object-contain object-center group-hover:opacity-90 transition-opacity"
            />
          </div>
        </div>
        <div class="flex flex-col justify-between py-2 space-y-6">
          <div class="space-y-6">
            <div class="space-y-4 font-noto leading-relaxed">
              <div class="p-4 border border-white/10 bg-dark">
                <p class="font-quicksand text-xs tracking-wider text-white font-medium uppercase mb-1">Day 1：CLUB MUSIC</p>
                <p class="text-xs sm:text-sm text-gray-dim font-[350]">
                  ハウスやテクノ、ドラムンベース、ベースミュージックを中心とした、本格的なダンスミュージックのフロアです。
                </p>
              </div>
              <div class="p-4 border border-white/10 bg-dark">
                <p class="font-quicksand text-xs tracking-wider text-white font-medium uppercase mb-1">Day 2：SUBCULTURE</p>
                <p class="text-xs sm:text-sm text-gray-dim font-[350]">
                  アニメソングやゲーム音楽、VTuber楽曲、同人音楽などを中心とした、幅広いサブカルチャー音楽のフロアです。
                </p>
              </div>
            </div>
          </div>
          <div class="pt-4">
            <NuxtLink to="/access" class="common-btn text-xs py-2 px-5 inline-flex">
              <span>会場アクセスを確認</span>
              <span>&rarr;</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Stage Highlight Section -->
    <section data-glow-stop class="mb-20 p-8 sm:p-10 bg-dark border border-white/10 relative">
      <div class="section-glow" style="top: -4.5rem" />
      <div>
        <div class="mb-4">
          <span class="inline-flex items-center px-3 py-1 bg-[#00b1e0]/15 border border-[#00b1e0]/40 text-[#00b1e0] text-xs font-quicksand tracking-wider uppercase font-medium">
            MAIN STAGE
          </span>
        </div>

        <h2 class="font-noto text-2xl sm:text-3xl font-light text-white mb-4">
          技科大祭メインステージ 出演者決定！！
        </h2>

        <p class="font-noto text-sm sm:text-base text-gray-dim font-[350] leading-relaxed mb-6 max-w-3xl">
          特設ステージ後方に設置される大型モニターを活用した、<span class="text-white font-normal">VJあり</span>のパフォーマンスとなります！
          ぜひメインステージを観に来てください！！
        </p>

        <!-- Stage Time Card (Uniform font size) -->
        <div class="p-4 sm:p-5 border border-white/10 bg-dark mb-6">
          <span class="text-xs font-quicksand tracking-widest text-gray-400 uppercase block mb-1">STAGE TIME</span>
          <p class="font-noto text-base sm:text-lg text-white font-light">
            2日目・10月11日（日） 12:00 ～ 12:40
          </p>
        </div>

        <!-- Performer Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <!-- DJ: Jokk4 -->
          <div class="p-5 border border-white/10 bg-dark">
            <span class="text-xs font-quicksand tracking-wider text-gray-400 block mb-1">DJ</span>
            <p class="font-noto text-lg text-white font-light">Jokk4</p>
          </div>

          <!-- DJ: Taira -->
          <div class="p-5 border border-white/10 bg-dark">
            <span class="text-xs font-quicksand tracking-wider text-gray-400 block mb-1">DJ</span>
            <p class="font-noto text-lg text-white font-light">Taira</p>
          </div>

          <!-- VJ: はっちゃん◈ -->
          <div class="p-5 border border-white/10 bg-dark">
            <span class="text-xs font-quicksand tracking-wider text-gray-400 block mb-1">VJ</span>
            <p class="font-noto text-lg text-white font-light">はっちゃん◈</p>
          </div>
        </div>

        <!-- Stage Location Map -->
        <div class="relative z-0 isolate border border-white/10 bg-dark overflow-hidden">
          <div class="p-4 sm:px-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span class="text-xs font-quicksand tracking-wider text-gray-400 uppercase block">LOCATION</span>
              <p class="font-noto text-sm sm:text-base text-white font-light">特設メインステージ（図書館前）</p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=%E8%B1%8A%E6%A9%8B%E6%8A%80%E8%A1%93%E7%A7%91%E5%AD%A6%E5%A4%A7%E5%AD%A6%E9%99%84%E5%B1%9E%E5%9B%B3%E6%9B%B8%E9%A4%A8"
              target="_blank"
              rel="noopener noreferrer"
              class="common-btn text-xs py-1.5 px-4 inline-flex"
            >
              <span>Google Maps で開く</span>
              <span>&rarr;</span>
            </a>
          </div>
          <div class="relative w-full h-64 sm:h-80 map-dark-theme z-0">
            <div ref="stageMapContainerRef" class="w-full h-full z-0" />
          </div>
        </div>
      </div>
    </section>

    <!-- Guest Artists Section -->
    <section class="relative mb-20">
      <div class="section-glow" style="top: -8rem" />
      <div class="mb-10">
        <p class="font-quicksand text-xs tracking-widest text-gray-400 uppercase mb-2">LINEUP</p>
        <h2 class="font-quicksand font-light text-3xl sm:text-5xl text-white tracking-tight">
          GUEST ARTISTS
        </h2>
      </div>

      <!-- Day 1 Guests (3 Cards) -->
      <div data-glow-stop class="mb-12">
        <div class="flex items-center gap-3 mb-6">
          <span class="text-xs font-quicksand tracking-widest text-white uppercase font-medium">DAY 1</span>
          <span class="text-white/20">•</span>
          <span class="text-xs font-noto text-gray-400">10月10日（土） CLUB MUSIC</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- 1. SyurV -->
          <div class="bg-dark border border-white/10 overflow-hidden flex flex-col group hover:border-white/30 transition-all">
            <div class="aspect-square bg-dark relative overflow-hidden">
              <NuxtImg
                src="/images/gikadaifes/2026/2022-06-10_23.57.31.png"
                alt="SyurV"
                format="webp"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-6 flex-grow flex flex-col justify-between">
              <div>
                <span class="text-xs font-quicksand tracking-wider text-gray-400 block mb-2">DJ</span>
                <h3 class="font-noto text-2xl font-light text-white mb-3">SyurV</h3>
                <p class="font-noto text-xs sm:text-sm text-gray-dim font-[350] leading-relaxed">
                  名古屋で主に活動しているDJ／トラックメイカー。Anti-Aging Record 2026現DJ班長。DnB、Psy、Experimentalを中心に、サブカルも含む幅広い音楽でDJをする。奇怪なトラックを作り、サークルメンバーに奇怪な音楽を布教する活動を行っている。
                </p>
              </div>
            </div>
          </div>

          <!-- 2. 飛田 -->
          <div class="bg-dark border border-white/10 overflow-hidden flex flex-col group hover:border-white/30 transition-all">
            <div class="aspect-square bg-dark relative overflow-hidden">
              <NuxtImg
                src="/images/gikadaifes/2026/20a144d3d0cdbcdb.jpg"
                alt="飛田"
                format="webp"
                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-6 flex-grow flex flex-col justify-between">
              <div>
                <span class="text-xs font-quicksand tracking-wider text-gray-400 block mb-2">DJ</span>
                <h3 class="font-noto text-2xl font-light text-white mb-3">飛田</h3>
                <p class="font-noto text-xs sm:text-sm text-gray-dim font-[350] leading-relaxed">
                  Liquid Funk／Deep Drum &amp; Bassを軸に、Bass Music Party「低音研究会」のCrewやLiquid Funk Party「Liquidense」の主催など、名古屋のBass Musicシーンにて精力的に活動中。
                </p>
              </div>
            </div>
          </div>

          <!-- 3. 大楽Chap -->
          <div class="bg-dark border border-white/10 overflow-hidden flex flex-col group hover:border-white/30 transition-all">
            <div class="aspect-square bg-dark relative overflow-hidden">
              <NuxtImg
                src="/images/gikadaifes/2026/IMG_4298.jpg"
                alt="大楽Chap"
                format="webp"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-6 flex-grow flex flex-col justify-between">
              <div>
                <span class="text-xs font-quicksand tracking-wider text-gray-400 block mb-2">MC</span>
                <h3 class="font-noto text-2xl font-light text-white mb-3">大楽Chap（DaraChap）</h3>
                <p class="font-noto text-xs sm:text-sm text-gray-dim font-[350] leading-relaxed">
                  愛知県春日井市出身のMC／ラッパー。HipHopやレゲエをルーツに持ち、巧みなフロウでUK Bassを乗りこなす。好きな食べ物は餃子。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Day 2 Guests (2 Cards centered) -->
      <div data-glow-stop>
        <div class="flex items-center gap-3 mb-6">
          <span class="text-xs font-quicksand tracking-widest text-white uppercase font-medium">DAY 2</span>
          <span class="text-white/20">•</span>
          <span class="text-xs font-noto text-gray-400">10月11日（日） SUBCULTURE</span>
        </div>
        <!-- Desktop: 6-column grid matching the 3-column width exactly, Mobile/Tablet: 1 or 2 cols -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          <!-- 4. DJ石倉 (lg: col 2-3) -->
          <div class="lg:col-start-2 lg:col-span-2 bg-dark border border-white/10 overflow-hidden flex flex-col group hover:border-white/30 transition-all">
            <div class="aspect-square bg-dark relative overflow-hidden">
              <NuxtImg
                src="/images/gikadaifes/2026/DJ石倉_アーティスト写真_1-1.png"
                alt="DJ石倉"
                format="webp"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-6 flex-grow flex flex-col justify-between">
              <div>
                <span class="text-xs font-quicksand tracking-wider text-gray-400 block mb-2">DJ / TRACKMAKER</span>
                <h3 class="font-noto text-2xl font-light text-white mb-3">DJ石倉</h3>
                <p class="font-noto text-xs sm:text-sm text-gray-dim font-[350] leading-relaxed">
                  都内在住のトラックメイカー／DJ。学マスを中心としたRemix・Mashupの制作やDJを行う一方、合成音声を使ったオリジナル楽曲も制作している。後輩たちには、学割が効くうちにSerum 2を買うことを勧めている。
                </p>
              </div>
            </div>
          </div>

          <!-- 5. おそクラ Crew (lg: col 4-5) -->
          <div class="lg:col-span-2 bg-dark border border-white/10 overflow-hidden flex flex-col group hover:border-white/30 transition-all">
            <div class="aspect-square bg-dark relative overflow-hidden">
              <NuxtImg
                src="/images/gikadaifes/2026/1621640444583.jpg"
                alt="おそクラ Crew"
                format="webp"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-6 flex-grow flex flex-col justify-between">
              <div>
                <span class="text-xs font-quicksand tracking-wider text-gray-400 block mb-2">DJ PARTY CREW</span>
                <h3 class="font-noto text-2xl font-light text-white mb-3">おそクラ Crew</h3>
                <p class="font-noto text-xs sm:text-sm text-gray-dim font-[350] leading-relaxed">
                  「遅いBPMで気持ちよくなりたい」という考えから生まれた、MAX BPM140・オールジャンルのDJイベント。さまざまな楽曲を楽しめるイベントとなっています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timetable Section -->
    <section data-glow-stop class="relative mb-20">
      <div class="section-glow" style="top: -8rem" />
      <div class="mb-10 text-center sm:text-left">
        <p class="font-quicksand text-xs tracking-widest text-gray-400 uppercase mb-2">SCHEDULE</p>
        <h2 class="font-quicksand font-light text-3xl sm:text-5xl text-white tracking-tight">
          TIMETABLE
        </h2>
      </div>

      <!-- Timetable Tabs -->
      <div class="flex items-center gap-2 mb-8 border-b border-white/10 pb-4">
        <button
          type="button"
          class="font-quicksand text-sm tracking-wider px-5 py-2.5 transition-all relative"
          :class="activeTimetableDay === 'day1' ? 'text-white bg-white/10 border-b-2 border-white' : 'text-gray-400 hover:text-white'"
          @click="activeTimetableDay = 'day1'"
        >
          <span class="font-medium mr-2">DAY 1</span>
          <span class="text-xs text-gray-400 font-noto">10/10 (土) CLUB MUSIC</span>
        </button>
        <button
          type="button"
          class="font-quicksand text-sm tracking-wider px-5 py-2.5 transition-all relative"
          :class="activeTimetableDay === 'day2' ? 'text-white bg-white/10 border-b-2 border-white' : 'text-gray-400 hover:text-white'"
          @click="activeTimetableDay = 'day2'"
        >
          <span class="font-medium mr-2">DAY 2</span>
          <span class="text-xs text-gray-400 font-noto">10/11 (日) SUBCULTURE</span>
        </button>
      </div>

      <!-- Active Day Panel: Day 1 -->
      <div v-show="activeTimetableDay === 'day1'" class="bg-dark border border-white/10 p-6 flex flex-col justify-between lg:flex-row lg:items-start lg:gap-10">
        <div class="lg:flex-1 lg:min-w-0">
          <div class="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <div>
              <span class="text-xs font-quicksand tracking-wider text-gray-400 block mb-1">DAY 1</span>
              <h3 class="font-noto text-xl font-light text-white">10月10日（土）</h3>
            </div>
            <span class="text-xs font-quicksand tracking-widest text-[#00b1e0] border-[#00b1e0]/30 px-3 py-1">CLUB MUSIC</span>
          </div>

          <!-- Schedule List -->
          <div class="divide-y divide-white/5 mb-8">
            <div
              v-for="slot in day1Schedule"
              :key="slot.time"
              class="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 transition-colors hover:bg-white/[0.02] px-2"
              :class="[
                { 'bg-white/[0.03]': slot.tag === 'GUEST' },
                slot.tag === 'GUEST' ? 'sm:flex-col sm:items-stretch' : '',
              ]"
            >
              <div class="flex items-baseline gap-3 shrink-0">
                <span class="font-mono text-xs sm:text-sm text-gray-400 font-light w-28">{{ slot.time }}</span>
                <div class="w-20 shrink-0 flex items-center">
                  <span
                    v-if="slot.tag"
                    class="text-xs font-quicksand font-medium tracking-wide w-full text-center py-0.5"
                    :class="slot.tag === 'GUEST' ? 'bg-[#00b1e0] text-white font-semibold' : 'border border-white/20 text-gray-300'"
                  >
                    {{ slot.tag }}
                  </span>
                </div>
              </div>
              <div class="flex-grow text-left sm:text-right">
                <div class="font-noto text-sm font-light" :class="slot.tag === 'GUEST' ? 'text-white font-normal text-xl' : 'text-gray-200'">
                  {{ slot.artist }}
                </div>
                <div
                  v-if="slot.sub"
                  class="font-noto font-light mt-0.5"
                  :class="slot.tag === 'GUEST' ? 'text-sm text-white font-normal' : 'text-xs text-gray-400'"
                >
                  {{ slot.sub }}
                </div>
                <div v-if="slot.genre" class="text-xs font-quicksand text-gray-500 font-light mt-0.5">
                  {{ slot.genre }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Flyer image preview (placed below schedule) -->
        <div class="pt-6 border-t border-white/10 mt-6 lg:pt-0 lg:mt-0 lg:border-t-0 lg:border-l lg:pl-8 lg:w-96 lg:shrink-0">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-quicksand tracking-wider text-gray-400">TIMETABLE FLYER</span>
            <button
              type="button"
              class="text-xs font-quicksand text-gray-400 hover:text-white transition-colors"
              @click="activeModalImage = '/images/gikadaifes/2026/TT_1.png'"
            >
              画像を拡大表示 &rarr;
            </button>
          </div>
          <div
            class="overflow-hidden bg-dark cursor-pointer group flex items-center justify-center p-2 max-w-2xl mx-auto"
            @click="activeModalImage = '/images/gikadaifes/2026/TT_1.png'"
          >
            <NuxtImg
              src="/images/gikadaifes/2026/TT_1.png"
              alt="1日目 タイムテーブル画像"
              format="webp"
              class="w-full h-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </div>
        </div>
      </div>

      <!-- Active Day Panel: Day 2 -->
      <div v-show="activeTimetableDay === 'day2'" class="bg-dark border border-white/10 p-6 flex flex-col justify-between lg:flex-row lg:items-start lg:gap-10">
        <div class="lg:flex-1 lg:min-w-0">
          <div class="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <div>
              <span class="text-xs font-quicksand tracking-wider text-gray-400 block mb-1">DAY 2</span>
              <h3 class="font-noto text-xl font-light text-white">10月11日（日）</h3>
            </div>
            <span class="text-xs font-quicksand tracking-widest text-[#00b1e0] border-[#00b1e0]/30 px-3 py-1">SUBCULTURE</span>
          </div>

          <!-- Schedule List -->
          <div class="divide-y divide-white/5 mb-8">
            <div
              v-for="slot in day2Schedule"
              :key="slot.time"
              class="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 transition-colors hover:bg-white/[0.02] px-2"
              :class="[
                { 'bg-white/[0.03]': slot.tag === 'GUEST' },
                slot.tag === 'GUEST' ? 'sm:flex-col sm:items-stretch' : '',
              ]"
            >
              <div class="flex items-baseline gap-3 shrink-0">
                <span class="font-mono text-xs sm:text-sm text-gray-400 font-light w-28">{{ slot.time }}</span>
                <div class="w-20 shrink-0 flex items-center">
                  <span
                    v-if="slot.tag"
                    class="text-xs font-quicksand font-medium tracking-wide w-full text-center py-0.5"
                    :class="slot.tag === 'GUEST' ? 'bg-[#00b1e0] text-white font-semibold' : 'border border-white/20 text-gray-300'"
                  >
                    {{ slot.tag }}
                  </span>
                </div>
              </div>
              <div class="flex-grow text-left sm:text-right">
                <div class="font-noto text-sm font-light" :class="slot.tag === 'GUEST' ? 'text-white font-normal text-xl' : 'text-gray-200'">
                  {{ slot.artist }}
                </div>
                <div v-if="slot.genre" class="text-xs font-quicksand text-gray-500 font-light mt-0.5">
                  {{ slot.genre }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Flyer image preview (placed below schedule) -->
        <div class="pt-6 border-t border-white/10 mt-6 lg:pt-0 lg:mt-0 lg:border-t-0 lg:border-l lg:pl-8 lg:w-96 lg:shrink-0">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-quicksand tracking-wider text-gray-400">TIMETABLE FLYER</span>
            <button
              type="button"
              class="text-xs font-quicksand text-gray-400 hover:text-white transition-colors"
              @click="activeModalImage = '/images/gikadaifes/2026/TT_2.png'"
            >
              画像を拡大表示 &rarr;
            </button>
          </div>
          <div
            class="overflow-hidden bg-dark cursor-pointer group flex items-center justify-center p-2 max-w-2xl mx-auto"
            @click="activeModalImage = '/images/gikadaifes/2026/TT_2.png'"
          >
            <NuxtImg
              src="/images/gikadaifes/2026/TT_2.png"
              alt="2日目 タイムテーブル画像"
              format="webp"
              class="w-full h-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Page-wide laser rays from the top-right corner + fog -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 overflow-hidden mix-blend-screen">
      <div class="laser-fog" />
      <div class="laser-beam laser-beam-cyan" />
      <div class="laser-beam laser-beam-magenta" />
      <div class="laser-beam laser-beam-blue" />
      <div class="laser-beam laser-beam-violet" />
      <div class="laser-beam laser-beam-1" />
      <div class="laser-beam laser-beam-2" />
    </div>

    <!-- Modal for Zooming Timetable -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="activeModalImage"
          class="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          @click="activeModalImage = null"
        >
          <div class="relative max-w-4xl max-h-[90vh] overflow-auto" @click.stop>
            <button
              type="button"
              class="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              @click="activeModalImage = null"
            >
              ✕
            </button>
            <img :src="activeModalImage" alt="Timetable Zoom" class="w-full h-auto object-contain max-h-[85vh]">
          </div>
        </div>
      </Transition>
    </Teleport>

      <!-- Footer Actions / Access -->
      <div class="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <NuxtLink to="/gikadaifes" class="common-btn text-xs py-2.5 px-6">
          <span>&larr; 一覧へ戻る</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, shallowRef } from 'vue'
import type { Map as LeafletMap } from 'leaflet'
import 'leaflet/dist/leaflet.css'

const activeModalImage = ref<string | null>(null)
const isLoading = ref(true)
const pageRoot = ref<HTMLElement | null>(null)

// 2.3s splash screen, then reveal the page
onMounted(() => {
  if (import.meta.client) {
    // Swap the shared header/footer logo accent to cyan while on this page
    document.body.classList.add('utone-cyan-theme')
    onUnmounted(() => {
      document.body.classList.remove('utone-cyan-theme')
    })

    const splashTimer = setTimeout(() => {
      isLoading.value = false
    }, 2300)

    onUnmounted(() => {
      clearTimeout(splashTimer)
    })
  }
})

// PAR light turn-on when each glow scrolls into view
let glowObserver: IntersectionObserver | null = null
onMounted(() => {
  if (!import.meta.client) return
  const glows = document.querySelectorAll('.section-glow')
  glowObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('lit')
          glowObserver?.unobserve(entry.target)
        }
      }
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
  )
  glows.forEach((el) => glowObserver?.observe(el))
})

onUnmounted(() => {
  glowObserver?.disconnect()
})

// Day 1: 2026-10-10, Day 2: 2026-10-11
// Automatically select Day 2 only on the event day itself (Oct 11), otherwise default to Day 1
const getInitialTimetableDay = (): 'day1' | 'day2' => {
  const now = new Date()
  const currentMonth = now.getMonth() + 1 // 1-12
  const currentDate = now.getDate()
  // Only select Day 2 on October 11th
  if (currentMonth === 10 && currentDate === 11) {
    return 'day2'
  }
  return 'day1'
}

const activeTimetableDay = ref<'day1' | 'day2'>(getInitialTimetableDay())

interface TimetableSlot {
  time: string
  artist: string
  sub?: string
  genre?: string
  tag?: 'OPEN' | 'CLOSE' | 'GUEST' | 'OB' | 'Friendship'
}

const day1Schedule: TimetableSlot[] = [
  { time: '10:00 - 10:30', artist: 'roauri B2B kar', genre: 'House', tag: 'OPEN' },
  { time: '10:30 - 10:55', artist: 'hiziki', genre: 'UK Garage' },
  { time: '10:55 - 11:25', artist: 'さぎのや B2B DDlia B2B T_TEST__', genre: 'Trance', tag: 'OB' },
  { time: '11:25 - 11:50', artist: 'ドパるネット民の舞DJ', genre: 'Brazilian Phonk' },
  { time: '11:50 - 12:15', artist: '1000Shin', genre: 'Bass Music' },
  {
    time: '12:15 - 12:55',
    artist: 'SyurV',
    sub: 'Anti-Aging Record / サイケでリンク',
    tag: 'GUEST',
  },
  { time: '12:55 - 13:20', artist: 'wamo', genre: 'Gabba / Nerdcore Techno' },
  { time: '13:20 - 13:50', artist: 'なとりーむ B2B mikan', genre: 'Rhythm Game / Hardcore' },
  { time: '13:50 - 14:15', artist: 'Tobu', genre: 'UK / Happy Hardcore' },
  { time: '14:15 - 14:45', artist: "Red's Tone Records Crew", genre: 'Hardcore', tag: 'OB' },
  { time: '14:45 - 15:10', artist: 'ククリ', genre: 'Jet set radio' },
  { time: '15:10 - 15:35', artist: 'Exflikt', genre: 'Halftime, Digi-dub' },
  { time: '15:35 - 16:00', artist: 'yossy', genre: 'UK Dubstep' },
  {
    time: '16:00 - 16:40',
    artist: '飛田 [低音研究会 / Liquidense]',
    sub: 'MC: 大楽Chap [低音研究会 / Singal Rain]',
    tag: 'GUEST',
  },
  { time: '16:40 - 17:00', artist: 'Deek', genre: 'Drum and Bass', tag: 'CLOSE' },
]

const day2Schedule: TimetableSlot[] = [
  { time: '10:00 - 10:25', artist: 'はれくる', genre: 'VTuber', tag: 'OPEN' },
  { time: '10:25 - 10:55', artist: 'chinapi B2B ふじさん', genre: 'VOCALOID' },
  { time: '10:55 - 11:20', artist: 'きりしゃめ B2B null', genre: '東方Project', tag: 'Friendship' },
  { time: '11:20 - 11:45', artist: 'Mie-Una', genre: '東方Project / VOCALOID' },
  { time: '11:45 - 12:10', artist: 'タカハナ', genre: 'VOCALOID' },
  { time: '12:10 - 12:40', artist: 'ROS猫 B2B Tofu', genre: 'アニソン × ロック' },
  { time: '12:40 - 13:10', artist: 'ブルーハワイ B2B TERANiKi', genre: '俺たちの異次元フェス' },
  { time: '13:10 - 13:40', artist: 'ヨーソロー B2B ショー', genre: 'ラブライブ, アニソン' },
  { time: '13:40 - 14:10', artist: 'くう B2B Ac¢hi', genre: 'アニソン' },
  {
    time: '14:10 - 14:50',
    artist: 'おそクラ Crew',
    tag: 'GUEST',
  },
  { time: '14:50 - 15:15', artist: 'ニシノスケ', genre: 'アニソン' },
  { time: '15:15 - 15:40', artist: 'nikko', genre: 'アニソン × Dance Music' },
  {
    time: '15:40 - 16:20',
    artist: 'DJ石倉',
    tag: 'GUEST',
  },
  { time: '16:20 - 16:45', artist: 'はっちゃん◆', genre: 'OTAKU Dance Music' },
  { time: '16:45 - 17:00', artist: 'NMssan', genre: 'VGM', tag: 'CLOSE' },
]

const stageMapContainerRef = ref<HTMLElement | null>(null)
const stageMapInstance = shallowRef<LeafletMap | null>(null)
let resizeObserver: ResizeObserver | null = null

const STAGE_COORDS: [number, number] = [34.701105, 137.410074]

onMounted(async () => {
  if (!import.meta.client || !stageMapContainerRef.value) return

  try {
    const L = await import('leaflet')

    const map = L.map(stageMapContainerRef.value, {
      center: STAGE_COORDS,
      zoom: 18,
      zoomControl: false,
      attributionControl: true,
      scrollWheelZoom: false,
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
    }).addTo(map)

    // Add zoom control to top-right
    L.control.zoom({ position: 'topright' }).addTo(map)

    // Custom Stage Marker Pin
    const stageIcon = L.divIcon({
      className: 'leaflet-custom-marker-wrapper',
      html: `
        <div class="marker-point marker-brand" role="button" aria-label="技科大祭メインステージ">
          <div class="marker-pulse"></div>
          <div class="marker-core"></div>
          <div class="marker-label">メインステージ (図書館前)</div>
        </div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, -14],
    })

    const popupHtml = `
      <div class="technotut-popup-content">
        <span class="popup-badge">MAIN STAGE</span>
        <h4 class="popup-title">技科大祭 特設メインステージ</h4>
        <p class="popup-desc">図書館前広場 特設ステージ<br>10月11日（日） 12:00～12:40 出演</p>
      </div>
    `

    const marker = L.marker(STAGE_COORDS, { icon: stageIcon })
      .bindPopup(popupHtml, {
        closeButton: false,
        className: 'technotut-leaflet-popup',
      })
      .addTo(map)

    marker.openPopup()

    stageMapInstance.value = map

    if (typeof ResizeObserver !== 'undefined' && stageMapContainerRef.value) {
      resizeObserver = new ResizeObserver(() => {
        map.invalidateSize()
      })
      resizeObserver.observe(stageMapContainerRef.value)
    }

    setTimeout(() => map.invalidateSize(), 200)
    setTimeout(() => map.invalidateSize(), 600)
  } catch (err) {
    console.error('Failed to initialize stage map:', err)
  }
})

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = null
  }
  if (stageMapInstance.value) {
    stageMapInstance.value.remove()
    stageMapInstance.value = null
  }
})

useSeoMeta({
  title: '[イベント告知] 2026 技科大祭 - TechnoTUT',
  description: '技科大祭にて『The Utopia Tone vol.11 Extended』を開催します！',
  ogTitle: '[イベント告知] 2026 技科大祭 - TechnoTUT',
  ogDescription: '技科大祭にて『The Utopia Tone vol.11 Extended』を開催します！',
  ogImage: 'https://technotut.net/images/gikadaifes/2026/2026flyer.png',
})
</script>

<style>
/* This page only: tint the shared header/footer logo accent (#C7000A) to cyan
   via a hue-rotate filter while body has .utone-cyan-theme. */
body.utone-cyan-theme img[src="/images/logo/logo.svg"],
body.utone-cyan-theme img[src="/images/logo/logo_dark.svg"] {
  filter: hue-rotate(195deg) saturate(1.5);
}

/* Leaflet Dark Theme & Custom Pins */
.map-dark-theme .leaflet-container {
  background: #050505 !important;
}

.map-dark-theme .leaflet-tile-pane {
  filter: invert(100%) hue-rotate(180deg) grayscale(100%) brightness(150%) contrast(135%);
}

.leaflet-custom-marker-wrapper {
  background: transparent !important;
  border: none !important;
}

.marker-point {
  position: relative;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.marker-pulse {
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 9999px;
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.marker-core {
  position: relative;
  width: 12px;
  height: 12px;
  border-radius: 9999px;
  border: 2px solid #00b1e0;
  background-color: #00b1e0;
  z-index: 2;
  box-shadow: 0 0 10px rgba(0, 177, 224, 0.8);
}

.marker-brand .marker-pulse {
  background-color: rgba(0, 177, 224, 0.4);
}
.marker-brand .marker-core {
  background-color: #00b1e0;
}

/* Tailwind only emits @keyframes ping when animate-ping is used somewhere;
   define it locally so the marker pulse actually animates */
@keyframes ping {
  0% {
    transform: scale(0.2);
    opacity: 1;
  }
  80%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.marker-label {
  position: absolute;
  top: -24px;
  white-space: nowrap;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: #fff;
  background-color: rgba(5, 5, 5, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 1px 6px;
  border-radius: 4px;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
}

.technotut-leaflet-popup .leaflet-popup-content-wrapper {
  background: #080808 !important;
  color: #fff !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  border-radius: 6px !important;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.6) !important;
  padding: 4px !important;
}

.technotut-leaflet-popup .leaflet-popup-tip {
  background: #080808 !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  border-top-color: transparent !important;
  border-left-color: transparent !important;
}

.technotut-popup-content {
  padding: 8px 10px;
  font-family: 'Noto Sans JP', sans-serif;
  max-width: 260px;
}

.popup-badge {
  display: inline-block;
  font-family: 'Quicksand', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #00b1e0;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.popup-title {
  font-weight: 400;
  font-size: 13px;
  color: #ffffff;
  margin: 0 0 4px 0;
}

.popup-desc {
  font-size: 12px;
  color: #c2c2c2;
  line-height: 1.5;
  margin: 0;
}

/* Splash Screen Line Drawing Animation */
.splash-fade-leave-active {
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.splash-fade-leave-to {
  opacity: 0;
}

.utone-svg-loader svg path {
  fill: transparent;
  stroke: #00b1e0;
  stroke-width: 1px;
  stroke-dasharray: 600;
  stroke-dashoffset: 600;
  animation: utoneStrokeDraw 1.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

/* Stagger different sections slightly for dynamic drawing feel */
.utone-svg-loader .utone-path-group:nth-child(1) path {
  animation-delay: 0.05s;
}

.utone-svg-loader .utone-path-group:nth-child(2) path {
  animation-delay: 0.25s;
}

.utone-svg-loader .utone-path-group:nth-child(3) path {
  animation-delay: 0.15s;
}

.utone-svg-loader .utone-path-group:nth-child(4) path {
  animation-delay: 0.1s;
}

.utone-svg-loader .utone-path-group:nth-child(5) path {
  animation-delay: 0.2s;
}

@keyframes utoneStrokeDraw {
  0% {
    stroke-dashoffset: 600;
    fill: transparent;
  }
  75% {
    stroke-dashoffset: 0;
    fill: transparent;
  }
  100% {
    stroke-dashoffset: 0;
    fill: #ffffff;
    stroke: transparent;
  }
}

/* Laser rays fired from the left side: scale out from the origin, flash, fade */
.laser-beam {
  position: absolute;
  top: -12rem;
  left: max(0rem, (100% - 64rem) / 2);
  width: 150%;
  height: 4px;
  border-radius: 9999px;
  transform-origin: 0% 50%;
  pointer-events: none;
  mix-blend-mode: screen;
  filter: blur(4px) drop-shadow(0 0 10px currentColor);
}

/* Narrow screens: rays sized at150% of the width only reach ~half a screen,
   so extend them and pull them in from the edge to keep them visible */
@media (max-width: 639px) {
  .laser-beam {
    left: 1.5rem;
    width: 600%;
    height: 5px;
    filter: blur(5px) drop-shadow(0 0 12px currentColor);
  }
}

/* Follow the content column's left padding at each breakpoint */
@media (min-width: 640px) {
  .laser-beam {
    left: calc(max(0rem, (100% - 64rem) / 2) + 1.5rem);
  }
}

@media (min-width: 1024px) {
  .laser-beam {
    left: calc(max(0rem, (100% - 64rem) / 2) + 2.5rem);
  }
}

.laser-beam-cyan {
  color: #00b1e0;
  background: linear-gradient(90deg, rgba(0,177,224,0.55) 0%, rgba(0,177,224,0.28) 35%, rgba(0,177,224,0.1) 60%, rgba(0,177,224,0) 80%);
  --ray: 90.5deg;
  animation: laserFire 5s ease-out infinite;
  animation-delay: 1.6s;
}

.laser-beam-magenta {
  color: #00b1e0;
  background: linear-gradient(90deg, rgba(0,177,224,0.55) 0%, rgba(0,177,224,0.28) 35%, rgba(0,177,224,0.1) 60%, rgba(0,177,224,0) 80%);
  --ray: 93.5deg;
  animation: laserFire 5s ease-out infinite;
  animation-delay: 3.2s;
}

.laser-beam-blue {
  color: #00b1e0;
  background: linear-gradient(90deg, rgba(0,177,224,0.55) 0%, rgba(0,177,224,0.28) 35%, rgba(0,177,224,0.1) 60%, rgba(0,177,224,0) 80%);
  --ray: 87.5deg;
  animation: laserFire 5s ease-out infinite;
  animation-delay: 0s;
}

.laser-beam-violet {
  color: #00b1e0;
  background: linear-gradient(90deg, rgba(0,177,224,0.55) 0%, rgba(0,177,224,0.28) 35%, rgba(0,177,224,0.1) 60%, rgba(0,177,224,0) 80%);
  --ray: 95deg;
  animation: laserFire 5s ease-out infinite;
  animation-delay: 4s;
}

.laser-beam-1 {
  color: #00b1e0;
  background: linear-gradient(90deg, rgba(0,177,224,0.55) 0%, rgba(0,177,224,0.28) 35%, rgba(0,177,224,0.1) 60%, rgba(0,177,224,0) 80%);
  --ray: 89deg;
  animation: laserFire 5s ease-out infinite;
  animation-delay: 0.8s;
}

.laser-beam-2 {
  color: #00b1e0;
  background: linear-gradient(90deg, rgba(0,177,224,0.55) 0%, rgba(0,177,224,0.28) 35%, rgba(0,177,224,0.1) 60%, rgba(0,177,224,0) 80%);
  --ray: 92deg;
  animation: laserFire 5s ease-out infinite;
  animation-delay: 2.4s;
}

/* Hazy fog behind the beams, drifting slowly */
.laser-fog {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 50% at 30% 60%, rgba(0, 225, 255, 0.07), transparent 70%),
    radial-gradient(ellipse 55% 45% at 70% 30%, rgba(0, 177, 224, 0.06), transparent 70%),
    radial-gradient(ellipse 50% 40% at 50% 80%, rgba(0, 200, 255, 0.05), transparent 70%);
  animation: fogDrift 11s ease-in-out infinite alternate;
  pointer-events: none;
}

@keyframes fogDrift {
  from { transform: translateX(-4%) scale(1.05); }
  to { transform: translateX(4%) scale(1.1); }
}

@keyframes laserFire {
  0% { transform: rotate(var(--ray)) scaleX(0); opacity: 0; }
  12% { transform: rotate(var(--ray)) scaleX(1); opacity: 0.7; }
  55% { transform: rotate(var(--ray)) scaleX(1); opacity: 0.55; }
  100% { transform: rotate(var(--ray)) scaleX(1); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .laser-beam,
  .laser-fog {
    animation: none;
  }
  .laser-beam {
    display: none;
  }
}

/* Per-headline ambient glow: aligned at the section's left edge, shaped like a
   PAR light pool on the floor (wide ellipse, bright center fading out). */
.section-glow {
  position: absolute;
  right: -14rem;
  width: 16rem;
  height: 16rem;
  border-radius: 9999px;
  background: radial-gradient(
    circle at center,
    rgba(0, 177, 224, 0.5) 0%,
    rgba(0, 177, 224, 0.18) 45%,
    rgba(0, 177, 224, 0) 75%
  );
  filter: blur(12px);
  mix-blend-mode: screen;
  pointer-events: none;
  opacity: 0;
}

/* Dark halo around the glow so it fades into darkness, like a PAR light in the dark */
.section-glow::after {
  content: '';
  position: absolute;
  inset: -60%;
  border-radius: 9999px;
  background: radial-gradient(
    circle at center,
    rgba(0, 0, 0, 0) 25%,
    rgba(0, 0, 0, 0.5) 55%,
    rgba(0, 0, 0, 0.85) 100%
  );
  pointer-events: none;
}

/* PAR light turn-on: quick flicker burst, then a stable pool of light */
.section-glow.lit {
  animation: parTurnOn 1.7s ease-out forwards;
}

@keyframes parTurnOn {
  0% { opacity: 0; transform: scale(0.85); }
  8% { opacity: 0.7; }
  13% { opacity: 0.15; }
  18% { opacity: 0.85; }
  24% { opacity: 0.1; }
  32% { opacity: 0.9; }
  45% { opacity: 0.4; }
  60% { opacity: 1; }
  100% { opacity: 1; transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .section-glow {
    opacity: 1;
  }
  .section-glow.lit {
    animation: none;
  }
}

@media (max-width: 639px) {
  /* On narrow screens right:-14rem pushes almost the entire glow off-screen;
     pull it left so the light pool is actually visible */
  .section-glow {
    right: -6rem;
  }
}

@media (min-width: 640px) {
  .section-glow {
    width: 24rem;
    height: 24rem;
  }
}
</style>
