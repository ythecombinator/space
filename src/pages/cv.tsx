import { InferGetStaticPropsType, NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { FaMapMarked } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

import { siteMetadata, socialNetworks } from 'config/constants';

import fonts from 'utils/fonts';
import { serializeExperience } from 'utils/linkedin';
import { classNames } from 'utils/styles';

import linkedinData from 'content/misc/experience.json';

import Avatar from 'components/shared/avatar';
import Link from 'components/shared/link';

import Badge from 'components/pages/cv/badge';
import Button from 'components/pages/cv/button';
import Card from 'components/pages/cv/card';
import Section from 'components/pages/cv/section';

/*~
 * TYPES
 */

export type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

/*~
 * NEXTJS
 */

export async function getStaticProps() {
  const workData = linkedinData.work
    .filter((item) => item.company !== 'Apple Developer Academy | IFCE')
    .map((item) => ({
      ...item,
      description: item.description?.slice(0, item.description.indexOf('Mostly working with:')) as string,
    }));

  const work = await Promise.all(workData.map(serializeExperience));
  return { props: { work } };
}

/*~
 * PAGE
 */

const Page: NextPage<PageProps> = ({ work }) => {
  return (
    <main
      className={classNames(
        'container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16',
        fonts.biotify
      )}
    >
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{siteMetadata.author}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">{siteMetadata.description}</p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <Link
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={siteMetadata.locationLink}
                target="_blank"
              >
                <FaMapMarked className="h-3 w-3" />
                {siteMetadata.location}
              </Link>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              <Button className="h-8 w-8" variant="outline" size="icon" asChild>
                <Link href={`mailto:${siteMetadata.email}`}>
                  <MdAlternateEmail className="h-4 w-4" />
                </Link>
              </Button>
              {socialNetworks.map((social) => (
                <Button key={social.label} className="h-8 w-8" variant="outline" size="icon" asChild>
                  <Link href={social.href}>
                    <social.Icon className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              <Link href={`mailto:${siteMetadata.email}`}>
                <span className="underline">{siteMetadata.email}</span>
              </Link>
            </div>
          </div>

          <Avatar.Root className="h-28 w-28">
            <Avatar.Image alt={siteMetadata.author} src={siteMetadata.avatar} />
          </Avatar.Root>
        </div>

        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            I'm a Sr. Front-End Engineer focused on new and scalable technologies based in Prague. As a consultant, I
            have shipped solutions to small, medium, and huge companies to help them meet their business goals without
            leaving quality aside.
          </p>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {work.map((work) => {
            const { company, companyUrl, startDate, endDate, description } = work;
            return (
              <Card.Root key={company}>
                <Card.Header>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <Link className="hover:underline" href={companyUrl}>
                        {company}
                      </Link>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {startDate} - {endDate}
                    </div>
                  </div>
                  <h4 className="font-mono text-sm leading-none">{work.title}</h4>
                </Card.Header>
                {description && (
                  <Card.Content className="mt-2 text-xs space-y-6">
                    <MDXRemote {...description} />
                  </Card.Content>
                )}
              </Card.Root>
            );
          })}
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {siteMetadata.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>
      </section>
    </main>
  );
};

export default Page;
