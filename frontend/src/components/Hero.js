import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import img from '../assets/img.svg';
import { breakpoints, colors } from '../styles';
import Container from './Container';

const Box = styled.div`
  min-height: min-content;
  padding: 20px 0;
  position: relative;

  @media ${breakpoints().sm} {
    /* min-height: calc(100vh - 100px); */
    padding: 60px 0;
    display: flex;
    align-items: center;
  }

  @media ${breakpoints().md} {
    min-height: 100%;
    padding: 100px 0;
  }

  @media ${breakpoints().md} {
    display: flex;
  }
`;
const Title = styled.h2`
  font-size: 40px;
  color: ${colors().grey};
  margin-bottom: 30px;

  @media ${breakpoints().sm} {
    font-size: 46px;
  }

  @media ${breakpoints().md} {
    font-size: 56px;
  }

  span {
    color: ${colors().orange};
    font-weight: 700;
  }
`;

const Image = styled.div`
  display: flex;

  @media ${breakpoints().sm} {
    justify-content: flex-end;
  }

  @media ${breakpoints().md} {
    justify-content: center;
  }
  img {
    width: 90%;

    @media ${breakpoints().xsm} {
      width: 80%;
    }

    @media ${breakpoints().sm} {
      /* width: 50%; */
    }

    @media ${breakpoints().md} {
      width: 70%;
    }
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
          <Image>
            <img src={img} alt="hero" />
          </Image>
        </Fade>
      </Box>
    </Container>
  );
}

export default Hero;
