# HairSupply28 case study page

You are working on riddle-marketing.com (Astro). Build the full case study at `/proekti/hairsupply28/`, using the **same template and components as `/proekti/21cutz/`**. If a stub page for HairSupply28 already exists, replace its content. **Do not redesign anything.** Reuse the existing hero, „Преди“, „Какво направихме“, the dark results band with gold numbers, the screenshot gallery, the quote block and the CTA block.

Explore the repo first: find the 21cutz case study page and its data file, the project cards on Начало and Проекти, and the sitemap setup. Then make a short plan before you change anything.

## Rules

- Bulgarian, formal „вие“, team voice „ние“. No personal names. No em dashes or en dashes in user-facing text. Use the minus sign „−“ (U+2212) for negative numbers.
- **Percentages and ratios only. No euro amounts anywhere** (not in copy, data files, alt text or comments). The client agreed to percentages only.
- Never invent numbers, quotes or images. Use only the values below. Missing assets are `TODO` and their blocks stay hidden until filled.

## Data file

Create `src/data/projects/hairsupply28.ts` (or follow whatever structure the 21cutz data file uses) with these values:

```ts
// Source: Shopify, Google Analytics 4, Google Ads, Meta Ads and Klaviyo, 1 June to 30 October 2026.
// Shares of sales are per each platform's own attribution and can overlap.
period: "от 1 юни до 30 октомври 2026",
channels: {
  googleSalesOutOf5: 1,      // 1 in 5 sales from Google paid search (GA4, 19%)
  googleReturnPerEuro: 3.8,  // sales per 1 € spent in Google Ads (ROAS)
  emailSalesShare: 12,       // % of sales attributed to Klaviyo flows (Klaviyo's own attribution)
  welcomeOpenRate: 39,       // % open rate of the welcome series
},
store: {
  newCustomersOutOf10: 8,    // 80% of orders from first-time customers (Shopify)
  adSpendShareOfRevenue: 13, // all ad spend (Google + Meta) as % of Shopify sales
},
octVsSep: {
  sales: 27,                 // %, Shopify
  orders: 32,                // %, Shopify
  metaCostPerPurchase: -45,  // %, Meta
  metaReturn: 65,            // %, Meta ROAS
  salesIndex: { sep: 100, oct: 127 },
},
quote: null,                 // TODO: owner quote, hidden until filled
```

## Page content

**Meta title:** `HairSupply28: 8 от 10 поръчки от нови клиенти | Riddle Marketing`
**Meta description:** `Онлайн магазин за продукти за къдрава коса. От юни поехме рекламите, имейлите и измерването. 8 от 10 поръчки са от нови клиенти, с реклами за 13% от оборота.`

### Hero
- Breadcrumb: Начало › Проекти › HairSupply28
- H1, in the same style as the 21cutz H1: **„HairSupply28: 8 от 10 поръчки от нови клиенти, с реклами за 13% от оборота“**
- Lead: **„Онлайн магазин за продукти за къдрава коса. Собствениците го движат до основната си работа и нямаха време за маркетинга. От юни поехме рекламите, имейлите и измерването.“**
- Meta line: Онлайн магазин · Shopify · от 1 юни до 30 октомври 2026
- Image: the existing HairSupply28 product photo (`photo-hairsupply-product`).

### Преди
> Нямаше реклами в Google и имейл маркетинг. Рекламите в Meta се отчитаха само с пиксела, без сървърно проследяване. Собствениците търсеха някой, който да поеме маркетинга, да предлага сам и да отговаря бързо.

### Какво направихме
- Реклами в Google при търсене на продуктите
- Реклами в Meta с UGC видеа и динамичен каталог
- Сървърно проследяване и Conversions API за Meta
- Автоматични имейли в Klaviyo: приветствие, изоставена количка, връщане на клиенти
- Почистен списък и нов банер за бисквитки по GDPR
- Google Analytics 4, Tag Manager и Search Console
- Табло на живо: Shopify, Meta и Google Ads на едно място

