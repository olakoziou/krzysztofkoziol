import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';

const Box = styled.div`
  height: ${(props) => (props.state ? '360px' : 'auto')};
  padding-bottom: ${(props) => (props.state ? '30px' : 'unset')};
  overflow-x: hidden;
  border-bottom: 1px solid ${colors().darkGrey};
  transition: all 0.2s ease-out;
  background-color: ${(props) =>
    props.state ? `${colors(0.025).navy1}` : `${colors(0.15).grey}`};
`;
const Heading = styled.div`
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors().navy1};
  cursor: pointer;
  h3 {
    font-size: 22px;
  }

  i {
    flex-basis: 20%;
    text-align: end;
  }
`;
const Main = styled.div`
  padding: 10px 20px;
  opacity: ${(props) => (props.state ? '1' : '0')};
  visibility: ${(props) => (props.state ? 'visible' : 'hidden')};
  transition: all 0.2s;
  position: ${(props) => (props.state ? 'relative' : 'absolute')};

  display: flex;
  flex-direction: column;

  @media ${breakpoints().md} {
    flex-direction: row;
    padding: 10px 10px 20px 0;
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

  const handleClick = (e) => {
    e.stopPropagation();
    setOpened((prev) => !prev);
  };

  return (
    <Box state={isOpened}>
      <Heading onClick={handleClick}>
        <h3>{data.title}</h3>
        <i className="fa fa-chevron-down"></i>
      </Heading>
      <Main state={isOpened}>
        <p>{data.description}</p>
        <iframe
          width="auto"
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
