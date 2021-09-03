import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../styles';

const Box = styled.div`
  width: 90%;
  max-width: 1500px;
  height: 100%;
  margin: 0 auto;

  @media ${breakpoints('xsm')} {
    width: 87%;
  }

  @media ${breakpoints('sm')} {
    width: 84%;
  }

  @media ${breakpoints('md')} {
    width: 80%;
  }

  @media ${breakpoints('lg')} {
    width: 75%;
  }
`;

function Container({ children }) {
  return <Box>{children}</Box>;
}

export default Container;
