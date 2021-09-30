import React from 'react';
import styled from 'styled-components';
import testimonials from '../../assets/testimonials.jpg';
import { colors } from '../../styles';

import Container from '../Container';
import Slider from './Slider';

const TestimonialsBox = styled.div`
  min-height: 300px;
  padding: 100px 0;
  background-image: ${(props) => `url(${props.bgc})`};
  background-position: center;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${colors(0.85).violet};
  }
`;

function Testimonials() {
  return (
    <TestimonialsBox bgc={testimonials}>
      <Container>
        <Slider />
      </Container>
    </TestimonialsBox>
  );
}

export default Testimonials;
