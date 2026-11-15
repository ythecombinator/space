import experienceData from 'data/experience.json';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { siteMetadata } from 'config/site';

import type { AgentIndex, AgentPage, AgentPost, AgentTalk, AgentTalkStats } from 'utils/agent/types';
import { documentToString } from 'utils/contentful';

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, 'public');
const BLOG_DIR = path.join(ROOT, 'src/content/blog');
const MISC_DIR = path.join(ROOT, 'src/content/misc');
const MANIFEST_PATH = 'agent/manifest.json';
const INDEX_PATH = 'agent/content-index.json';

type ExperienceItem = {
  company: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  location?: string;
  title: string;
  description: string | null;
};

type ParsedPost = AgentPost & { body: string };

type TalkSource = {
  talkTitle: string;
  talkSlug: string;
  talkCategory?: string | null;
  _description?: string;
  _events?: string[];
  _tags?: string[];
};

type WriteOptions = {
  talks?: AgentTalk[];
  talkStats?: AgentTalkStats | null;
};

function absolute(urlPath: string) {
  return `${siteMetadata.siteUrl}${urlPath.startsWith('/') ? urlPath : `/${urlPath}`}`;
}

function oneLine(value: string, max = 180) {
  const flat = value.replace(/\s+/g, ' ').trim();
  if (flat.length <= max) return flat;
  return `${flat.slice(0, max - 1).trimEnd()}…`;
}

function asText(value: unknown) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === 'string') return value.replace(/\s+/g, ' ').trim();
  if (typeof value === 'number') return String(value);
  return '';
}

function asTags(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value.filter((tag): tag is string => typeof tag === 'string');
}

function formatCzk(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'CZK',
    maximumFractionDigits: 0,
  }).format(amount);
}

