<script setup lang="ts">
const { $auth } = useNuxtApp()

function logout() {
  $auth.signOut()
}
</script>

<template>
  <div>
    <button @click="logout">
      Logout
    </button>
  </div>
</template>
