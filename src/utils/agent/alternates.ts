const STATIC_ALTERNATES: Record<string, string> = {
  '/': '/home.md',
  '/about': '/about.md',
  '/about/experience': '/about/experience.md',
  '/about/traveling': '/about/traveling.md',
  '/cv': '/cv.md',
  '/posts': '/posts.md',
  '/talks': '/talks.md',
  '/talks/invite': '/talks/invite.md',
  '/talks/radar': '/talks/radar.md',
};

function slugParam(slug: string | string[] | undefined) {
  return Array.isArray(slug) ? slug[0] : slug;
}

export function markdownAlternate(pathname: string, query: { slug?: string | string[] }) {
  const slug = slugParam(query.slug);

  if (pathname === '/posts/[slug]' && slug) return `/posts/${slug}.md`;
  if (pathname === '/talks/[slug]' && slug) return `/talks/${slug}.md`;
  if (pathname === '/about/[slug]' && slug) return `/about/${slug}.md`;

  return STATIC_ALTERNATES[pathname] ?? null;
}
