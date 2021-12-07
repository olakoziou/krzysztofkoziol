import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';
import { Zoom } from 'react-reveal';
import Container from '../Container';
import Title from '../Title';
import Testimonials from '../testimonials/Testimonials';
import MetaTags from 'react-meta-tags';

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

    @media ${breakpoints().md} {
      height: 700px;
    }
  }
`;
const Subtitle = styled.p`
  text-align: center;
  padding: 30px 0 10px;

  span {
    font-weight: 700;
  }
`;

function Consulting() {
  const ref = useRef();

  useEffect(() => {
    setTimeout(() => {
      ref.current &&
        window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
    }, 300);
  }, []);
  return (
    <Box ref={ref}>
      <MetaTags>
        <title>Krzysztof Kozioł - konsultacje nieruchomościowe</title>
        <meta
          name="description"
          content="W ciągu 60 minut postaram się odpowiedzieć na wszytskie Twoje pytania dotyczące nieruchomości."
        />
      </MetaTags>
      <Container>
        <Zoom>
          <Title
            text="Umów się na konsultację"
            size={38}
            after={true}
            width="100%"
          />
          <Subtitle>
            {' '}
            W polu <span> informacje dodatkowe </span>wpisz formę spotkania:
            telefon, whatsapp, zoom.{' '}
          </Subtitle>
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
          </MainBox>
        </Zoom>
      </Container>
      <Testimonials />
    </Box>
  );
}

export default Consulting;
