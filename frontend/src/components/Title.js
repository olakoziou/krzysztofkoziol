import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../styles';

const Text = styled.div`
  font-size: ${(props) => `${props.size}px`};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  position: relative;

  width: ${(props) => (props.width ? 'fit-content' : 'max-content')};
  margin: 0 auto;
  padding: 0 15px;
  text-align: center;

  @media ${breakpoints().sm} {
  }

  &::after {
    content: ${(props) => props.after && "''"};
    position: absolute;
    bottom: -10%;
    left: -2%;
    right: -2%;
    height: 5px;
    background-color: ${colors().orange};

    @media ${breakpoints().xsm} {
      left: 0;
      right: 0;
    }

    @media ${breakpoints().sm} {
      bottom: -20%;
    }
  }
`;

function Title({ size = 28, weight = 500, text, color, after, width }) {
  return (
    <Text after={after} size={size} weight={weight} color={color} width={width}>
      <h3>{text}</h3>
    </Text>
  );
}

export default Title;
