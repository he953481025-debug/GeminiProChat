/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly GEMINI_API_KEY: string
  readonly HTTPS_PROXY: string
  readonly API_BASE_URL: string
  readonly HEAD_SCRIPTS: string
  readonly PUBLIC_SECRET_KEY: string
  readonly SITE_PASSWORD: string
  readonly OPENAI_API_MODEL: string
  readonly PUBLIC_MAX_HISTORY_MESSAGES: string
  readonly HTTP_PROXY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
