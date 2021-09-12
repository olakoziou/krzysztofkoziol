import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import { breakpoints, colors } from '../../styles';
import { Zoom } from 'react-reveal';

const Box = styled.div`
  > span {
    display: block;
    width: 100%;
    margin: 0 auto;
    font-size: 20px;
    color: ${colors().navy1};
    padding: 10px 0;

    @media ${breakpoints('xsm')} {
      width: 90%;
    }

    @media ${breakpoints('sm')} {
      width: 80%;
    }

    @media ${breakpoints('md')} {
      width: 70%;
    }
  }
`;

function AboutIntro() {
  return (
    <Box>
      <Zoom>
        <Title
          text="Cześć, jestem Krzysiek. Pokażę Ci w jaki sposób można zarabiać na rynku nieruchomości."
          color={colors().navy2}
          size={32}
          weight={700}
        />
        <span>Jeśli chcesz mnie lepiej poznać, rozwiń sekcję.</span>
      </Zoom>
    </Box>
  );
}

export default AboutIntro;
