# Riddle Marketing — riddle-digital.com

Статичен маркетингов сайт на Riddle Marketing, изграден с [Astro](https://astro.build). Езикът на сайта е български.

## Страници

| Страница | Път |
| --- | --- |
| Начало | `/` |
| Услуги | `/uslugi/` |
| Проекти | `/proekti/` |
| За нас | `/za-nas/` |
| Контакт | `/kontakt/` |

Общи компоненти: `Header` (мобилно меню под 1180px) и `Footer` (CTA лента + фиксирана мобилна лента за обаждане под 760px).

## Разработка

```bash
npm install
npm run dev       # локален сървър
npm run build     # продукционен билд в dist/
npm run preview   # преглед на билда
```

## Тракинг

GA4 / GTM се конфигурират чрез environment променливи (вижте `.env.example`):

```
PUBLIC_GTM_ID=GTM-XXXXXXX
PUBLIC_GA4_ID=G-XXXXXXXXXX
```

Без зададени стойности никакъв тракинг код не се включва в билда. Кликовете върху телефон, Viber, WhatsApp и cal.com линкове изпращат събития в `dataLayer` (`click_phone`, `click_viber`, `click_whatsapp`, `click_booking`).

## Деплой

Статичен изход в `dist/` — готов за Netlify или Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`
- Environment: задайте `PUBLIC_GTM_ID` (и по желание `PUBLIC_GA4_ID`)

`sitemap-index.xml` и `robots.txt` се генерират/копират автоматично; каноничните URL-и сочат към `https://riddle-digital.com`.

## Структура

- `src/pages/` — петте публикувани страници
- `src/components/` — Header, Footer, Chip, ProjectCard
- `src/layouts/Base.astro` — SEO (title, description, Open Graph, JSON-LD LocalBusiness), шрифтове, тракинг
- `src/assets/img/` — всички изображения, локализирани и обслужвани като AVIF/WebP чрез `astro:assets`
- `design/` — оригиналните дизайн файлове (`*.dc.html`), от които е пресъздаден сайтът; страниците Blog, Article, Project-21cutz и Overview са за по-късно и не се публикуват
