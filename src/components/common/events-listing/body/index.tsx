import React, {FunctionComponent} from 'react';

import {Event} from 'model/Event';

import Button from '../button';
import * as Styled from './styles';

interface Props
  extends Pick<
    Event,
    "name" | "place" | "date" | "audience" | "video" | "slides" | "link"
  > {}

const Body: FunctionComponent<Props> = (props) => {
  const { name, slides, date, audience, video, link } = props;

  return (
    <Styled.Container>
      <Styled.Date>{date}</Styled.Date>

      <Styled.Title href={link}>{name}</Styled.Title>

      {audience && (
        <Styled.Content>
          <Styled.Info>{`👥 Audience: ~${audience}`}</Styled.Info>
        </Styled.Content>
      )}

      {video && <Button label="Watch it 📺" href={video} />}
      {slides && <Button label="Check the slides 🖥️" href={slides} />}
    </Styled.Container>
  );
};

export default Body;
