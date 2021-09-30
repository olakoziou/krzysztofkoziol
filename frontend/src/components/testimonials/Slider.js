import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ItemsBox from './ItemsBox';
import { breakpoints, colors } from '../../styles';
import koziol1 from '../../assets/koziol1.png';
import SliderSlick from 'react-slick';

const SliderBox = styled.div`
  /* border: 5px solid white; */
  max-width: 100%;
  height: min-content;
  margin: 0 auto;
  padding: 10px 0;
  position: relative;
  overflow-x: hidden;

  @media ${breakpoints('xsm')} {
    max-width: 90%;
  }
`;

const Arrows = styled.div`
  position: absolute;
  height: 50%;
  left: -10px;
  right: -10px;
  transform: translateY(85%);
  z-index: 100;
  display: flex;
  justify-content: space-between;

  i {
    font-size: 45px;
    height: max-content;
    color: ${colors().navy1};
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      text-shadow: 0 1px 10px ${colors().orange};
    }
  }
`;

function Slider() {
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
  const [state, setState] = useState(data);

  useEffect(() => {});

  return (
    <SliderBox>
      <ItemsBox data={state} />
    </SliderBox>
  );
}

export default Slider;
