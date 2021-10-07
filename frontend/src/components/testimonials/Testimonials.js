import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import testimonials from '../../assets/testimonials.jpg';
import testimonialsXsm from '../../assets/testimonials-xsm.jpg';
import testimonialsSm from '../../assets/testimonials-sm.jpg';
import testimonialsMd from '../../assets/testimonials-md.jpg';
import testimonialsLg from '../../assets/testimonials-lg.jpg';
import testimonialsXl from '../../assets/testimonials-xl.jpg';
import { colors } from '../../styles';
import koziol1 from '../../assets/koziol1.png';
import Container from '../Container';
import Slider from './Slider';
import { SM, XSM, MD, LG } from '../../constans';

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

const data = [
  {
    id: 1,
    name: 'Grzegorz Borowski',
    img: koziol1,
    company: 'Wawel Apartments',
    url: '#',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis cupiditate perspiciatis animi? Quis accusamus sed aliquid quo corrupti, tempora necessitatibus?',
  },
  {
    id: 2,
    name: 'Magdalena Makuch',
    img: koziol1,
    company: 'Record Consultings',
    url: '#',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis cupiditate perspiciatis animi? Quis accusamus sed aliquid quo corrupti, tempora necessitatibus?',
  },
  {
    id: 3,
    name: 'Mariusz Mariusz',
    img: koziol1,
    company: 'Doctor QBud',
    url: '#',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis cupiditate perspiciatis animi? Quis accusamus sed aliquid quo corrupti, tempora necessitatibus?',
  },
  {
    id: 4,
    name: 'Dominika Dominika',
    img: koziol1,
    company: 'Inspektor budowy',
    url: '#',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis cupiditate perspiciatis animi? Quis accusamus sed aliquid quo corrupti, tempora necessitatibus?',
  },
  {
    id: 5,
    name: 'Wojciech Matuszny',
    img: koziol1,
    company: 'Eco Masuria',
    url: '#',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis cupiditate perspiciatis animi? Quis accusamus sed aliquid quo corrupti, tempora necessitatibus?',
  },
  {
    id: 6,
    name: 'Ten ZeSzkolenia',
    img: koziol1,
    company: 'Ubezpieczenia',
    url: '#',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis cupiditate perspiciatis animi? Quis accusamus sed aliquid quo corrupti, tempora necessitatibus?',
  },
];

function Testimonials() {
  const [state, setState] = useState(window.innerWidth);

  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return width;
  }

  const checkWidth = () => {
    if (state <= XSM) {
      return testimonialsXsm;
    } else if (state >= XSM && state <= SM) {
      return testimonialsSm;
    } else if (state >= SM && state <= MD) {
      return testimonialsMd;
    } else if (state >= MD && state <= LG) {
      return testimonialsLg;
    } else {
      return testimonialsXl;
    }
  };

  useEffect(() => {
    function handleResize() {
      setState(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <TestimonialsBox bgc={checkWidth()}>
      <Container>
        <Slider data={data} />
      </Container>
    </TestimonialsBox>
  );
}

export default Testimonials;
