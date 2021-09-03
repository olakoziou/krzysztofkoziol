import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import { colors } from '../../styles';

const Box = styled.div`
  > span {
    font-size: 20px;
    color: ${colors().navy1};
    display: inline-block;
    padding: 10px 0;
  }
`;

function AboutIntro() {
  return (
    <Box>
      <Title
        text="Cześć, jestem Krzysiek. Pokażę Ci w jaki sposób można zarabiać na rynku nieruchomości."
        color={colors().navy2}
        size={32}
        weight={700}
      />
      <span>Jeśli chcesz mnie lepiej poznać, rozwiń sekcję.</span>
    </Box>
  );
}

export default AboutIntro;
