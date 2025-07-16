import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string()
      })
    }),
    self: defineCollection({
      type:'data',
      source: 'self/**.yml',
      schema: z.object({
        name: z.string(),
        description: z.string(),
        // url: z.string()
      })
    })
  }
})
