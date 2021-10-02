import React from 'react';
import { Zoom } from 'react-reveal';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';
import Container from '../Container';
import Testimonials from '../testimonials/Testimonials';
import Title from '../Title';
import VideoIntro from './VideoIntro';
import VideoItem from './VideoItem';

const Box = styled.div`
  background-color: ${colors().grey};
  min-height: 300px;
  padding: 50px 0;
  color: ${colors().navy1};
`;

const MainBox = styled.div`
  padding: 30px 0;

  width: 100%;

  @media ${breakpoints('md')} {
    padding: 50px 0;
  }
`;

function Video() {
  return (
    <Box>
      <Container>
        <Zoom>
          <Title size={38} after={true} text="Wideo" />
        </Zoom>
        <MainBox>
          <VideoIntro />
          <VideoItem />
          <VideoItem />
          <VideoItem />
        </MainBox>
      </Container>
      <Testimonials />
    </Box>
  );
}

export default Video;
