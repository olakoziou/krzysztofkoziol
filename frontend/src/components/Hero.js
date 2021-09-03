import React from 'react';
import styled from 'styled-components';
import img from '../assets/img.svg';
import { colors } from '../styles';
import Container from './Container';

const Box = styled.div`
  height: calc(100vh - 100px);
  padding: 20px 0;

  img {
    width: 90%;
  }
`;
const Title = styled.h2`
  font-size: 42px;
  color: ${colors().grey};
  margin-bottom: 30px;
  span {
    color: ${colors().orange};
    font-weight: 700;
  }
`;

function Hero() {
  return (
    <Container>
      <Box>
        <Title>
          Czy zarabiać na nieruchomościach może <span>każdy</span> ?
        </Title>
        <img src={img} alt="hero image" />
      </Box>
    </Container>
  );
}

export default Hero;
