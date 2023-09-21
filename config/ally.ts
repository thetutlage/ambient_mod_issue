import env from '#start/env'
import { defineConfig } from '@adonisjs/ally'

const allyConfig = defineConfig({
  github: {
    driver: 'github',
    clientId: env.get('GITHUB_CLIENT_ID'),
    clientSecret: env.get('GITHUB_CLIENT_SECRET'),
    callbackUrl: '',
  },
})

export default allyConfig

declare module '@adonisjs/ally/types' {
  interface SocialProviders extends InferSocialProviders<typeof allyConfig> {}
}