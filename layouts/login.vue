<script setup lang="ts">
import Logo from '~/assets/svg/logo.svg'
</script>

<template>
  <div class="relative h-screen w-full flex items-center justify-center from-#47EDA7 to-#DB50F2 from-8% to-96% bg-gradient-to-bl">
    <main class="flex flex-col items-center justify-center bg-[rgba(37,47,54,0.4)] px-5 py-8.125">
      <div class="flex flex-col items-center justify-center">
        <Logo class="w-30" />
        <h1 class="font-lato mt-5 text-7.5 font-100 tracking-1.75 color-white">
          Splitter
        </h1>
      </div>

      <div class="my-5 h-0.250 w-75 bg-white" />

      <div class="w-full">
        <slot />
      </div>
    </main>
  </div>
</template>