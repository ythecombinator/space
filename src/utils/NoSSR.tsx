import React, {FunctionComponent, useEffect, useState} from 'react';

interface Props {
  defer?: boolean;
  fallback?: JSX.Element;
}

const NoSSR: FunctionComponent<Props> = (props) => {
  const { children, defer = false, fallback = null } = props;
  const [mountedState, setMountedState] = useState(false);

  useEffect(() => {
    if (!defer) {
      setMountedState(true);
    }
  }, [defer]);

  useEffect(() => {
    if (defer) {
      setMountedState(true);
    }
  }, [defer]);

  return <>{mountedState ? children : fallback}</>;
};

export default NoSSR;
