// Shared FAQ for /kontakt/ and /uslugi/, so the answers cannot diverge.
// Sentences that depend on a price stay hidden until the value is filled in.

// TODO: начална цена за сайт в евро (например 600). null скрива изречението.
const SITE_PRICE_FROM: number | null = null;
// TODO: начална месечна цена за управление на реклами в евро. null скрива изречението.
const ADS_MGMT_PRICE_FROM: number | null = null;
// TODO: обичаен начален месечен рекламен бюджет за местен бизнес в евро. null скрива изречението.
const LOCAL_ADS_BUDGET_FROM: number | null = null;
// TODO: отговор на „Издавате ли фактура?“. null скрива целия въпрос.
const INVOICE_ANSWER: string | null = null;

const priceAnswer = [
  'Зависи какво ви трябва.',
  SITE_PRICE_FROM !== null ? `Сайт започва от ${SITE_PRICE_FROM} €.` : null,
  ADS_MGMT_PRICE_FROM !== null
    ? `Управлението на реклами започва от ${ADS_MGMT_PRICE_FROM} € на месец.`
    : null,
  'След разговора получавате писмена оферта с точна цена.',
]
  .filter(Boolean)
  .join(' ');

const budgetAnswer = [
  LOCAL_ADS_BUDGET_FROM !== null
    ? `За местен бизнес обикновено започваме от ${LOCAL_ADS_BUDGET_FROM} € на месец, платени директно на Google или Meta.`
    : null,
  // Същото число живее в src/content/cases/21cutz.md (рекламен бюджет 272 €).
  'За 21cutz бяха 272 € от средата на септември до края на октомври.',
]
  .filter(Boolean)
  .join(' ');

export const faq = [
  { q: 'Колко струва?', a: priceAnswer },
  {
    q: 'Кога ще видя резултат?',
    a: 'Първите числа виждате още на следващия ден. След първия месец правим анализ заедно, онлайн или на живо, както ви е удобно.',
  },
  {
    q: 'Чий е сайтът?',
    a: 'Както изберете. Може да е изцяло ваш. Може и да е наш, а вие да го ползвате на абонамент.',
  },
  { q: 'Колко да отделя за реклама?', a: budgetAnswer },
  ...(INVOICE_ANSWER ? [{ q: 'Издавате ли фактура?', a: INVOICE_ANSWER }] : []),
];
