import React, {FunctionComponent} from 'react';

import BackgroundSlider from 'components/common/background-slider';

import * as Styled from './styles';

interface Props {
  data: {
    name: string;
    url: string;
    thumbnail: string;
  }[];
}

const CompanySlider: FunctionComponent<Props> = (props) => {
  const { data } = props;

  return (
    <Styled.Slider>
      <BackgroundSlider duration={20}>
        <Styled.Container>
          {data.map((item) => {
            const { name, thumbnail, url } = item;

            return (
              <div id={name}>
                <a href={url}>
                  <img alt={name} src={thumbnail} />
                </a>
              </div>
            );
          })}
        </Styled.Container>
      </BackgroundSlider>
    </Styled.Slider>
  );
};

export default CompanySlider;
