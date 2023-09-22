import { useUserStore } from '~/stores/user'

export default defineNuxtRouteMiddleware((to) => {
  const { $auth } = useNuxtApp()
  const currentPath = to.path
  const userStore = useUserStore()

  $auth.onAuthStateChanged((user) => {
    if (!user && currentPath !== '/login') {
      return navigateTo('/login')
    }

    console.log(user)
    if (user) {
      userStore.setUserInfo({
        name: user.displayName as string,
        email: user.email as string,
        picture: user.photoURL as string,
      })

      return navigateTo('/')
    }
  })
})