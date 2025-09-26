/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL?: string
  readonly VITE_EMAILJS_SERVICE_ID?: string
  readonly VITE_EMAILJS_PUBLIC_KEY?: string
  readonly VITE_EMAILJS_USER_TEMPLATE_ID?: string
  readonly VITE_EMAILJS_ADMIN_TEMPLATE_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
