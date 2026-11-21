export const allColorSchemes = ['auto', 'light', 'dark'] as const
export type ColorScheme = (typeof allColorSchemes)[number]
export const isColorScheme = (value: unknown): value is ColorScheme =>
  allColorSchemes.some((colorScheme) => value === colorScheme)

export const allThemes = ['standard', 'solarized', 'glass'] as const
export type Theme = (typeof allThemes)[number]
export const isTheme = (value: unknown): value is Theme => allThemes.some((theme) => value === theme)

// Backgrounds of the glass theme: a gradient behind translucent tiles, or a flat color.
export const allBackgrounds = ['aurora', 'paper', 'mist'] as const
export type Background = (typeof allBackgrounds)[number]
export const isBackground = (value: unknown): value is Background =>
  allBackgrounds.some((background) => value === background)
