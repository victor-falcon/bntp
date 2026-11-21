import { type ChromeStorageSpec, useChromeStorageWithCache } from '../infrastructure/chromeStorage'
import { type Background, type ColorScheme, isBackground, isColorScheme, isTheme, type Theme } from './model'

export const selectedThemeSpec: ChromeStorageSpec<Theme> = {
  areaName: 'sync',
  key: 'v3.selectedTheme',
  defaultValue: 'standard',
  isType: isTheme,
}

export const useSelectedTheme = () => useChromeStorageWithCache(selectedThemeSpec)

export const selectedColorSchemeSpec: ChromeStorageSpec<ColorScheme> = {
  areaName: 'sync',
  key: 'v3.selectedColorScheme',
  defaultValue: 'auto',
  isType: isColorScheme,
}

export const useSelectedColorScheme = () => useChromeStorageWithCache(selectedColorSchemeSpec)

export const selectedBackgroundSpec: ChromeStorageSpec<Background> = {
  areaName: 'sync',
  key: 'v3.selectedBackground',
  defaultValue: 'aurora',
  isType: isBackground,
}

export const useSelectedBackground = () => useChromeStorageWithCache(selectedBackgroundSpec)
