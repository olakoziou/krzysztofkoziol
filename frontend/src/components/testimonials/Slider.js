import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ItemsBox from './ItemsBox';
import { breakpoints, colors } from '../../styles';
import koziol1 from '../../assets/koziol1.png';
import SliderSlick from 'react-slick';
import Slider2 from 'infinite-react-carousel';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

const SliderBox = styled.div`
  /* border: 5px solid white; */
  max-width: 100%;
  height: min-content;
  margin: 0 auto;
  padding: 10px 0;
  position: relative;
  overflow-x: hidden;

  @media ${breakpoints().xsm} {
    max-width: 90%;
  }

  .slider {
    padding: 100px 0;
    .carousel-initialized {
      overflow: unset;
      .carousel-track {
        > .carousel-item {
          /* margin: 0 10px; */
        }
      }
    }
  }
`;

function Slider({ data }) {
  const [state, setState] = useState(data);
  const [width, setWidth] = useState();

  // const breakpoint = parseInt(breakpoints().md.split(' ')[1].slice(0, -3));
  const breakpoint = breakpoints();

  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return width;
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setState(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(state);
  console.log(breakpoint);
  return (
    <SliderBox>
      <Slider2 slidesToShow={2} className="slider">
        {data &&
          data.map((el) => <Item key={uuidv4()} data={el} width={width} />)}
        {/* <Item data={data[0]} />
        <Item data={data[1]} /> */}
      </Slider2>
    </SliderBox>
  );
}

export default Slider;
