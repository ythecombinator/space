import { Tweet as TweetBase, TweetCoreProps } from 'react-tweet';

import { classNames } from 'utils/styles';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface Props extends TweetCoreProps {
  containerClassName?: string;
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function Tweet({ containerClassName, ...props }: Props) {
  return (
    <div className={classNames('flex justify-center', containerClassName)}>
      <TweetBase {...props} />
    </div>
  );
}

export default Tweet;
