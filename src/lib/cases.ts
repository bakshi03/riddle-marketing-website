import { getCollection, type CollectionEntry } from 'astro:content';

export type CaseEntry = CollectionEntry<'cases'>;

export async function getPublishedCases(): Promise<CaseEntry[]> {
  const entries = await getCollection('cases', (e) => e.data.published);
  return entries.sort((a, b) => a.data.order - b.data.order);
}

/**
 * Project cards link to the client's own site until a case study is
 * published; then they switch to the case page and carry its main result.
 */
export function withCaseLink<T extends { caseSlug?: string }>(
  project: T,
  published: Map<string, CaseEntry>
): T & { result?: { value: string; label: string } } {
  const entry = project.caseSlug ? published.get(project.caseSlug) : undefined;
  if (!entry) return project;
  const h = entry.data.highlight;
  return {
    ...project,
    href: `/proekti/${entry.id}/`,
    linkText: 'Вижте казуса',
    result: h ? { value: h.value, label: h.cardLabel ?? h.label } : undefined,
  };
}
