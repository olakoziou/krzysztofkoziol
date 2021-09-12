import React from 'react';
import styled from 'styled-components';
import About from './About';
import Coworking from './Coworking';
import Investors from './Investors';

const Box = styled.div``;

function Main() {
  return (
    <Box>
      <About />
      <Investors />
      <Coworking />
    </Box>
  );
}

export default Main;
