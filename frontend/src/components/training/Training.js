import React, { useEffect, useRef, useState } from 'react';
import { Zoom } from 'react-reveal';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';
import Container from '../Container';
import Testimonials from '../testimonials/Testimonials';
import Title from '../Title';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import Details from './Details';
import Description from './Description';
import Gallery from './Gallery';
import Form from './Form';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC);

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
  const [isLoading, setIsLoading] = useState(false);
  const [formOffset, setFormOffset] = useState();
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef();

  useEffect(() => {
    console.dir(ref.current);
    setIsMounted(true);
    async function fetchData() {
      const trainings = await axios('/api/trainings');
      const imgs = await axios('/api/gallery');

      setTraining(trainings.data.data.training[0]);
      setGallery(imgs.data.data.gallery);
      setDisplay(imgs.data.data.gallery[0].display);
    }
    fetchData();

    setTimeout(() => {
      ref.current &&
        window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
    }, 300);
  }, []);

  const getFromOffset = (offset) => {
    console.log(offset);
    setFormOffset(offset);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   const stripeResp = await axios('/api/kup-szkolenie');
  //   console.log(stripeResp.data);
  //   const id = await stripeResp.data.id;
  //   const stripe = await stripePromise;
  //   const { error } = await stripe.redirectToCheckout({
  //     sessionId: id,
  //   });

  //   console.log(`error: ${error}`);
  // };

  return (
    <Box ref={ref}>
      <Container>
        <Zoom>
          <Title text="Szkolenia" size={38} after={true} />{' '}
        </Zoom>
        <MainBox>
          <Zoom>
            <Details training={training} />
          </Zoom>
          <Zoom>
            <Description training={training} formOffset={formOffset} />
          </Zoom>
          {display ? <Gallery gallery={gallery} /> : null}
          <Zoom>
            <Form
              isLoading={isLoading}
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
