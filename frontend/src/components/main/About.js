import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles';
import Container from '../Container';
import AboutDetails from './AboutDetails';
import AboutIntro from './AboutIntro';

const Box = styled.div`
  background-color: ${colors().grey};
  min-height: 200px;
  padding: 40px 0;
  line-height: 1.3;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background-color: ${colors().grey};
    z-index: 10;
  }
`;

const Button = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%) rotate(45deg);
  width: 50px;
  height: 50px;
  background-color: ${colors().grey};
  box-shadow: ${(props) =>
    !props.isOpened
      ? `0 0 30px -3px ${colors().orange}`
      : `0 0 30px -3px ${colors().violet}`};
  z-index: 10;
  transition: all 0.5s;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  animation: bounce 2s ease infinite;

  @media (hover: hover) {
    &:hover {
      box-shadow: ${(props) =>
        !props.isOpened
          ? `0 0 40px -1px ${colors().orange}`
          : `0 0 40px -1px ${colors().violet}`};
    }
  }

  @keyframes bounce {
    0% {
      box-shadow: ${(props) =>
        !props.isOpened
          ? `0 0 30px -3px ${colors().orange}`
          : `0 0 30px -3px ${colors().violet}`};
    }
    50% {
      box-shadow: ${(props) =>
        !props.isOpened
          ? `0 0 15px -3px ${colors().orange}`
          : `0 0 15px -3px ${colors().violet}`};
    }
    100% {
      box-shadow: ${(props) =>
        !props.isOpened
          ? `0 0 30px -3px ${colors().orange}`
          : `0 0 30px -3px ${colors().violet}`};
    }
  }
`;

function About() {
  const [state, setState] = useState({ isOpened: false });

  const handleClick = (e) => {
    setState((prev) => {
      return { isOpened: !prev.isOpened };
    });
  };

  return (
    <Box>
      <Container>
        {!state.isOpened ? <AboutIntro /> : null}
        <AboutDetails isOpened={state.isOpened} />
      </Container>
      <Button isOpened={state.isOpened} onClick={handleClick}></Button>
    </Box>
  );
}

export default About;
