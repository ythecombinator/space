import experience from 'content/biography/experience.json';
import { InferGetStaticPropsType, NextPage } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { NextSeo as Metadata } from 'next-seo';
import { coreContent } from 'pliny/utils/contentlayer';
import ReactMarkdown from 'react-markdown';

import { siteMetadata } from 'config/constants';

import BiographyContentService from 'services/biography-content-service';

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

  if (!content) {
    return {
      notFound: true,
    };
  }

  return { props: { content } };
}

/*~
 * PAGE
 */

const CareerPage: NextPage<CareerPageProps> = ({ content }) => {
  const MDXLayout = useMDXComponent(content.body.code);
  const mainContent = coreContent(content);

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
          <MDXLayout content={mainContent} />
        </SectionContainer>

        <SectionContainer className="prose dark:prose-dark">
          <Typography.h2>Experience</Typography.h2>

          {experience.work.map((item, index) => {
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

                {item.description && (
                  <ReactMarkdown>{item.description}</ReactMarkdown>
                )}
              </div>
            );
          })}
        </SectionContainer>

        <SectionContainer className="prose dark:prose-dark">
          <Typography.h2>Communities</Typography.h2>

          {experience.volunteering.map((item, index) => {
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

                {item.description && (
                  <ReactMarkdown>{item.description}</ReactMarkdown>
                )}
              </div>
            );
          })}
        </SectionContainer>
      </Layout>
    </>
  );
};

export default CareerPage;
