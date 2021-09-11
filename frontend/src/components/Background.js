import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';

const Box = styled.div`
  background: ${(props) =>
    `linear-gradient(160deg, ${props.navy1} 0%, ${props.navy2} 33%, ${props.navy3} 100%)`};
  overflow: hidden;
`;

function Background({ children }) {
  const color = colors();
  return (
    <Box navy1={color.navy1} navy2={color.navy2} navy3={color.navy3}>
      {children}
    </Box>
  );
}

export default Background;
