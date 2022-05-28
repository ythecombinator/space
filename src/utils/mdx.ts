import { resolve } from 'path';
import { readFileSync } from 'fs';
import { SourcePath } from 'config/constants';
import { serialize } from 'next-mdx-remote/serialize';

export const getFileContents = async (fileName: string) => {
  const filePath = resolve(`${SourcePath.content}/${fileName}.mdx`);
  const rawFileContents = readFileSync(filePath).toString();
  const mdxFileContents = await serialize(rawFileContents);

  return mdxFileContents;
};