function transformProse(text: string) {
  return text
    .replace(/<Tweet\s+id=["'](\d+)["']\s*\/>/g, (_, id: string) => `[Tweet](https://twitter.com/i/status/${id})`)
    .replace(/<Price\s+amount=\{(\d+)\}[^>]*\/>/g, (_, amount: string) => formatCzk(Number(amount)))
    .replace(/<Mention\b[^>]*>/g, '')
    .replace(/<\/Mention>/g, '')
    .replace(/<CustomerPortfolio\s*\/>/g, '')
    .replace(/<\/?Admonition\.[A-Za-z]+[^>]*>/g, '');
}

function cleanupMdx(body: string) {
  return body
    .split(/(```[\s\S]*?```)/g)
    .map((part) => (part.startsWith('```') ? part : transformProse(part)))
    .join('')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function agentFooter() {
  return [
    '---',
    '',
    `${siteMetadata.author}: software engineer and speaker, based in ${siteMetadata.location}.`,
    `Site: ${siteMetadata.siteUrl} · Invite: ${absolute('/talks/invite')} · Email: ${siteMetadata.email}`,
    `GitHub: ${siteMetadata.github} · LinkedIn: ${siteMetadata.linkedin} · Twitter: ${siteMetadata.twitter}`,
    `Index for agents: ${absolute('/llms.txt')}`,
    '',
  ].join('\n');
}

function pageDocument(options: {
  title: string;
  description?: string;
  canonicalPath: string;
  extra?: string[];
  body: string;
}) {
  const lines = [`# ${options.title}`, ''];
  if (options.description) lines.push(`- Description: ${oneLine(options.description, 400)}`);
  lines.push(`- Canonical: ${absolute(options.canonicalPath)}`);
  for (const line of options.extra ?? []) lines.push(`- ${line}`);
  lines.push('', '---', '', options.body.trim(), '', agentFooter());
  return lines.join('\n');
}

function readPosts(): ParsedPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((file) => /\.(md|mdx)$/.test(file));

  return files
    .map((file) => {
      const source = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
      const { data, content } = matter(source);
      const slug = file.replace(/\.(md|mdx)$/, '');

      return {
        title: asText(data.title) || slug,
        path: `/posts/${slug}`,
        markdownPath: `/posts/${slug}.md`,
        date: asText(data.date),
        summary: asText(data.summary),
        tags: asTags(data.tags),
        language: asText(data.language) || 'en',
        body: cleanupMdx(content),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

function readMiscSource(name: string) {
  const file = fs.readdirSync(MISC_DIR).find((entry) => entry.startsWith(`${name}.`));
  if (!file) return '';
  return fs.readFileSync(path.join(MISC_DIR, file), 'utf8');
}

function readMisc(name: string) {
  const source = readMiscSource(name);
  if (!source) return '';
  return cleanupMdx(matter(source).content);
}

function usesBody() {
  const source = readMiscSource('uses');
  const intro = 'Here is everything currently in use. The HTML page shows the same list with photos.';
  const items = Array.from(source.matchAll(/name:\s*(['"])([\s\S]*?)\1[\s\S]*?description:\s*(['"])([\s\S]*?)\3/g)).map(
    (match) => {
      const name = match[2].replace(/\s+/g, ' ').trim();
      const description = match[4].replace(/\s+/g, ' ').trim();
      return `- **${name}**: ${description}`;
    }
  );

  if (!items.length) return readMisc('uses');
  return [intro, '', ...items].join('\n');
}

function roleBlock(item: ExperienceItem, fullDescription: boolean) {
  const description = item.description?.trim() ?? '';
  const visible = fullDescription ? description : description.split('Mostly working with:')[0].trim();
  const location = item.location ? ` · ${item.location}` : '';
  const lines = [
    `### ${item.title}`,
    '',
    `[${item.company}](${item.companyUrl})${location}`,
    '',
    `${item.startDate} – ${item.endDate}`,
  ];
  if (visible) lines.push('', visible);
  return lines.join('\n');
}

function experienceBody(fullDescription: boolean) {
  const work = (experienceData.work as ExperienceItem[]).map((item) => roleBlock(item, fullDescription));
  const volunteering = (experienceData.volunteering as ExperienceItem[]).map((item) => roleBlock(item, true));
  return ['## Experience', '', work.join('\n\n'), '', '## Communities', '', volunteering.join('\n\n')].join('\n');
}

export function normalizeTalks(items: TalkSource[]): AgentTalk[] {
  return items.map((item) => {
    let summary = '';
    if (item._description) {
      try {
        summary = documentToString(JSON.parse(item._description)).replace(/\s+/g, ' ').trim();
      } catch {
        summary = '';
      }
    }

    const events = Array.from(new Set(item._events ?? [])).filter(Boolean);
    return {
      title: item.talkTitle,
      path: item.talkSlug,
      markdownPath: `${item.talkSlug}.md`,
      summary,
      tags: item._tags ?? [],
      category: typeof item.talkCategory === 'string' ? item.talkCategory : '',
      events,
    };
  });
}

function readPreservedTalks(): { talks: AgentTalk[]; talkStats: AgentTalkStats | null } {
  try {
    const index = JSON.parse(fs.readFileSync(path.join(PUBLIC_DIR, INDEX_PATH), 'utf8')) as AgentIndex;
    return { talks: index.talks ?? [], talkStats: index.talkStats ?? null };
  } catch {
    return { talks: [], talkStats: null };
  }
}

function linkLine(title: string, urlPath: string, note: string) {
  return `- [${title}](${absolute(urlPath)})${note ? `: ${note}` : ''}`;
}

function renderLlmsTxt(posts: AgentPost[], talks: AgentTalk[]) {
  const recent = posts.slice(0, 5);
  const lines = [
    `# ${siteMetadata.author}`,
    '',
    `> ${siteMetadata.description} Staff Software Engineer at Medallia in Prague. Google Developer Expert.`,
    '',
    'Matheus Albuquerque writes, speaks, and builds for the web. This file is a short map. Follow a link for the clean text of a page. The full catalog, including every post and talk, is [llms-full.txt](' +
      absolute('/llms-full.txt') +
      ').',
    '',
    '## Start here',
    '',
    linkLine('Home', '/home.md', 'who he is, where he works, and how to reach him'),
    linkLine('About', '/about.md', 'biography, the ythecombinator handle, and where he is based'),
    linkLine('Talks', '/talks.md', talks.length ? `${talks.length} talks, with abstracts` : 'conference talks'),
    linkLine('Invite', '/talks/invite.md', 'speaker rider: travel, fees, workshops, and accessibility'),
    linkLine('Posts', '/posts.md', `${posts.length} published posts`),
    linkLine('Experience', '/about/experience.md', 'roles, clients, and community work'),
    linkLine('CV', '/cv.md', 'the same roles in a shorter list'),
    '',
    '## Recent posts',
    '',
    ...recent.map((post) => linkLine(post.title, post.markdownPath, `${post.date} — ${oneLine(post.summary, 140)}`)),
    '',
    '## Optional',
    '',
    linkLine('Life', '/about/life.md', 'background and how he started speaking'),
    linkLine('Traveling', '/about/traveling.md', 'working remotely and the move to Prague'),
    linkLine('Uses', '/about/uses.md', 'hardware and tools'),
    linkLine('Clients', '/about/clients.md', 'client work from consultancy years'),
    linkLine('CFP radar', '/talks/radar.md', 'why the call-for-papers list exists; the live list is on the HTML page'),
    `- [RSS](${absolute('/feed.xml')}): posts feed`,
    `- [Full catalog](${absolute('/llms-full.txt')}): every published post and talk, without article bodies`,
    '',
  ];

  return lines.join('\n');
}

function renderLlmsFull(pages: AgentPage[], posts: AgentPost[], talks: AgentTalk[]) {
  const lines = [
    `# ${siteMetadata.author}`,
    '',
    '> Full catalog of published pages, posts, and talks. This file lists titles, dates, and links. It does not include article bodies. Follow the .md link for the text.',
    '',
    '## Pages',
    '',
    ...pages.map((page) => linkLine(page.title, page.markdownPath, oneLine(page.summary, 140))),
    '',
    '## Posts',
    '',
    ...posts.map((post) =>
      linkLine(post.title, post.markdownPath, `${post.date} — ${post.tags.join(', ')} — ${oneLine(post.summary, 140)}`)
    ),
    '',
    '## Talks',
    '',
  ];

  if (!talks.length) {
    lines.push('Talk titles are loaded from the CMS at build time. Open the talks page if this list is empty.');
  } else {
    lines.push(
      ...talks.map((talk) => {
        const note = [talk.category, talk.tags.slice(0, 4).join(', '), talk.events.slice(0, 2).join(', ')]
          .filter(Boolean)
          .join(' — ');
        return linkLine(talk.title, talk.markdownPath, note);
      })
    );
  }

  lines.push('');
  return lines.join('\n');
}

function talksIntro(stats: AgentTalkStats | null) {
  const lines = [
    'Matheus has been speaking and learning in public since 2015, mostly about web performance, JavaScript/TypeScript, React, and their ecosystem. Other topics also include programming languages design and iOS engineering.',
  ];
  if (stats) {
    lines.push(
      '',
      `In total, he has presented ${stats.talksTotal} different sessions in ${stats.eventsTotal} events across ${stats.citiesTotal} cities in ${stats.countriesTotal} different countries.`
    );
  }
  lines.push(
    '',
    `Speaker rider: ${absolute('/talks/invite.md')}.`,
    '',
    'The live page also lists upcoming sessions, recordings, and photos. Those change between builds and are not copied into this file.'
  );
  return lines.join('\n');
}

function buildPages(posts: AgentPost[], talks: AgentTalk[], stats: AgentTalkStats | null): AgentPage[] {
  return [
    {
      title: 'Home',
      path: '/',
      markdownPath: '/home.md',
      summary: 'Staff Software Engineer at Medallia in Prague. Speaker, writer, and Google Developer Expert.',
    },
    {
      title: 'About',
      path: '/about',
      markdownPath: '/about.md',
      summary: 'Biography, the ythecombinator handle, Medallia, TechLabs, and React Summit NYC.',
    },
    {
      title: 'Experience',
      path: '/about/experience',
      markdownPath: '/about/experience.md',
      summary: 'Work history and community roles.',
    },
    {
      title: 'Life',
      path: '/about/life',
      markdownPath: '/about/life.md',
      summary: 'Background from Fortaleza and how public speaking started.',
    },
    {
      title: 'Traveling',
      path: '/about/traveling',
      markdownPath: '/about/traveling.md',
      summary: 'Remote work since 2017 and the move to Prague in 2019. The map is on the HTML page.',
    },
    {
      title: 'Uses',
      path: '/about/uses',
      markdownPath: '/about/uses.md',
      summary: 'Hardware and tools currently in use.',
    },
    {
      title: 'Clients',
      path: '/about/clients',
      markdownPath: '/about/clients.md',
      summary: 'Clients from consultancy work.',
    },
    {
      title: 'CV',
      path: '/cv',
      markdownPath: '/cv.md',
      summary: 'Shorter role list. The printable page is the HTML CV.',
    },
    {
      title: 'Posts',
      path: '/posts',
      markdownPath: '/posts.md',
      summary: `${posts.length} published posts.`,
    },
    {
      title: 'Talks',
      path: '/talks',
      markdownPath: '/talks.md',
      summary: stats
        ? `${stats.talksTotal} sessions in ${stats.eventsTotal} events across ${stats.countriesTotal} countries.`
        : talks.length
          ? `${talks.length} talks.`
          : 'Conference and meetup talks.',
    },
    {
      title: 'Speaker invite',
      path: '/talks/invite',
      markdownPath: '/talks/invite.md',
      summary: 'Speaker rider: travel, accommodation, fees, workshops, and accessibility.',
    },
    {
      title: 'CFP radar',
      path: '/talks/radar',
      markdownPath: '/talks/radar.md',
      summary: 'A personal call-for-papers list. The current entries are on the HTML page.',
    },
  ];
}

function renderDocuments(posts: ParsedPost[], talks: AgentTalk[], pages: AgentPage[], stats: AgentTalkStats | null) {
  const files = new Map<string, string>();

  files.set(
    'home.md',
    pageDocument({
      title: siteMetadata.author,
      description: siteMetadata.description,
      canonicalPath: '/',
      body: [
        'Matheus Albuquerque (ythecombinator) is a Staff Software Engineer at [Medallia](https://www.medallia.com) in Prague, Czech Republic. He builds their surveys platform with React and TypeScript, with a focus on user-perceived performance, accessibility, and developer experience. He previously did similar work at Citrix, STRV, and Beakyn.',
        '',
        'He is a Google Developer Expert, a mentor at [TechLabs Berlin](https://techlabs.org), and on the program committee of [React Summit](https://reactsummit.com) NYC. He speaks at conferences and writes on this site.',
        '',
        `Email: ${siteMetadata.email}`,
        '',
        `- About: ${absolute('/about.md')}`,
        `- Talks: ${absolute('/talks.md')}`,
        `- Invite: ${absolute('/talks/invite.md')}`,
        `- Posts: ${absolute('/posts.md')}`,
        `- Experience: ${absolute('/about/experience.md')}`,
      ].join('\n'),
    })
  );

  files.set(
    'about.md',
    pageDocument({
      title: 'About',
      description: 'Who am I?',
      canonicalPath: '/about',
      body: [
        'Matheus Albuquerque Brasil is known online as ythecombinator. The handle comes from the Y combinator and from why the lucky stiff. He wanted an English name after earlier handles based on his full name were hard for non-Portuguese speakers.',
        '',
        'He is a software engineer and Google Developer Expert from Fortaleza, Brazil. He has worked as a software engineer and architect in product and consultancy companies.',
        '',
        'He is based in Prague, Czech Republic, and works as a Staff Software Engineer at Medallia, where he leads development of their surveys platform, writes, and speaks at international conferences. His focus is educating advanced developers and growing communities around React, perceived performance, and developer experience.',
        '',
        'Outside Medallia he mentors at TechLabs Berlin, teaching front-end development, and sits on the program committee of the US chapter of React Summit.',
        '',
        readMisc('life') ? `A longer personal note is at ${absolute('/about/life.md')}.` : '',
      ]
        .filter(Boolean)
        .join('\n'),
    })
  );

  files.set(
    'about/experience.md',
    pageDocument({
      title: 'Experience',
      description: 'My Experience',
      canonicalPath: '/about/experience',
      body: [readMisc('experience'), '', experienceBody(true)].join('\n'),
    })
  );

  files.set(
    'about/life.md',
    pageDocument({
      title: 'Life',
      description: 'Travel, Family & More',
      canonicalPath: '/about/life',
      body: readMisc('life'),
    })
  );

  files.set(
    'about/uses.md',
    pageDocument({
      title: 'Uses',
      description: 'Hardware and tools. The HTML page is the inventory.',
      canonicalPath: '/about/uses',
      body: usesBody(),
    })
  );

  files.set(
    'about/clients.md',
    pageDocument({
      title: 'Clients',
      description: 'Develop. Ship. Repeat.',
      canonicalPath: '/about/clients',
      body: readMisc('clients'),
    })
  );

  files.set(
    'about/traveling.md',
    pageDocument({
      title: 'Traveling',
      description: 'Adventures. Memories.',
      canonicalPath: '/about/traveling',
      body: [
        'Since becoming a remote developer in late 2017, Matheus has worked from anywhere. He started by exploring more of Brazil, then lived and traveled without staying long in one place.',
        '',
        'In 2019 he and his wife moved to Prague, Czech Republic.',
        '',
        'Flight counts and the map are rendered on the HTML page from flight data. They are not copied into this file.',
      ].join('\n'),
    })
  );

  const cvWork = (experienceData.work as ExperienceItem[]).filter(
    (item) => item.company !== 'Apple Developer Academy | IFCE'
  );
  files.set(
    'cv.md',
    pageDocument({
      title: 'CV',
      description: 'Printable curriculum vitae.',
      canonicalPath: '/cv',
      body: [
        'The HTML page is the printable CV. Descriptions there stop before the tooling lists. The full writeups are on the experience page.',
        '',
        ...cvWork.map((item) => roleBlock(item, false)),
        '',
        `Full history: ${absolute('/about/experience.md')}`,
      ].join('\n'),
    })
  );

  files.set(
    'posts.md',
    pageDocument({
      title: 'Posts',
      description: 'Ideas. Stories. Updates.',
      canonicalPath: '/posts',
      body: posts
        .map((post) => linkLine(post.title, post.markdownPath, `${post.date} — ${oneLine(post.summary, 180)}`))
        .join('\n'),
    })
  );

  files.set(
    'talks.md',
    pageDocument({
      title: 'Talks',
      description: 'Confs. Meetups. More.',
      canonicalPath: '/talks',
      body: [
        talksIntro(stats),
        '',
        ...talks.map((talk) =>
          linkLine(talk.title, talk.markdownPath, [talk.category, talk.events[0]].filter(Boolean).join(' — '))
        ),
      ].join('\n'),
    })
  );

  files.set(
    'talks/invite.md',
    pageDocument({
      title: 'Speaker rider',
      description: 'Matheus at Conferences!',
      canonicalPath: '/talks/invite',
      body: readMisc('invite'),
    })
  );

  files.set(
    'talks/radar.md',
    pageDocument({
      title: 'Event CFPs Radar',
      description: 'Calls for papers Matheus is tracking.',
      canonicalPath: '/talks/radar',
      body: [
        'Coordinating submissions across events is hard. Matheus used to track them in Trello and Google Docs. In 2022 he moved that tracking to Notion. In 2023 he published the list on this site so other speakers could use it.',
        '',
        'The current entries come from Notion when the page is built. They are not copied into this file. Open the canonical page for the live list.',
      ].join('\n'),
    })
  );

  for (const post of posts) {
    files.set(
      post.markdownPath.replace(/^\//, ''),
      pageDocument({
        title: post.title,
        description: post.summary,
        canonicalPath: post.path,
        extra: [`Date: ${post.date}`, `Tags: ${post.tags.join(', ')}`, `Language: ${post.language}`],
        body: post.body,
      })
    );
  }

  for (const talk of talks) {
    const extra = [
      talk.category ? `Category: ${talk.category}` : '',
      talk.tags.length ? `Tags: ${talk.tags.join(', ')}` : '',
      talk.events.length ? `Events: ${talk.events.join(', ')}` : '',
    ].filter(Boolean);

    files.set(
      talk.markdownPath.replace(/^\//, ''),
      pageDocument({
        title: talk.title,
        description: oneLine(talk.summary, 400) || 'No abstract is stored for this talk.',
        canonicalPath: talk.path,
        extra,
        body: talk.summary || 'This talk has no abstract in the catalog.',
      })
    );
  }

  for (const page of pages) {
    if (!files.has(page.markdownPath.replace(/^\//, ''))) {
      throw new Error(`Missing markdown mirror for ${page.markdownPath}`);
    }
  }

  return files;
}

function writePublicFile(relativePath: string, contents: string) {
  const destination = path.join(PUBLIC_DIR, relativePath);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, contents.endsWith('\n') ? contents : `${contents}\n`);
}

function removeStaleFiles(nextFiles: Set<string>) {
  let previous: string[];
  try {
    previous = (JSON.parse(fs.readFileSync(path.join(PUBLIC_DIR, MANIFEST_PATH), 'utf8')) as { files: string[] }).files;
  } catch {
    return;
  }

  for (const relativePath of previous) {
    if (nextFiles.has(relativePath) || relativePath === MANIFEST_PATH) continue;
    fs.rmSync(path.join(PUBLIC_DIR, relativePath), { force: true });
  }
}

export async function writeAgentCatalog(options: WriteOptions = {}) {
  const posts = readPosts();
  if (!posts.length) throw new Error('No blog posts found for the agent catalog.');

  const preserved = options.talks ? null : readPreservedTalks();
  const talks = options.talks ?? preserved?.talks ?? [];
  const talkStats = options.talkStats === undefined ? (preserved?.talkStats ?? null) : options.talkStats;
  const pages = buildPages(posts, talks, talkStats);
  const documents = renderDocuments(posts, talks, pages, talkStats);

  const index: AgentIndex = {
    generatedAt: new Date().toISOString(),
    site: {
      name: siteMetadata.author,
      url: siteMetadata.siteUrl,
      description: siteMetadata.description,
      email: siteMetadata.email,
      location: siteMetadata.location,
    },
    pages,
    posts: posts.map(({ body: _body, ...post }) => post),
    talks,
    talkStats,
  };

  const llms = renderLlmsTxt(posts, talks);
  const llmsFull = renderLlmsFull(pages, posts, talks);
  if (!llms.startsWith('# ') || !llms.includes('\n> ')) {
    throw new Error('llms.txt must start with a heading and a blockquote summary.');
  }

  const written = new Set<string>([INDEX_PATH, 'llms.txt', 'llms-full.txt']);
  writePublicFile(INDEX_PATH, JSON.stringify(index));
  writePublicFile('llms.txt', llms);
  writePublicFile('llms-full.txt', llmsFull);

  documents.forEach((contents, relativePath) => {
    writePublicFile(relativePath, contents);
    written.add(relativePath);
  });

  removeStaleFiles(written);
  written.add(MANIFEST_PATH);
  writePublicFile(MANIFEST_PATH, JSON.stringify({ files: Array.from(written).sort() }, null, 2));

  console.log(`Agent catalog: ${posts.length} posts, ${talks.length} talks, ${documents.size} markdown mirrors.`);
}
