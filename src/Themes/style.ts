import './themes.css'
import './glass.css'
import { useEffect } from 'react'
import type { LocalStorage } from '../infrastructure/localStorage'
import { getLocalStorageCacheOrDefaultValue } from '../infrastructure/localStorageCache'
import type { Background, ColorScheme, Theme } from './model'
import { selectedBackgroundSpec, selectedColorSchemeSpec, selectedThemeSpec } from './repository'

export const useThemeStyle = (theme: Theme, colorScheme: ColorScheme) => {
  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])
  useEffect(() => {
    document.documentElement.dataset.colorScheme = colorScheme
  }, [colorScheme])
}

export const useBackgroundStyle = (background: Background) => {
  useEffect(() => {
    document.documentElement.dataset.background = background
  }, [background])
}

export const preloadThemeStyleFromLocalStorageCache = (localStorage: LocalStorage) => {
  document.documentElement.dataset.theme = getLocalStorageCacheOrDefaultValue(localStorage, selectedThemeSpec)
  document.documentElement.dataset.colorScheme = getLocalStorageCacheOrDefaultValue(
    localStorage,
    selectedColorSchemeSpec,
  )
  document.documentElement.dataset.background = getLocalStorageCacheOrDefaultValue(localStorage, selectedBackgroundSpec)
}
