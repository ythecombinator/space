import { FunctionComponent } from 'react';
import { Session } from '../../utils';

import CardLink from '../CardLink';
import * as Styled from './styles';

type Props = Pick<Session, 'audience' | 'recording' | 'slides' | 'eventName'>;

const CardBody: FunctionComponent<Props> = (props) => {
  const { eventName, slides, audience, recording } = props;

  return (
    <Styled.Container>
      {/* <Styled.Date>{date}</Styled.Date> */}

      <Styled.Title href="">{eventName}</Styled.Title>

      <Styled.Content>
        <Styled.Info>👥 {audience ? `≈ ${audience}` : 'N/A'}</Styled.Info>
      </Styled.Content>

      {slides && <CardLink url={slides}>View the slides</CardLink>}
      {recording && <CardLink url={recording}>Watch it 📺</CardLink>}
    </Styled.Container>
  );
};

export default CardBody;
