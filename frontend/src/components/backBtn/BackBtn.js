import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';

const Btn = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${colors(0.9).orange};
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 40px;
  color: ${colors().navy1};
  box-shadow: 0 0 20px -5px ${colors().navy1};
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${(props) => (props.showButton ? `scale(1)` : 'scale(0)')};
  transition: all 0.3s ease-in-out;
  z-index: 1000;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 30px -4px ${colors().navy1};
    transform: scale(1.06);
  }

  @media ${breakpoints('lg')} {
    bottom: 30px;
    right: 80px;
  }
`;

function BackBtn() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Btn onClick={scrollToTop} showButton={showButton}>
      <i class="fa fa-chevron-up"></i>
    </Btn>
  );
}

export default BackBtn;
