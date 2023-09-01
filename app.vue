<script setup lang="ts">
function debounce(fn: Function, delay = 500) {
  let timer: ReturnType<typeof setTimeout> = setTimeout(() => '', delay)

  return (...args: any) => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

const changeTextDebounce = debounce((e: InputEvent) => {
  console.log('Jim', (e.target as HTMLInputElement).value)
}, 1000)
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
