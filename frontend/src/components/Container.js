import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../styles';

const Box = styled.div`
  width: 90%;
  max-width: 1500px;
  height: 100%;
  margin: 0 auto;

  @media ${breakpoints().xsm} {
    width: 90%;
  }

  @media ${breakpoints().sm} {
    width: 87%;
  }

  @media ${breakpoints().md} {
    width: 84%;
  }

  @media ${breakpoints().lg} {
    width: 78%;
  }

  @media ${breakpoints().xl} {
    width: 72%;
  }
`;

function Container({ children }) {
  return <Box>{children}</Box>;
}

export default Container;
