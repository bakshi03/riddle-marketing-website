import { getCollection, type CollectionEntry } from 'astro:content';

export type CaseEntry = CollectionEntry<'cases'>;

export async function getPublishedCases(): Promise<CaseEntry[]> {
  return getCollection('cases', (e) => !e.data.draft);
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
  return {
    ...project,
    href: `/proekti/${entry.id}/`,
    linkText: 'Вижте казуса',
    result: entry.data.results[0],
  };
}
