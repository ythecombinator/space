import { readFileSync } from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import { resolve } from 'path';

import { SourcePath } from 'config/constants';

export const getFileContents = async (fileName: string) => {
  const filePath = resolve(`${SourcePath.content}/${fileName}.mdx`);
  const rawFileContents = readFileSync(filePath).toString();
  const mdxFileContents = await serialize(rawFileContents);

  return mdxFileContents;
};
