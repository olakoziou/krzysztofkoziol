import React, { useState } from 'react';
import styled from 'styled-components';

import { colors } from '../../styles';
import Container from '../Container';
import AboutDetails from './AboutDetails';
import AboutIntro from './AboutIntro';

const Box = styled.div`
  background-color: ${colors().grey};
  min-height: 200px;
  /* height: 400px; */
  padding: 40px 0;
  line-height: 1.3;
  position: relative;
  /* overflow: hidden; */
  /* z-index: 100; */

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
      ? `0 0 30px -1px ${colors().orange}`
      : `0 0 30px -1px ${colors().violet}`};
  z-index: 10;
  transition: all 0.5s;
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
