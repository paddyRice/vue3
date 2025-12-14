import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    user: null as any,
    theme: 'light' as 'light' | 'dark'
  }),
  
  getters: {
    isLoggedIn: (state) => !!state.user
  },
  
  actions: {
    setUser(user: any) {
      this.user = user
    },
    
    setTheme(theme: 'light' | 'dark') {
      this.theme = theme
    },
    
    logout() {
      this.user = null
      localStorage.removeItem('token')
    }
  }
})