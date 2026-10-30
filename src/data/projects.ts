import hero21cutz from '../assets/img/hero-21cutz.jpg';
import heroScaffrent from '../assets/img/hero-scaffrent.jpg';
import heroHairsupply from '../assets/img/hero-hairsupply28.png';
import logo21cutz from '../assets/img/logo-21cutz.png';
import logoScaffrent from '../assets/img/logo-scaffrent.png';
import logoHairsupply from '../assets/img/logo-hairsupply28.jpg';
import logoGoogleBusiness from '../assets/img/logo-google-business.png';
import logoGoogleAds from '../assets/img/logo-google-ads.png';
import logoGa4 from '../assets/img/logo-ga4.svg';
import logoWordpress from '../assets/img/logo-wordpress.png';
import logoShopify from '../assets/img/logo-shopify.svg';
import logoMeta from '../assets/img/logo-meta.svg';

export const projects = {
  cutz: {
    caseSlug: '21cutz',
    href: 'https://21cutz.com/',
    title: '21cutz',
    description: 'Бръснарница. Сайт със записване на час, реклами и проследяване.',
    linkText: '21cutz.com',
    image: hero21cutz,
    logo: logo21cutz,
    logoBg: '#0A0A0A',
    chips: [
      { icon: logoGoogleBusiness, label: 'Google Business Profile' },
      { icon: logoGoogleAds, label: 'Google Ads' },
      { icon: logoGa4, label: 'Google Analytics' },
    ],
  },
  scaffrent: {
    caseSlug: 'scaff-rent',
    href: 'https://scaff-rent.com/',
    title: 'Scaff-Rent',
    description: 'Скеле под наем. Сайт и реклами в Google.',
    linkText: 'scaff-rent.com',
    image: heroScaffrent,
    imagePosition: 'center 30%',
    logo: logoScaffrent,
    chips: [
      { icon: logoWordpress, label: 'WordPress' },
      { icon: logoGoogleAds, label: 'Google Ads' },
    ],
  },
  hairsupply: {
    caseSlug: 'hairsupply28',
    href: 'https://hairsupply28.com/',
    title: 'HairSupply28',
    description: 'Онлайн магазин. Магазин в Shopify, реклами и проследяване на поръчките.',
    linkText: 'hairsupply28.com',
    image: heroHairsupply,
    logo: logoHairsupply,
    chips: [
      { icon: logoShopify, label: 'Shopify' },
      { icon: logoGoogleAds, label: 'Google Ads' },
      { icon: logoMeta, label: 'Meta' },
      // TODO: лого на Klaviyo (src/assets/img/); дотогава чипът е само текст.
      { label: 'Klaviyo' },
    ],
  },
  // Djidji Stil has no real logo in the repo, so the card shows the name as
  // text only (no ladybird placeholder icon).
  djidji: {
    caseSlug: 'djidji-stil',
    href: 'https://share.google/HMsM5ODVUHr5m9B5t',
    title: 'Djidji Stil',
    description: 'Шивашко ателие. Само Google бизнес профил, без сайт.',
    linkText: 'Профилът в Google',
    chips: [{ icon: logoGoogleBusiness, label: 'Google Business Profile' }],
  },
};
