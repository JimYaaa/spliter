<script setup lang="ts">
import Google from '~/assets/svg/google.svg'
import 'firebaseui/dist/firebaseui.css'
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAdditionalUserInfo,
} from 'firebase/auth'
import { useUserStore } from '~/stores/user'

definePageMeta({
  layout: 'login',
})

const { $auth } = useNuxtApp()
const provider = new GoogleAuthProvider()
const userStore = useUserStore()

// Login Function
function login() {
  signInWithPopup($auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken
      const user = result.user
      const userInfo = getAdditionalUserInfo(result)
  
      console.log({ token, user })
      console.log(getAdditionalUserInfo(result))
      if (userInfo?.profile) {
        userStore.setUserInfo({
          name: userInfo.profile.name as string,
          email: userInfo.profile.email as string,
          picture: userInfo.profile.picture as string,
        })
      }
    })
}
</script>

<template>
  <div class="w-full">
    <button
      class="w-full flex items-center justify-center rounded-7.5 px-3.75 py-2.75 font-lato font-300"
      @click="login"
    >
      <Google class="w-7.5" />
      <p class="mx-7.5 font-bold">
        Login With Google
      </p>
    </button>
  </div>
</template>
