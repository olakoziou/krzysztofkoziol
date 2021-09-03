import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';

const Text = styled.h3`
  font-size: ${(props) => `${props.size}px`};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;

function Title({ size = 28, weight = 500, text, color }) {
  return (
    <Text size={size} weight={weight} color={color}>
      {text}
    </Text>
  );
}

export default Title;
