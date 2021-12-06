import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Zoom } from 'react-reveal';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';
import Container from '../Container';
import Testimonials from '../testimonials/Testimonials';
import Title from '../Title';
import VideoIntro from './VideoIntro';
import VideoItem from './VideoItem';
// import MetaTags from 'react-meta-tags';

const Box = styled.div`
  background-color: ${colors().grey};
  min-height: 300px;
  padding: 50px 0;
  color: ${colors().navy1};
`;

const MainBox = styled.div`
  padding: 30px 0;

  width: 100%;

  @media ${breakpoints().md} {
    padding: 50px 0;
  }
`;

function Video() {
  const [videos, setVideos] = useState([]);
  const ref = useRef();

  console.log(videos);

  useEffect(() => {
    async function fetchData() {
      const response = await axios('/api/videos');
      setVideos(response.data.data.videos);
    }
    fetchData();
    setTimeout(() => {
      ref.current &&
        window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
    }, 300);
  }, []);

  return (
    <Box ref={ref}>
      {/* <MetaTags>
        <title>
          Zarabianie na nieruchomościach - szkolenie i warsztat praktyczny
        </title>
        <meta
          name="description"
          content="Moje szkolenie z inwestowania w nieruchomości to praktyczny warsztat z wyszukiwania okazji inwestycyjnych, negocjowania cen, kalkulacji."
        />
      </MetaTags> */}
      <Container>
        <Zoom>
          <Title size={38} after={true} text="Wideo" />
        </Zoom>
        <MainBox>
          <VideoIntro />
          {videos && videos.map((el) => <VideoItem key={el._id} data={el} />)}
        </MainBox>
      </Container>
      <Testimonials />
    </Box>
  );
}

export default Video;
