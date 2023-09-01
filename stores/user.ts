import { acceptHMRUpdate, defineStore } from 'pinia'

interface User {
  name: string
  picture: string
  email: string
}

export const useUserStore = defineStore('user', () => {
  const name = ref('')
  const email = ref('')
  const picture = ref('')

  function setUserInfo(userInfo: User) {
    const { name: userName, email: userMail, picture: userPicture } = userInfo

    name.value = userName
    email.value = userMail
    picture.value = userPicture
  }

  return {
    setUserInfo,
    name,
    email,
    picture,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore as any, import.meta.hot))