### Резултатът (dark band, gold numbers)
Heading „Резултатът“, with the period under it. Three groups, each with a heading and a small source label on the right, like the 21cutz page.

**Група „Два нови канала“** (source: „Източник: Google Analytics 4, Google Ads и Klaviyo“), 4 stats in one row (2×2 on mobile):
- **1 от 5** / продажби идва от рекламите в Google
- **3,8 €** / продажби за всеки 1 € в Google Ads
- **12%** / от продажбите идват от автоматичните имейли, по данни на Klaviyo
- **39%** / отварят приветствения имейл

**Група „Магазинът“** (source: „Източник: Shopify, Google Ads и Meta“), 2 stats:
- **8 от 10** / поръчки са от нови клиенти. Under it, a row of 10 small circles with 8 filled in gold (decorative, `aria-hidden`).
- **13%** / от оборота отиват за реклами, във всички канали заедно

**Група „Октомври спрямо септември“** (source: „Източник: Shopify и Meta“), two columns:
- Left: text „През септември продажбите паднаха. Пуснахме нови UGC видеа в Meta. Месец по-късно:“, then two horizontal index bars: Септември 100 (muted) and Октомври 127 (gold), scaled to each other. Give the bars `role="img"` and an `aria-label`.
- Right, 2×2: **+27%** продажби, **+32%** поръчки, **−45%** цена на покупка в Meta, **+65%** възвръщаемост на рекламите в Meta.

Footnote at the bottom of the band, small and muted:
> Данни от Shopify, Google Analytics 4, Google Ads, Meta и Klaviyo. Дяловете от продажбите са по данните на всяка платформа и може да се застъпват.

### Gallery „От рекламите и имейл маркетинга“
Four portrait tiles with captions. Put the image files I give you in `src/assets/hairsupply28/`. Show each tile at a 2:3 ratio with `object-fit: cover` and `object-position: top`, through Astro's image component. Hide a tile if its file is missing.
- `ugc-one-secret-feed.jpg` → „UGC видео и каталог в Meta“ (alt: „UGC видео реклама в Meta за One Secret с каталог с продукти под нея“)
- `ugc-fifty-fifty.jpg` → „UGC видео в Meta“ (alt: „UGC видео реклама в Meta за Fifty Fifty Curly Creme“)
- `catalog-carousel.jpg` → „Реклама с каталог в Meta“ (alt: „Реклама в Meta с въртележка от продукти на HairSupply28“)
- `welcome-email.jpg` → „Приветствен имейл в Klaviyo“ (alt: „Приветствен имейл на HairSupply28 с код за отстъпка и препоръчани продукти“)

Spare image, not used in the gallery: `klaviyo-popup.jpg` (the signup form on the store). Keep it in the folder in case we swap it in later.

Below: „Вижте магазина на живо: hairsupply28.com“ (link, new tab).

### Quote
Hidden while `quote` is `null`. When filled, sign it „Собствениците на HairSupply28“.

### CTA
The standard „Нека поговорим за вашия бизнес.“ block.

## Project cards

- On Проекти and Начало, the HairSupply28 card links to `/proekti/hairsupply28/` and shows one number row like the 21cutz card: **„8 от 10“ / поръчки от нови клиенти** (read the value from the data file).
- Card text stays: „Онлайн магазин. Магазин в Shopify, реклами и проследяване на поръчките.“ Tags: Shopify, Google Ads, Meta, Klaviyo. Link label: „Вижте казуса“.

## Checks

1. Run the production build and fix all errors and warnings.
2. Check `/proekti/hairsupply28/` at 1440px, 1920px and 390px: the stat rows must not leave a number alone on a row, and the bars must not overflow.
3. Search the page source and `dist/` for `€` and confirm the only hits are the „3,8 €“ and „1 €“ in the Google stat.
4. Confirm the page is in the sitemap and every link works.
5. Report back: what changed, and every `TODO` with its file path.
