import styled from 'styled-components';

import {colors} from 'styles/colors';

const { primary, white } = colors;

const StyledGithubRibbon = styled.div`
  #octocat {
    border: 0;
    color: ${primary};
    fill: ${primary};
    height: 5.2rem;
    position: fixed;
    right: 0;
    top: 0;
    width: 5.2rem;
    z-index: 99;
  }

  #octocat:hover #octocat-arm {
    animation: octocat-wave 1000ms infinite;
    transform-origin: 13rem 10.6rem;
  }

  #octocat #octocat-arm,
  #octocat #octocat-body {
    fill: ${white};
  }

  @keyframes octocat-wave {
    0%,
    50% {
      transform: rotate(0);
    }
    25%,
    75% {
      transform: rotate(-25deg);
    }
  }
`;

export { StyledGithubRibbon };
