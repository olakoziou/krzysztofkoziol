import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';
import { Zoom } from 'react-reveal';
import Title from '../Title';
import Spinner from '../../Spinner';

const Box = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const GalleryItemBox = styled.div`
  padding: 20px 0;
`;
const GalleryItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;

  @media ${breakpoints().sm} {
    justify-content: center;
  }
`;

const GalleryItem = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: cover;
  width: calc(50% - 10px);
  height: 100px;
  margin: 10px 10px 10px 0;
  box-shadow: 0 0 12px -8px ${colors().navy1};
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px -6px ${colors().navy1};
  }

  @media ${breakpoints().sm} {
    width: calc(33.3333% - 15px);
    height: 150px;
    margin: 15px 15px 0 0;
  }

  @media ${breakpoints().md} {
    width: calc(25% - 15px);
    height: 150px;
    margin: 15px 15px 0 0;
  }
`;

function Gallery({ gallery }) {
  return (
    <Box>
      <Title text="Galeria" />
      {gallery ? (
        gallery.map((el, i) => (
          <Zoom key={el._id}>
            <GalleryItemBox key={i}>
              <Title size={18} text={el.date} />

              <GalleryItems>
                {el.imgs.map((el, i) => (
                  <GalleryItem key={i} img={el}></GalleryItem>
                ))}
              </GalleryItems>
            </GalleryItemBox>
          </Zoom>
        ))
      ) : (
        <Spinner />
      )}
    </Box>
  );
}

export default Gallery;
