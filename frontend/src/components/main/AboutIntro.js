import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import { breakpoints, colors } from '../../styles';
import { Zoom } from 'react-reveal';

const Box = styled.div``;

const IntroSpan = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: ${colors().navy2};
  display: inline-block;
`;

const SubSpan = styled.span`
  display: block;
  width: 100%;
  margin: 0 auto;
  font-size: 20px;
  color: ${colors().navy1};
  padding: 10px 0;
`;

function AboutIntro() {
  return (
    <Box>
      <Zoom>
        <IntroSpan>
          Cześć, jestem Krzysiek. Pokażę Ci w jaki sposób można zarabiać na
          rynku nieruchomości.
        </IntroSpan>
        <SubSpan>Jeśli chcesz mnie lepiej poznać, rozwiń sekcję.</SubSpan>
      </Zoom>
    </Box>
  );
}

export default AboutIntro;
