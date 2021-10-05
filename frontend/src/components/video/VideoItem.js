import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';
import VideoIntro from './VideoIntro';

const Box = styled.div`
  height: ${(props) => (props.state ? '300px' : '80px')};
  overflow-y: ${(props) => (props.state ? 'scroll' : 'hidden')};
  border-bottom: 1px solid ${colors().darkGrey};
  transition: all 0.3s ease-out;
  background-color: ${(props) =>
    props.state ? `${colors(0.025).navy1}` : `${colors(0.15).grey}`};

  @media ${breakpoints().md} {
    height: ${(props) => (props.state ? '400px' : '80px')};
  }
`;
const Heading = styled.div`
  padding: 30px 20px;
  /* height: ${(props) => (props.height ? '10%' : '100%')}; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors().navy1};
  cursor: pointer;
  h3 {
    font-size: 22px;
  }
`;
const Main = styled.div`
  padding: 0 0 20px;

  display: flex;
  flex-direction: column;

  @media ${breakpoints().md} {
    flex-direction: row;
  }

  p {
    font-size: 20px;
    line-height: 1.4;
    padding-bottom: 20px;

    @media ${breakpoints().md} {
      font-size: 22px;
      width: 60%;
      padding: 0 20px;
    }
  }
`;

function VideoItem({ data }) {
  const [isOpened, setOpened] = useState(false);

  return (
    <Box state={isOpened}>
      <Heading onClick={() => setOpened((prev) => !prev)}>
        <h3>{data.title}</h3>
        <i className="fa fa-chevron-down"></i>
      </Heading>
      <Main>
        <p>{data.description}</p>
        <iframe
          width="350"
          height="220"
          src={`${data.url}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Main>
    </Box>
  );
}

export default VideoItem;
