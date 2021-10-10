import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  @media ${breakpoints().md} {
    flex-direction: row;
  }
`;
const Content = styled.div`
  padding: 20px 0;
  width: 100%;

  @media ${breakpoints().md} {
    width: 45%;
    margin: 0 auto;
  }

  h4 {
    font-size: 30px;

    width: 100%;

    @media ${breakpoints().md} {
      font-size: 32px;
    }
  }
  p {
    padding: 10px 0;
    font-size: 22px;
    line-height: 1.4;

    @media ${breakpoints().md} {
      font-size: 24px;
      line-height: 1.6;
    }
  }
`;
const Video = styled.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${breakpoints().md} {
    width: 45%;
    margin: 0 auto;
  }
`;

function VideoIntro() {
  return (
    <Box>
      <Content>
        <h4>Cześć!</h4>

        <p>
          Na tej stronie będę publikował filmy, w których przybliżę Ci mój
          sposób na inwestowanie w nieruchomości. Na początku wytłumaczę Ci
          podstawowe pojęcia oraz wyjaśnię, dlaczego to właśnie nieruchomości są
          najlepszym miejscem na pomnażanie swoich oszczędności. W kolejnych
          filmikach przejdę do bardziej zaawansowanych zagadnień. Poza tym
          postaram się odpowiedzieć na najszczęściej zadawane mi pytania.
        </p>
      </Content>
      <Video>
        <iframe
          width="500"
          height="280"
          src="https://www.youtube.com/embed/PUGW7ehLrww"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Video>
    </Box>
  );
}

export default VideoIntro;
