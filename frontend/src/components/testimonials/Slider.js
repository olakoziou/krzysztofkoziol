import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles';
import Slider2 from 'infinite-react-carousel';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';
import { breakpointsValues, SM, XSM, MD, LG } from '../../constans';

const SliderBox = styled.div`
  /* border: 5px solid white; */
  max-width: 100%;
  height: min-content;
  margin: 0 auto;
  padding: 20px 0;
  position: relative;
  overflow-x: hidden;

  @media ${breakpoints().xsm} {
    max-width: 90%;
  }

  .slider {
    padding: 100px 0 50px;
    .carousel-initialized {
      overflow: unset;
      .carousel-track {
        > .carousel-item {
        }
      }
    }
    .carousel-dots {
      button {
        &::before {
          font-size: 24px;
          line-height: 50px;
        }
      }
    }
  }
`;

function Slider({ data }) {
  const [state, setState] = useState(window.innerWidth);

  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return width;
  }

  const checkWidth = () => {
    if (state <= XSM) {
      return 1;
    } else if (state >= XSM && state <= SM) {
      return 1;
    } else if (state >= SM && state <= MD) {
      return 2;
    } else if (state >= MD && state <= LG) {
      return 3;
    } else {
      return 4;
    }
  };

  console.log(breakpointsValues().XSM);

  useEffect(() => {
    function handleResize() {
      setState(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <SliderBox>
      <Slider2
        dots
        slidesToShow={checkWidth()}
        autoplay={true}
        arrows={false}
        autoplaySpeed={4000}
        className="slider"
      >
        {data && data.map((el) => <Item key={uuidv4()} data={el} />)}
      </Slider2>
    </SliderBox>
  );
}

export default Slider;
