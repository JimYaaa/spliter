<script setup lang="ts">
const { $db, $auth } = useNuxtApp()

const user = $auth.currentUser
console.log(user)
</script>

<template>
  <div>
    TEST TEST
  </div>
</template>
