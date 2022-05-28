import { FunctionComponent } from 'react';

import { Session } from '../../utils';

import * as Styled from './styles';

type Props = Session['location'];

const Header: FunctionComponent<Props> = (props) => {
  const { name, photo } = props;

  return (
    <Styled.Header image={photo}>
      <Styled.Title>{name}</Styled.Title>
    </Styled.Header>
  );
};

export default Header;
