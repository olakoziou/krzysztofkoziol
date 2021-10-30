import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';

const Box = styled.div`
  width: 100%;
  padding: ${(props) => (props.bgc ? 'unset' : '15px')};
  outline: none;
  border: none;
  color: ${(props) => (props.bgc ? colors().grey : colors().violet)};
  text-align: center;
  font-size: 26px;

  i {
    animation: spinner 1.5s linear infinite;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;

function Spinner({ bgc }) {
  return (
    <Box bgc={bgc}>
      <i className="fa fa-spinner"></i>
    </Box>
  );
}

export default Spinner;
