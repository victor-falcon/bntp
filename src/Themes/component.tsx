import type { FC } from 'react'
import { allBackgrounds, allColorSchemes, allThemes } from './model'
import { useSelectedBackground, useSelectedColorScheme, useSelectedTheme } from './repository'
import { useBackgroundStyle, useThemeStyle } from './style'

const ThemesComponent: FC = () => {
  const [selectedTheme, setSelectedTheme] = useSelectedTheme()
  const [selectedColorScheme, setSelectedColorScheme] = useSelectedColorScheme()
  const [selectedBackground, setSelectedBackground] = useSelectedBackground()
  return (
    <>
      <form>
        {allColorSchemes.map((colorScheme) => (
          <label key={colorScheme}>
            <input
              type="radio"
              name="selectedColorScheme"
              value={colorScheme}
              checked={colorScheme === selectedColorScheme}
              onChange={() => setSelectedColorScheme(colorScheme)}
            />
            {capitalize(colorScheme)}
          </label>
        ))}
      </form>
      <form>
        {allThemes.map((theme) => (
          <label key={theme}>
            <input
              type="radio"
              name="selectedTheme"
              value={theme}
              checked={theme === selectedTheme}
              onChange={() => setSelectedTheme(theme)}
            />
            {capitalize(theme)}
          </label>
        ))}
      </form>
      {selectedTheme === 'glass' ? (
        <form className="Themes__Backgrounds" aria-label="Background">
          {allBackgrounds.map((background) => (
            <label key={background} className="Themes__Background">
              <input
                type="radio"
                name="selectedBackground"
                value={background}
                checked={background === selectedBackground}
                onChange={() => setSelectedBackground(background)}
              />
              <span className="Themes__BackgroundSwatch" data-background-swatch={background} aria-hidden="true" />
              {capitalize(background)}
            </label>
          ))}
        </form>
      ) : null}
    </>
  )
}

const capitalize = (s: string) => s.replace(/^\w/, (c) => c.toUpperCase())

export default ThemesComponent

export const SubscribeThemeComponent: FC = () => {
  const [selectedTheme] = useSelectedTheme()
  const [selectedColorScheme] = useSelectedColorScheme()
  const [selectedBackground] = useSelectedBackground()
  useThemeStyle(selectedTheme, selectedColorScheme)
  useBackgroundStyle(selectedBackground)
  return null
}
