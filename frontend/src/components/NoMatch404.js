import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import { colors } from '../styles';
import Container from './Container';

const Box = styled.div`
  background-color: ${colors().grey};
  min-height: 500px;
  padding: 100px 0;
  color: ${colors().navy2};
  position: relative;

  h2 {
    font-size: 56px;
    padding-bottom: 10px;
  }

  span {
    font-size: 24px;
  }
`;

const BigText = styled.div`
  position: absolute;
  right: 15%;
  font-size: 200px;
  font-weight: 700;
  color: ${colors(0.1).orange};
`;

function NoMatch404() {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRedirect(true);
    }, 5000);
  }, []);
  if (!redirect) {
    return (
      <Box>
        <Container>
          <h2>Ups...! Taka strona nie istnieje :(</h2>
          <span>Za chwilę zostaniesz przekierowana/y na stronę główną.</span>
          <BigText>404</BigText>
        </Container>
      </Box>
    );
  } else {
    return <Redirect to="/" />;
  }
}

export default NoMatch404;
