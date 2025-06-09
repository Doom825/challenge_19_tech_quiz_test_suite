import { defineConfig } from 'cypress'
import { UserConfig as ViteUserConfig } from 'vite'

// Import your client’s Vite config (no extension)
import clientViteConfig from './client/vite.config'

export default defineConfig({
  component: {
    supportFile: false,
    devServer: {
      framework: 'react',
      bundler: 'vite',
      // Pass the actual config object you imported
      viteConfig: clientViteConfig as ViteUserConfig,
    },
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
  },
  e2e: {
    baseUrl: 'http://localhost:5173',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
  },
})
