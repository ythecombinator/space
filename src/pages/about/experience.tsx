import experience from 'data/experience.json';
import { InferGetStaticPropsType, NextPage } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { MDXRemote } from 'next-mdx-remote';
import { NextSeo as Metadata } from 'next-seo';
import { coreContent } from 'pliny/utils/contentlayer';

import { Routes, siteMetadata } from 'config/constants';

import MarkdownContentService from 'services/content/markdown';

import { serializeExperience } from 'utils/linkedin';
import { generateOpenGraphImage } from 'utils/open-graph';

import SectionContainer from 'components/shared/section-container';
import SectionCover from 'components/shared/section-cover';
import Typography from 'components/shared/typography';

import Layout from 'components/layouts/page';

//  ---------------------------------------------------------------------------
//  CONFIG
//  ---------------------------------------------------------------------------

const metadata = {
  title: `Experience — ${siteMetadata.title}`,
};

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

//  ---------------------------------------------------------------------------
//  NEXT
//  ---------------------------------------------------------------------------

const markdownServiceInstance = MarkdownContentService.getInstance();

export async function getStaticProps() {
  const content = markdownServiceInstance.get('experience')!;

  const work = await Promise.all(experience.work.map(serializeExperience));
  const volunteering = await Promise.all(experience.volunteering.map(serializeExperience));

  const openGraphImage = await generateOpenGraphImage({
    title: metadata.title,
    path: `content/${Routes.experience}/cover.png`,
  });

  return { props: { content, work, volunteering, openGraphImage } };
}

const Page: NextPage<PageProps> = ({ content, work, volunteering, openGraphImage }) => {
  const MDXRenderer = useMDXComponent(content.body.code);
  const mdxContent = coreContent(content);

  return (
    <>
      <Metadata
        title={metadata.title}
        openGraph={{
          type: 'profile',
          profile: {
            firstName: siteMetadata.authorFirstName,
            lastName: siteMetadata.authorLastName,
            username: siteMetadata.twitterHandle,
          },
          images: [{ url: openGraphImage }],
        }}
      />
      <Layout heading="Build. Share. Rewind." headingGradient="peachy">
        <SectionContainer className="prose dark:prose-invert">
          <SectionCover alt="This is me!" src="/content/misc/work.jpg" />
          <MDXRenderer content={mdxContent} />
        </SectionContainer>

        <SectionContainer className="prose dark:prose-invert">
          <Typography.h2>Experience</Typography.h2>

          {work.map((item, index) => {
            return (
              <div key={index}>
                <Typography.h3>{item.title}</Typography.h3>
                <Typography.p>
                  <Typography.a href={item.companyUrl}>{item.company}</Typography.a>
                  <span> • {item.location}</span>
                </Typography.p>
                <Typography.small>
                  <span>{item.startDate}</span>
                  <span> – </span>
                  <span>{item.endDate}</span>
                </Typography.small>

                {item.description && <MDXRemote {...item.description} />}
              </div>
            );
          })}
        </SectionContainer>

        <SectionContainer className="prose dark:prose-invert">
          <Typography.h2>Communities</Typography.h2>

          {volunteering.map((item, index) => {
            return (
              <div key={index}>
                <Typography.h3>{item.title}</Typography.h3>
                <Typography.p>
                  <Typography.a href={item.companyUrl}>{item.company}</Typography.a>
                </Typography.p>
                <Typography.small>
                  <span>{item.startDate}</span>
                  <span> – </span>
                  <span>{item.endDate}</span>
                </Typography.small>

                {item.description && <MDXRemote {...item.description} />}
              </div>
            );
          })}
        </SectionContainer>
      </Layout>
    </>
  );
};

export default Page;
