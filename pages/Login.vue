<script setup lang="ts">
import * as firebaseui from 'firebaseui'
import firebase from 'firebase/compat/app'
import 'firebaseui/dist/firebaseui.css'
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAdditionalUserInfo,
  onAuthStateChanged,
} from 'firebase/auth'
import { useUserStore } from '~/stores/user'

const { $db, $auth } = useNuxtApp()
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

// onMounted(() => {
//   const ui = new firebaseui.auth.AuthUI($auth)
    
//   ui.start('#firebaseui-auth-container', {
//     signInSuccessUrl: '/',
//     signInOptions: [
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     ]
//   })
// })
</script>

<template>
  <div id="firebaseui-auth-container" />
</template>
