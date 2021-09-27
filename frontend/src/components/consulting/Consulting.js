import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';
import { Zoom } from 'react-reveal';
import Container from '../Container';
import Title from '../Title';

const Box = styled.div`
  min-height: 300px;
  padding: 50px 0;
  background-color: ${colors().grey};
`;

const MainBox = styled.div``;
const Calendar = styled.div`
  margin-top: 30px;
  iframe {
    height: 1200px;

    @media ${breakpoints('md')} {
      height: 700px;
    }
  }
`;
const Form = styled.div``;

function Consulting() {
  return (
    <Box>
      <Container>
        <Zoom>
          <Title text="Umów się na konsultację" size={38} after={true} />
          <MainBox>
            <Calendar>
              <iframe
                src="https://kaes-opw.calendesk.net/"
                scrolling="yes"
                height="900"
                width="100%"
                title="KAES"
                frameBorder="0"
                style={{
                  display: 'block',
                  border: 'none',
                  maxWidth: '1280px',
                  margin: '0 auto',
                }}
              ></iframe>
            </Calendar>
            <Form></Form>
          </MainBox>
        </Zoom>
      </Container>
    </Box>
  );
}

export default Consulting;
