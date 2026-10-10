import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Case studies. Entries with draft: true are rendered only in development
// (with visible empty slots) and are never built, linked or listed in
// production. Image values are file names inside src/assets/img/.
const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    client: z.string(),
    business: z.string(),
    place: z.string().optional(),
    services: z.array(z.string()),
    since: z.string().optional(),
    situation: z.string().optional(),
    whatWeDid: z.array(z.string()).default([]),
    results: z.array(z.object({ value: z.string(), label: z.string() })).max(3).default([]),
    quote: z.object({ text: z.string(), name: z.string(), role: z.string() }).optional(),
    images: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
  }),
});

export const collections = { cases };
