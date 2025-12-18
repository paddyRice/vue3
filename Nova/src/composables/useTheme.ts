import { ref, watchEffect } from 'vue'

export type ThemeType = 'light' | 'dark'

const THEME_KEY = 'nova-theme'

const theme = ref<ThemeType>((localStorage.getItem(THEME_KEY) as ThemeType) || 'light')

const applyThemeToDocument = (value: ThemeType) => {
  const root = document.documentElement
  root.setAttribute('data-theme', value)
}

applyThemeToDocument(theme.value)

watchEffect(() => {
  localStorage.setItem(THEME_KEY, theme.value)
  applyThemeToDocument(theme.value)
})

export const useTheme = () => {
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  const setTheme = (value: ThemeType) => {
    theme.value = value
  }

  return {
    theme,
    toggleTheme,
    setTheme
  }
}


