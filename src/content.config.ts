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
    // Exact <title> and meta description. Absent: both are derived from the
    // page content (title + intro + highlight), as before.
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
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
      .array(
        z.object({
          value: z.string(),
          label: z.string(),
          group: z.string(),
          // Decorative row of circles under the number (e.g. 8 of 10 filled).
          dots: z.object({ total: z.number(), filled: z.number() }).optional(),
        })
      )
      .default([]),
    // Names the result groups. Absent: the legacy pair (site / ads) is used,
    // so older cases keep their wording without repeating it. A group's note
    // is a short line printed under its numbers.
    resultGroups: z
      .array(
        z.object({
          id: z.string(),
          title: z.string(),
          source: z.string().optional(),
          note: z.string().optional(),
          // Fixed column count for the group's numbers (2 or 4). They drop to
          // two columns on narrow screens, so a number is never alone on a row.
          // Absent: the auto-fit grid, as before.
          columns: z.number().optional(),
          // A group with bars renders split: intro text and horizontal index
          // bars on the left, its numbers in two columns on the right.
          intro: z.string().optional(),
          bars: z
            .object({
              ariaLabel: z.string(),
              items: z.array(
                z.object({ label: z.string(), value: z.number(), accent: z.boolean().default(false) })
              ),
            })
            .optional(),
        })
      )
      .optional(),
    // Raw ad figures used to compute "€ на контакт" (budget ÷ contacts) in the
    // template, so the derived number can never drift from the real ones.
    adsMath: z
      .object({
        group: z.string().default('ads'),
        budget: z.number(),
        directions: z.number(),
        calls: z.number(),
        bookings: z.number(),
      })
      .optional(),
    // Short line shown under both result groups.
    resultsNote: z.string().optional(),
    // Small line right under the „Резултатът" heading (e.g. the period).
    resultsPeriod: z.string().optional(),
    // Small muted methodology footnote at the bottom of the results band.
    resultsFootnote: z.string().optional(),
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
      .object({
        text: z.string(),
        author: z.string(),
        role: z.string().optional(),
        photo: z.string().optional(),
      })
      .optional(),
    quoteImage: img.optional(),
    hero: img.optional(),
    // Optional heading above the screenshot gallery and an aspect ratio for
    // its frames (CSS value, e.g. "2 / 3"; default 3 / 5).
    imagesTitle: z.string().optional(),
    imagesAspect: z.string().optional(),
    images: z.array(img).default([]),
    siteUrl: z.string().url().optional(),
    // Lead-in text for the live link (default „Вижте резултата на живо:")
    // and whether it opens in a new tab.
    siteUrlLabel: z.string().optional(),
    siteUrlNewTab: z.boolean().default(false),
    order: z.number().default(99),
    published: z.boolean().default(false),
  }),
});

export const collections = { cases };
