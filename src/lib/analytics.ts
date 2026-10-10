// Google tag configuration. The GA4 measurement ID is public by nature (it is
// visible in the page source of any site using GA), so a hardcoded default is
// fine; env vars still override at build time.
export const GTM_ID: string = import.meta.env.PUBLIC_GTM_ID || '';
export const GA4_ID: string = import.meta.env.PUBLIC_GA4_ID || 'G-QX2PDGTKJS';
export const HAS_TAGS: boolean = Boolean(GTM_ID || GA4_ID);
