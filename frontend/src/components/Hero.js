import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import img from '../assets/img.svg';
import { colors } from '../styles';
import Container from './Container';
import { CSSTransitionGroup } from 'react-transition-group';

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
        <Fade right>
          <Title>
            Czy zarabiać na nieruchomościach może <span>każdy</span> ?
          </Title>
        </Fade>
        <Fade left>
          <img src={img} alt="hero image" />
        </Fade>
      </Box>
    </Container>
  );
}

export default Hero;
