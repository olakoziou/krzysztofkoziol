import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';

const Text = styled.div`
  font-size: ${(props) => `${props.size}px`};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  position: relative;

  &::after {
    content: ${(props) => props.after && "''"};
    position: absolute;
    bottom: -10%;
    left: -2%;
    right: -2%;
    height: 3px;
    background-color: ${colors().orange};
  }
`;

function Title({ size = 28, weight = 500, text, color, after }) {
  return (
    <Text after={after} size={size} weight={weight} color={color}>
      <h3>{text}</h3>
    </Text>
  );
}

export default Title;
