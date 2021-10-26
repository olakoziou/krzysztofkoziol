import React from 'react';
import styled from 'styled-components';
import { colors } from './styles';

const Box = styled.div`
  width: 100%;
  padding: 15px;
  outline: none;
  border: none;
  color: ${colors().violet};
  text-align: center;
  font-size: 26px;
  /* background-color: ${colors().violet}; */
  /* font-weight: 700;
  text-transform: uppercase;
  margin-top: 30px;
  border-radius: 12px;
  box-shadow: 0 0 12px -5px ${colors().navy1};
  cursor: pointer; */

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
