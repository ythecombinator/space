import Document, { Html, Head, Main, NextScript } from 'next/document';

import { siteMetadata } from 'config/site';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteMetadata.siteUrl}/#website`,
      name: siteMetadata.title,
      url: siteMetadata.siteUrl,
      description: siteMetadata.description,
      inLanguage: 'en',
      publisher: { '@id': `${siteMetadata.siteUrl}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${siteMetadata.siteUrl}/#person`,
      name: siteMetadata.author,
      givenName: siteMetadata.authorFirstName,
      familyName: siteMetadata.authorLastName,
      url: siteMetadata.siteUrl,
      image: siteMetadata.avatar,
      email: siteMetadata.email,
      jobTitle: 'Staff Software Engineer',
      description:
        'Staff Software Engineer at Medallia in Prague. Builds with React and TypeScript, focused on user-perceived performance, accessibility, and developer experience. Google Developer Expert.',
      homeLocation: { '@type': 'Place', name: siteMetadata.location },
      worksFor: { '@type': 'Organization', name: 'Medallia', url: 'https://www.medallia.com' },
      knowsAbout: ['React', 'TypeScript', 'user-perceived performance', 'accessibility', 'developer experience'],
      sameAs: [siteMetadata.github, siteMetadata.linkedin, siteMetadata.twitter, 'https://dev.to/ythecombinator'],
    },
  ],
};

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#000000" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          <link rel="describedby" href="/llms.txt" />
          <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
          />
        </Head>
        <body className="bg-white text-black antialiased dark:bg-background-color dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
