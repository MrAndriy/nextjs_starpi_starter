import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    STRAPI_API_TOKEN: z.string(),
    PAGE_LIMIT: z.string(),
    STRAPI_FORM_SUBMISSION_TOKEN: z.string(),
    STRAPI_API_URL: z.string(),
  },
  client: {},
  runtimeEnv: {
    STRAPI_API_TOKEN: process.env.STRAPI_API_TOKEN,
    PAGE_LIMIT: process.env.PAGE_LIMIT,
    STRAPI_FORM_SUBMISSION_TOKEN: process.env.STRAPI_FORM_SUBMISSION_TOKEN,
    STRAPI_API_URL: process.env.STRAPI_API_URL,
  },
})
