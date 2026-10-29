# Riddle Marketing: professional polish pass

You are working on the live site riddle-marketing.com (Astro). Your job is to apply a set of content, structure and trust fixes. **Do not redesign anything.** Keep the existing colors, fonts, components, animations and effects. Change copy, page structure and a few components only.

Start by exploring the repo: find the pages (Начало, Услуги, Проекти, За нас, Контакт), the shared header/footer, the CTA component, the logo strips and where site-wide constants like the phone number and booking link live. Then make a short plan and work through the tasks below in order.

## Hard rules (apply to every change)

- All site copy is Bulgarian and uses formal „вие“.
- **No em dashes (—) or en dashes (–) anywhere in user-facing text,** including meta descriptions, alt text and captions. Use a period or a comma instead.
- No numbered sections, and keep text minimal. The site must not read like a generic AI-generated website.
- Never mention contracts, signing or commitment („договор“, „подпис“, „подписвате“, „обвързване“ and similar).
- No company name, registration number or street address anywhere.
- There is one main CTA everywhere: **„Запазете 30-минутен разговор“**. The phone number and Viber always stay visible. Keep the mobile sticky bottom bar („Обадете се“ / „Запазете разговор“).
- **Never invent numbers, quotes, logos or photos.** Where real content is missing, leave a clearly marked `TODO` in the data/content file. Hide that block in the rendered page until it is filled. Never use stock or AI-generated images.
- **Riddle is presented as a small team, never as one person.** All copy speaks as „ние“. No first person singular („аз“, „мен“, „ми“, „говоря“, „бих направил“) anywhere.
- **No personal names anywhere on the site.** Remove every mention of „Тихомир“, „Паунов“ or any other person's name from page copy, headings, meta titles and descriptions, alt text, captions, structured data, file names and comments that ship to the browser. No photos of team members.

## Site-wide constants

Put these in one config file (create it if none exists), and reference them everywhere instead of hardcoding:

```
PHONE_DISPLAY = "0897 853 219"
PHONE_TEL     = "+359897853219"
VIBER_URL     = "viber://chat?number=%2B359897853219"
BOOKING_URL   = "https://cal.com/tihomir-paunov-9sigpg/безплатен-30-минутен-разговор"   // TODO: replace with a team cal.com link. The current one contains a personal name.
EMAIL         = "TODO: e.g. hello@riddle-marketing.com"   // show it only when it is filled
```

## 1. Header

- Remove WhatsApp from the header. Keep the phone, Viber, the nav and the main CTA.
- Make sure the Viber item in the header is a real link (`VIBER_URL`) on every page, including Начало.

## 2. Начало (home page)

### 2a. Hero
- Delete the „Какво правим, по ред:“ label and the five-step list under it. The circle section below already covers it.
- Replace the subline with:
  > Свързваме сайта с Google, рекламите и измерването, за да ви намират повече хора и да виждате кое носи клиенти.
- Keep the headline „Сайтът е само началото.“, the CTA and „или се обадете: 0897 853 219“.

### 2b. Client logos strip
- Remove the Djidji Stil ladybird icon (`ladybird.svg`) from this strip. It reads as a placeholder next to the real logos. Keep 21cutz, Scaff-Rent and HairSupply28.

### 2c. „Затваряме целия кръг.“ (compact rewrite)
Replace the current long section (five big blocks, each with tool logos and a screenshot) with **one compact row of five cards**. Desktop is one row of 5. Mobile is a 2-column grid, or a horizontal scroll if that fits the existing design better.

- Heading: **Затваряме целия кръг.**
- Subheading: **Всичко работи заедно, за да идват клиенти и поръчки.**
- Cards (title + one line, **no tool logos inside the cards**):
  - **Намират ви:** В Google, в Maps и в рекламите.
  - **Доверяват ви се:** Истински снимки, отзиви и бърз сайт.
  - **Свързват се:** Обаждане, Viber, записан час или поръчка.
  - **Измерваме:** Виждате откъде идва всеки клиент, в табло на живо.
  - **Подобряваме:** Местим бюджета към това, което носи клиенти.
- Under the row, show **one** visual only. Reuse the existing 21cutz images (Maps → сайт → записан час) as a single small flow, or leave the space for the result block in 2d. Don't keep all five screenshots.
- Keep „После кръгът започва отначало.“ as a small caption.
- Reuse the existing card styles and effects so the section matches the rest of the site.

