import '../index.css'
import type { Meta, StoryObj } from '@storybook/react'
import { ChromeContext } from '../infrastructure/chrome'
import { chromeWithFixtures } from '../infrastructure/chrome.mock'
import { FaviconContext } from '../infrastructure/favicon'
import { googleFavicon } from '../infrastructure/favicon.mock'
import { NullLocalStorageProvider } from '../infrastructure/localStorage.mock'
import type { Background, ColorScheme } from '../Themes/model'
import { useBackgroundStyle, useThemeStyle } from '../Themes/style'
import App from './component'

const meta: Meta<typeof App> = {
  component: App,
}

export default meta
type Story = StoryObj<typeof App>

export const Primary: Story = {
  render: () => {
    useThemeStyle('standard', 'light')
    return (
      <ChromeContext.Provider value={chromeWithFixtures}>
        <FaviconContext.Provider value={googleFavicon}>
          <NullLocalStorageProvider>
            <App />
          </NullLocalStorageProvider>
        </FaviconContext.Provider>
      </ChromeContext.Provider>
    )
  },
}

export const Dark: Story = {
  render: () => {
    useThemeStyle('standard', 'dark')
    return (
      <ChromeContext.Provider value={chromeWithFixtures}>
        <FaviconContext.Provider value={googleFavicon}>
          <NullLocalStorageProvider>
            <App />
          </NullLocalStorageProvider>
        </FaviconContext.Provider>
      </ChromeContext.Provider>
    )
  },
}

const GlassApp = ({ colorScheme, background }: { colorScheme: ColorScheme; background: Background }) => {
  useThemeStyle('glass', colorScheme)
  useBackgroundStyle(background)
  return (
    <ChromeContext.Provider value={chromeWithFixtures}>
      <FaviconContext.Provider value={googleFavicon}>
        <NullLocalStorageProvider>
          <App />
        </NullLocalStorageProvider>
      </FaviconContext.Provider>
    </ChromeContext.Provider>
  )
}

export const GlassAurora: Story = {
  render: () => <GlassApp colorScheme="light" background="aurora" />,
}

export const GlassPaper: Story = {
  render: () => <GlassApp colorScheme="light" background="paper" />,
}

export const GlassMist: Story = {
  render: () => <GlassApp colorScheme="light" background="mist" />,
}

export const GlassDark: Story = {
  render: () => <GlassApp colorScheme="dark" background="aurora" />,
}
