import { InferGetStaticPropsType, NextPage } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { MDXRemote } from 'next-mdx-remote';
import { NextSeo as Metadata } from 'next-seo';
import { coreContent } from 'pliny/utils/contentlayer';

import { siteMetadata } from 'config/constants';

import BiographyContentService from 'services/biography-content-service';

import { serializeExperience } from 'utils/linkedin';

import experience from 'content/biography/experience.json';

import SectionContainer from 'components/shared/section-container';
import SectionCover from 'components/shared/section-cover';
import Typography from 'components/shared/typography';

import Layout from 'components/layouts/layout-page';

/*~
 * TYPES
 */

export type CareerPageProps = InferGetStaticPropsType<typeof getStaticProps>;

/*~
 * NEXTJS
 */

const biographyServiceInstance = BiographyContentService.getInstance();

export async function getStaticProps() {
  const content = biographyServiceInstance.get('experience');

  const work = await Promise.all(experience.work.map(serializeExperience));
  const volunteering = await Promise.all(
    experience.volunteering.map(serializeExperience)
  );

  if (!content) {
    return {
      notFound: true,
    };
  }

  return { props: { content, work, volunteering } };
}

/*~
 * COMPONENTS
 */

/*~
 * PAGE
 */

const Page: NextPage<CareerPageProps> = ({ content, work, volunteering }) => {
  const MDXRenderer = useMDXComponent(content.body.code);
  const mdxContent = coreContent(content);

  return (
    <>
      <Metadata
        title={`About / ${siteMetadata.title}`}
        openGraph={{
          type: 'profile',
          profile: {
            firstName: siteMetadata.authorFirstName,
            lastName: siteMetadata.authorLastName,
            username: siteMetadata.twitter,
          },
          images: [
            {
              url: siteMetadata.avatar,
              width: 400,
              height: 400,
            },
          ],
        }}
      />
      <Layout heading="Build. Share. Rewind." headingGradient="peachy">
        <SectionContainer className="prose dark:prose-dark">
          <SectionCover alt="This is me!" src="/content/biography/work.jpg" />
          <MDXRenderer content={mdxContent} />
        </SectionContainer>

        <SectionContainer className="prose dark:prose-dark">
          <Typography.h2>Experience</Typography.h2>

          {work.map((item, index) => {
            return (
              <div key={index}>
                <Typography.h3>{item.title}</Typography.h3>
                <Typography.p>
                  <Typography.a href={item.companyUrl}>
                    {item.company}
                  </Typography.a>
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

        <SectionContainer className="prose dark:prose-dark">
          <Typography.h2>Communities</Typography.h2>

          {volunteering.map((item, index) => {
            return (
              <div key={index}>
                <Typography.h3>{item.title}</Typography.h3>
                <Typography.p>
                  <Typography.a href={item.companyUrl}>
                    {item.company}
                  </Typography.a>
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
