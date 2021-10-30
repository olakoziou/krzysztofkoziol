import React, { useEffect, useRef, useState } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import { colors } from '../../styles';
import Container from '../Container';

const Box = styled.div`
  background-color: ${colors().grey};
  min-height: 500px;
  padding: 100px 0;
  color: ${colors().navy2};
  position: relative;

  h2 {
    font-size: 36px;
    padding-bottom: 20px;
    line-height: 1.4;
  }

  span {
    font-size: 24px;
    padding: 10px 0;
    display: inline-block;
  }
`;

function Success() {
  const [redirect, setRedirect] = useState(false);
  const ref = useRef();

  useEffect(() => {
    setTimeout(() => {
      ref.current &&
        window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
    }, 300);

    setTimeout(() => {
      setRedirect(true);
    }, 6000);
  }, []);

  if (!redirect) {
    return (
      <Box ref={ref}>
        <Container>
          <h2>
            Dziękuję za wpłatę. Gdy zostanie zaksięgowana, fakturę otrzymasz na
            maila podanego w formularzu.{' '}
          </h2>
          <span>Za chwilę zostaniesz przekierowany na stronę główną.</span>
          <span>Do zobaczenia na szkoleniu!</span>
        </Container>
      </Box>
    );
  } else {
    return <Redirect to="/" />;
  }
}

export default Success;
