<script setup lang="ts">
const { $auth } = useNuxtApp()

function logout() {
  $auth.signOut()
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
