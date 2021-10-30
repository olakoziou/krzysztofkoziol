import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles';
import Slider2 from 'infinite-react-carousel';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';
import { SM, LG, XL } from '../../constans';

const SliderBox = styled.div`
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
    if (state <= SM) {
      return 1;
    } else if (state >= SM && state <= LG) {
      return 2;
    } else if (state >= LG && state <= XL) {
      return 3;
    } else {
      return 4;
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
    <SliderBox>
      <Slider2
        dots
        slidesToShow={checkWidth()}
        autoplay={true}
        arrows={false}
        autoplaySpeed={8000}
        className="slider"
      >
        {data && data.map((el) => <Item key={uuidv4()} data={el} />)}
      </Slider2>
    </SliderBox>
  );
}

export default Slider;
