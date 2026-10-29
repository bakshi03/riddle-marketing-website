// The five service detail pages under /uslugi/ are written but still miss
// owner copy (step timeframes, example results, FAQ answers). Until that is
// filled in, their files carry a _ prefix (so Astro does not build them) and
// every link to them hides behind this flag. To launch them: remove the _
// prefixes in src/pages/uslugi/ and set this to true.
export const SERVICE_PAGES_LIVE = false;
