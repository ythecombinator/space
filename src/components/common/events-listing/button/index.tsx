import React, {FunctionComponent} from 'react';

import {FaChevronRight} from 'react-icons/fa';

import {Event} from 'model/Event';

import * as Styled from './styles';

interface Props {
  href: string;
  label: string;
}

const Button: FunctionComponent<Props> = (props) => {
  const { href, label } = props;

  return (
    <Styled.Button target="_blank" href={href}>
      <FaChevronRight /> {label}
    </Styled.Button>
  );
};

export default Button;
