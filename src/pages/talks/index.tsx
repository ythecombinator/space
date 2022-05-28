import { InferGetStaticPropsType, NextPage } from 'next';

export async function getStaticProps() {
  // const { data: talkBySlugDocument } =
  //   await ContentfulService.query<TalkBySlugQuery>({
  //     query: TalkBySlugDocument,
  //     variables: {
  //       slug: params.slug,
  //     },
  //   });

  // const talkData = talkDocumentTransformer(talkBySlugDocument);

  return {
    props: {},
    revalidate: 86400,
  };
}

const TalksPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  const { title, sessions } = props;

  return (
    <div>
      <h1>Pau</h1>
    </div>
  );
};

export default TalksPage;
