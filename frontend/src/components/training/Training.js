import React from 'react';
import { Zoom } from 'react-reveal';
import styled from 'styled-components';
import { colors } from '../../styles';

const Box = styled.div`
  min-height: 300px;
  background-color: ${colors().grey};
`;

function Training() {
  return (
    <Box>
      <Zoom>Training</Zoom>
    </Box>
  );
}

export default Training;
