import React, { useEffect, useRef, useState } from 'react';
import { Zoom } from 'react-reveal';
import styled from 'styled-components';
import { colors } from '../../styles';
import Container from '../Container';
import Testimonials from '../testimonials/Testimonials';
import Title from '../Title';
import axios from 'axios';
import Details from './Details';
import Description from './Description';
import Gallery from './Gallery';
import Form from './Form';
import Spinner from '../../components/Spinner';

const Box = styled.div`
  min-height: 300px;
  padding: 50px 0;
  background-color: ${colors().grey};
  position: relative;
`;

const MainBox = styled.div`
  padding: 40px 0;
`;

function Training() {
  const [training, setTraining] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [display, setDisplay] = useState(null);

  const [formOffset, setFormOffset] = useState();
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef();

  useEffect(() => {
    async function fetchData() {
      const trainings = await axios('/api/trainings');
      const imgs = await axios('/api/gallery');

      setTraining(trainings.data.data.training[0]);
      setGallery(imgs.data.data.gallery);
      setDisplay(imgs.data.data.gallery[0].display);
      setIsMounted(true);
    }
    fetchData();

    setTimeout(() => {
      ref.current &&
        window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
    }, 300);
  }, []);

  const getFromOffset = (offset) => {
    setFormOffset(offset);
  };

  return (
    <Box ref={ref}>
      <Container>
        <Zoom>
          <Title text="Szkolenia" size={38} after={true} />{' '}
        </Zoom>
        <MainBox>
          {isMounted ? (
            <Zoom>
              <Details training={training} />
            </Zoom>
          ) : (
            <Spinner />
          )}
          {isMounted ? (
            <Zoom>
              <Description training={training} formOffset={formOffset} />
            </Zoom>
          ) : (
            <Spinner />
          )}
          {display ? (
            isMounted ? (
              <Gallery gallery={gallery} />
            ) : (
              <Spinner />
            )
          ) : null}
          <Zoom>
            <Form
              getFromOffset={getFromOffset}
              // handleSubmit={handleSubmit}
            />
          </Zoom>
        </MainBox>
      </Container>
      {isMounted && <Testimonials />}
    </Box>
  );
}

export default Training;
