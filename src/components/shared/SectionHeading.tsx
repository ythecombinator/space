import { FunctionComponent } from 'react';

interface SectionHeadingProps {
  title: string;
}

export const SectionHeading: FunctionComponent<SectionHeadingProps> = ({
  title,
}) => {
  return (
    <h3 className="font-bold text-2xl md:text-3xl tracking-tight my-4 text-black dark:text-white">
      {title}
    </h3>
  );
};

export default SectionHeading;
