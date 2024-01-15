import experience from 'data/experience.json';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { ValuesType } from 'utility-types';

export type WorkExperience = ValuesType<typeof experience.work>;

export type VolunteeringExperience = ValuesType<typeof experience.volunteering>;

export type Experience = WorkExperience | VolunteeringExperience;

export type SerializedExperience<T extends Experience> = Omit<T, 'description'> & {
  description: MDXRemoteSerializeResult;
};

export async function serializeExperience<T extends Experience>(experience: T) {
  const description = await serialize(experience.description as string);
  return { ...experience, description } as SerializedExperience<T>;
}
