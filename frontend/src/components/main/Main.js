import React from 'react';
import styled from 'styled-components';
import Testimonials from '../testimonials/Testimonials';
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
      <Testimonials />
    </Box>
  );
}

export default Main;
