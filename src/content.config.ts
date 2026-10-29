import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Case studies. Entries with published: false are rendered only in development
// (with visible empty slots) and are never built, linked or listed in
// production. Image values are file names inside src/assets/img/.
const img = z.object({ src: z.string(), alt: z.string(), caption: z.string().optional() });

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    title: z.string().optional(),
    client: z.string(),
    category: z.string(),
    location: z.string().optional(),
    period: z.string().optional(),
    intro: z.string().optional(),
    before: z.string().optional(),
    services: z.array(z.object({ name: z.string(), logo: z.string().optional() })).default([]),
    // Small client logo shown above the title in the hero.
    logo: z.string().optional(),
    // Compact stat cards in the hero, next to the intro.
    heroStats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    results: z
      .array(z.object({ value: z.string(), label: z.string(), group: z.string() }))
      .default([]),
    // Names the result groups. Absent: the legacy pair (site / ads) is used,
    // so older cases keep their wording without repeating it.
    resultGroups: z
      .array(z.object({ id: z.string(), title: z.string(), source: z.string().optional() }))
      .optional(),
    // Short line shown under both result groups.
    resultsNote: z.string().optional(),
    // Bar chart inside the results section. markIndex points at the month a
    // dashed line and markLabel single out. A point's note is printed under
    // its month label (e.g. a partial month).
    chart: z
      .object({
        title: z.string(),
        source: z.string().optional(),
        markIndex: z.number(),
        markLabel: z.string(),
        points: z.array(z.object({ label: z.string(), value: z.number(), note: z.string().optional() })),
      })
      .optional(),
    // Framed dashboard screenshot with a caption; no image yet renders a
    // visible placeholder frame instead.
    dashboard: z
      .object({ title: z.string(), caption: z.string(), image: z.string().optional(), imageAlt: z.string().optional() })
      .optional(),
    // The one number the rest of the site quotes: homepage strip and project
    // cards pull from here, so it lives with the case, not in page code.
    highlight: z
      .object({
        value: z.string(),
        label: z.string(),
        note: z.string().optional(),
        cardLabel: z.string().optional(),
      })
      .optional(),
    // quote.photo is the author's photo; until there is one, quoteImage is
    // shown next to the quote instead. Neither present: text only, no frame.
    quote: z
      .object({ text: z.string(), author: z.string(), role: z.string(), photo: z.string().optional() })
      .optional(),
    quoteImage: img.optional(),
    hero: img.optional(),
    images: z.array(img).default([]),
    siteUrl: z.string().url().optional(),
    order: z.number().default(99),
    published: z.boolean().default(false),
  }),
});

export const collections = { cases };
