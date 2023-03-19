import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [process.env.CONTENTFUL_SCHEMA!]: {
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_TOKEN}`,
      },
    },
  },
  documents: ['src/**/!(*.d).{ts,tsx}', 'src/**/*.graphql'],
  generates: {
    'src/graphql/schema.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
    'src/graphql/schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
};

export default config;