### 2d. New result block (directly after the circle)
Add one result strip for 21cutz, using a data file (e.g. `src/data/results.ts`) so the numbers live in one place:

- Label: **21cutz, бръснарница. Първи месец с реклами в Google.**
- Numbers:
  - **35** записани часа през сайта
  - **22** обаждания
  - **27** заявки за упътване
  - Бюджет за реклами: **400 €**
- Small source line: **Измерено с Google Analytics и Google Ads.**
- Link: **Вижте проекта** → `/proekti/21cutz/`
- Add a code comment in the data file: `// Confirm with the 21cutz owner before deploy.`

### 2e. Home section order
Arrange the home page in this order:
1. Hero
2. Client logos
3. Затваряме целия кръг (compact)
4. 21cutz result
5. Избрани проекти
6. Казваме ви и какво не ви трябва
7. С тези инструменти работим всеки ден (the only full tools strip on the site; keep it as is)
8. The team block (see 2f)
9. Нека поговорим за вашия бизнес (CTA)

### 2f. Team block (replaces „Зад Riddle стои човек.“)
Rewrite the block so it presents a team, with no name and no portrait:

- Heading: **Говорите с хората, които вършат работата.**
- Text: **Малък екип от София. Без посредници между вас и тези, които правят сайта и рекламите.**
- Keep the phone and Viber. Change the link „Повече за мен“ to **„Повече за нас“** (→ `/za-nas/`).
- No photo of people. If the layout needs an image, reuse one of the existing client-location photos (21cutz interior or a Scaff-Rent site).

## 3. Проекти: own project pages instead of external links

Right now the project cards link straight to the client sites, so visitors leave riddle-marketing.com. Change that:

- Create one content/data file per project, plus a page template at `/proekti/[slug]/`. Slugs: `21cutz`, `scaff-rent`, `hairsupply28`.
- Each page shows: **Бизнесът** (one line), **Какво направихме** (short list), **Резултат** (numbers; render it only if filled), a link **Вижте сайта** to the live client site (opens in a new tab), and the standard CTA block.
- Leave fields marked `TODO` where real content is missing, and hide empty sections.
- Content to start from:
  - **21cutz:** Бръснарница в ж.к. Гоце Делчев, София. Нямаше присъствие онлайн. Направихме сайт, Google бизнес профил, собствена система за записване на час (book.21cutz.com), реклами в Google и проследяване с Google Analytics. Резултат: use the same numbers as 2d (single source of truth). Owner quote: `TODO`.
  - **Scaff-Rent:** Скеле под наем. Сайт на WordPress и реклами в Google. Резултат: `TODO`.
  - **HairSupply28:** Онлайн магазин в Shopify. Работим заедно от юни 2026. Пуснахме реклами в Google, настроихме Google Analytics и Google Tag Manager, имейл маркетинг с Klaviyo и отчети на живо в Looker Studio (Shopify, Meta и Google Ads на едно място). Резултат: `TODO`.
- Update the project cards on Начало and Проекти to link to these internal pages.
- **Djidji Stil** stays on Проекти as a card („Шивашко ателие. Само Google бизнес профил, без сайт.“) linking to its Google profile. It doesn't need its own page. If a real Djidji Stil logo is not in the repo, show the name as text instead of the ladybird icon.
- Fix the repeated name in cards („21cutz 21cutz 21cutz“): when the project name is already shown as text, set the logo `alt=""` and remove any duplicate hidden labels.
- Add the new pages to the sitemap (check that the Astro sitemap integration picks them up).

## 4. Услуги

- In **Проследяване и измерване**, replace the line with:
  > Броим обажданията, записаните часове и поръчките. Виждате всичко в табло на живо: откъде идват клиентите и колко струва всеки.
- Add an image slot under that section for a blurred dashboard screenshot: `src/assets/dashboard-blurred.jpg` (`TODO`; hide the slot if the file is missing).
- **Check every photo caption against its photo.** The image with alt „Scaff-Rent, обект в Бояна“ appears next to the caption „На снимката: Scaff-Rent, обект в Люлин“. Make each caption match its own image, and the alt text too.
- Leave „Кога ще ви кажем да не харчите“ (anchor `#ne`) as it is.

