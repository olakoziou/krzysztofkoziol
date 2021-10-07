import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles';

const P = styled.p`
  font-size: 20px;
  line-height: 1.6;
  color: ${colors().navy1};
  background-color: ${(props) => (props.bgc ? props.bgc : 'transparent')};
  border-radius: 12px;
  margin: 10px 0 0 0;
  padding: 20px;
`;

function Paragraph({ text, bgc }) {
  return <P bgc={bgc}>{text}</P>;
}

export default Paragraph;
