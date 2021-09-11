import React from 'react';
import { Zoom } from 'react-reveal';
import styled from 'styled-components';
import { colors } from '../../styles';

const Box = styled.div`
  min-height: 300px;
  background-color: ${colors().orange};
`;

function Consulting() {
  return (
    <Box>
      <Zoom>consulting</Zoom>
    </Box>
  );
}

export default Consulting;
