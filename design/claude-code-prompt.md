# Промпт за Claude Code: Riddle Marketing сайт

Изгради продукционен статичен сайт за **Riddle Marketing** (riddle-digital.com) по дизайна в тази папка. Езикът е български (`lang="bg"`). Трябва да е готов за публикуване днес.

## Източник
Файловете `*.dc.html` са дизайнът. Пресъздай ги пиксел-точно: същата структура, текстове, цветове, размери и отстояния. Не добавяй секции и не пренаписвай текстове.

Публикуват се само тези страници:
- `Home.dc.html` → `/` (index.html)
- `Services.dc.html` → `/uslugi/`
- `Projects.dc.html` → `/proekti/`
- `About.dc.html` → `/za-nas/`
- `Contact.dc.html` → `/kontakt/`
- `Header.dc.html` и `Footer.dc.html` са общи компоненти за всяка страница.

**Не публикувай** `Blog.dc.html`, `Article.dc.html`, `Project-21cutz.dc.html` и `Overview.dc.html`. Те са за по-късно. На тях не трябва да води никакъв линк.

## Стек
- Astro (статичен изход), без UI framework. Стиловете са в Tailwind или scoped CSS. Пренеси inline стиловете от дизайна в класове.
- Без JS освен мобилното меню в хедъра. Хедърът превключва на мобилно меню под 1180px ширина, с бутон „Меню“ / „Затвори“.
- Деплой: Netlify или Cloudflare Pages.

## Дизайн система (от файловете)
- Фон `#F3F0E9`, текст `#1A1A17`, вторичен фон `#E9E4D9`, тъмнозелен `#1E2B24`, акцент (CTA бутони) `#F4C430`.
- Шрифтове от Google Fonts:
  - Заглавия: `Sofia Sans Condensed` 800
  - Текст: `Sofia Sans` 400–700
- Заглавията ползват `clamp()` размери и line-height 0.86–0.95. Запази ги.
- Линковете са в цвета на текста, а при hover `#1E2B24`.

## Асети
- Свали всички външни изображения локално в `/public/img/` и ги конвертирай в AVIF/WebP с `<picture>`, `width`/`height` и `loading="lazy"` под първия екран. Отнася се за 21cutz.com, scaff-rent.com (i0.wp.com), hairsupply28.com, логата на Google/Meta/Shopify/WordPress/Viber/Instagram.
- `assets/ladybird.svg` е логото на Djidji Stil.
- `assets/landing-scaffrent.png` вече не се ползва никъде. Не я качвай.

## Контакти (точно така)
- Телефон: `0897 853 219` → `tel:+359897853219`
- Viber: `viber://chat?number=%2B359897853219`
- WhatsApp: `https://wa.me/359897853219`
- Записване на разговор: `https://cal.com/tihomir-paunov-9sigpg/безплатен-30-минутен-разговор`
- Djidji Stil, профил в Google: `https://share.google/HMsM5ODVUHr5m9B5t`

## SEO и техника
- Уникален `<title>` и `meta description` на всяка страница, на български.
- Open Graph: заглавие, описание и изображение 1200×630.
- Добави `sitemap.xml`, `robots.txt`, favicon и canonical URL-и.
- JSON-LD `LocalBusiness`: Riddle Marketing, телефон, София, България.
- Lighthouse: 95+ за Performance, Accessibility, SEO.
- Контраст минимум 4.5:1. Всички изображения имат `alt`.
- Тракинг: GA4 + Google Tag Manager (placeholder ID в `.env`). Събития за кликове на телефон, Viber и cal.com.

## Проверка преди край
1. Всички вътрешни линкове работят и няма линк към скрити страници.
2. Няма останали placeholder текстове в квадратни скоби `[...]`.
3. Изгледът е тестван на 375px, 768px, 1280px и 1440px.
4. `npm run build` минава без грешки.
