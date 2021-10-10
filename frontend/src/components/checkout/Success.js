import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles';
import Container from '../Container';

const Box = styled.div`
  min-height: 300px;
  padding: 50px 0;
  background-color: ${colors().grey};
`;

function Success() {
  return (
    <Box>
      <Container>Success!</Container>
    </Box>
  );
}

export default Success;
