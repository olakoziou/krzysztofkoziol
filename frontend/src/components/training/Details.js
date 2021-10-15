import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;

  @media ${breakpoints().md} {
    width: 80%;
  }
`;

const Item = styled.div`
  width: 100%;
  font-size: 24px;
  padding: 10px;

  @media ${breakpoints().md} {
    width: 50%;
  }

  i {
    color: ${colors().orange};
    padding-right: 10px;
  }
`;

function Details({ training }) {
  return (
    <Box>
      <Item>
        <i className="fas fa-pen-nib"></i>
        <span>{training.title}</span>
      </Item>
      <Item>
        <i className="fas fa-users"></i>
        <span>{training.target}</span>
      </Item>
      <Item>
        <i className="far fa-clock"></i>
        <span>{training.date}</span>
      </Item>
      <Item>
        <i className="fas fa-map-marker-alt"></i>
        <span>{training.address}</span>
      </Item>
    </Box>
  );
}

export default Details;