## 5. За нас

- Change the headline „Говорите с човека, който върши работата.“ to:
  > Говорите с хората, които вършат работата.
- Replace the intro „Казвам се Тихомир. Правя сайтове, профили в Google и реклами за местни бизнеси. С всеки клиент говоря сам.“ with:
  > Ние сме малък екип от София. Правим сайтове, профили в Google и реклами за местни бизнеси. С всеки клиент говорим директно, без посредници.
- Keep the four short lines („Започваме с разговор.“, „Казваме какво не ви трябва.“, „Показваме числата, както са.“, „Носим клиенти и поръчки.“).
- Remove „Не по имейл.“ from „Работим там, където са клиентите.“ The line stays: „В бръснарницата, на обекта, в склада.“
- Remove the „С какво работим.“ tools strip from this page. It already lives on Начало.
- Remove the Djidji Stil ladybird icon from „За кого работим.“ (same reason as 2b).

## 6. Контакт

- Remove „Отговаря Тихомир“ completely.
- Rewrite „Какво става в тези 30 минути“ in team voice:
  - Разказвате ни за бизнеса и откъде идват клиентите ви сега.
  - Отваряме заедно сайта и профила ви в Google.
  - Казваме ви какво бихме направили първо и какво не ви трябва.
  - Ако не можем да помогнем, ще ви го кажем.
  (The old line „Нищо не подписвате.“ is removed.)
- Embed the cal.com booking calendar directly on this page under the heading (use the official cal.com inline embed and `BOOKING_URL`). Keep the phone and Viber buttons above it. If the embed requires consent under the current cookie setup, load it only after consent and show the normal CTA button as the fallback. Note in your report that the embed shows the cal.com host's profile name and photo, so it must not go live until the booking link is a team account.
- Show `EMAIL` (as a `mailto:` link) next to the phone and Viber once it is filled.

## 7. Footer

- Show `EMAIL` in the footer once it is filled.
- Add a link **Политика за поверителност** → `/poveritelnost/` next to „Настройки за бисквитки“.

## 8. Privacy policy page (`/poveritelnost/`)

Create a plain, readable page in Bulgarian. Base it only on what the site actually uses: the cookie/consent banner, Google Analytics 4, Google Tag Manager, Google Ads, the cal.com booking, and phone/Viber/email contact. Cover what data is collected, why, how long it is kept, the visitor's rights under GDPR and how to contact us.

- Data controller name and contact: `TODO` (do not invent them, and do not use a personal name).
- Put a visible comment at the top of the source file: `<!-- DRAFT: review before publishing -->`.

## 9. Meta descriptions (remove the dashes)

- **Проекти:** Избрани проекти на Riddle Marketing: 21cutz, Scaff-Rent, HairSupply28 и Djidji Stil. От един профил в Google до онлайн магазин.
- **За нас:** Riddle Marketing е малък екип от София. Правим сайтове, профили в Google и реклами за местни бизнеси. Говорите директно с хората, които вършат работата.
- **Контакт:** Обадете се на 0897 853 219 или запазете безплатен 30-минутен разговор. Говорите директно с хората, които ще работят по вашия бизнес.
- Write meta descriptions for the new project pages in the same style (one or two sentences, no dashes).

## 10. Final checks (do all of these before you report back)

1. Search all source files for `—` and `–` in user-facing strings, and for „подпис“, „договор“, „обвързване“, „WhatsApp“ and „ladybird“. Report anything left and why.
2. Search the source **and the built output** (`dist/`) for „Тихомир“, „Паунов“, „tihomir“, „paunov“ and first-person singular forms („аз“, „мен“, „ми “, „мога“, „бих“). The only allowed hit is `BOOKING_URL` until I replace it. Also check that the OG image and any other images do not show a name.
3. Run the production build and fix any errors or warnings.
4. Run the dev server and check every page at **1440px** and **390px** wide. Look for broken layouts, overflow, the sticky mobile bar covering content, and empty gaps where a hidden `TODO` block was removed.
5. Click every link on every page (nav, cards, CTAs, `tel:`, Viber, the new project pages and the privacy page). Confirm there are no 404s.
6. Report back with a short list: what changed per page, every `TODO` left for me to fill (with file paths), and anything you weren't sure about.
