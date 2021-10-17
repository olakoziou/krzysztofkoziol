import React from 'react';
import styled from 'styled-components';
import { colors } from './styles';

const Box = styled.div`
  outline: none;
  border: none;
  width: 100%;
  background-color: ${colors().violet};
  color: ${colors().grey};
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  padding: 15px;
  margin-top: 30px;
  border-radius: 12px;
  box-shadow: 0 0 12px -5px ${colors().navy1};
  cursor: pointer;

  i {
    animation: spinner 1.5s linear infinite;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;

function Spinner() {
  return (
    <Box>
      <i className="fa fa-spinner"></i>
    </Box>
  );
}

export default Spinner;