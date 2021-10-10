import React, { useEffect, useState } from 'react';
import { Zoom } from 'react-reveal';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';
import Container from '../Container';
import Testimonials from '../testimonials/Testimonials';
import Title from '../Title';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Box = styled.div`
  min-height: 300px;
  padding: 50px 0;
  background-color: ${colors().grey}; ;
`;

const MainBox = styled.div`
  padding: 40px 0;
`;
const Table = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;

  @media ${breakpoints().md} {
    width: 80%;
  }
`;
const Item = styled.div`
  width: 100%;
  font-size: 24px;
  padding: 10px;

  @media ${breakpoints().md} {
    width: 50%;
  }

  i {
    color: ${colors().orange};
    padding-right: 10px;
  }
`;
const Description = styled.div`
  padding: 40px 0;
  width: 80%;
  margin: 0 auto;

  @media ${breakpoints().md} {
    padding: 60px 0;
  }
`;

const Par = styled.div`
  font-size: 22px;
  line-height: 1.4;
  padding: 10px 0;
`;

const List = styled.ol`
  li {
    font-size: 20px;
  }
`;

const Button = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 250px;
  background-color: ${colors().violet};
  color: ${colors().grey};
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  padding: 15px;
  margin-top: 30px;
  border-radius: 12px;
  box-shadow: 0 0 12px -5px ${colors().navy1};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 15px -5px ${colors().navy1};
  }
`;

const Gallery = styled.div`
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

const Form = styled.form`
  width: 90%;
  margin: 0 auto;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  input[type='submit'] {
    outline: none;
    border: none;
    width: 100%;
    background-color: ${colors().violet};
    color: ${colors().grey};
    font-size: 26px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    padding: 15px;
    margin-top: 30px;
    border-radius: 12px;
    box-shadow: 0 0 12px -5px ${colors().navy1};
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 0 15px -5px ${colors().navy1};
    }
  }
`;

function Training() {
  const [training, setTraining] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [display, setDisplay] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const trainings = await axios('/api/trainings');
      const imgs = await axios('/api/gallery');

      setTraining(trainings.data.data.training[0]);
      setGallery(imgs.data.data.gallery);
      setDisplay(imgs.data.data.gallery[0].display);
    }
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box>
      <Container>
        <Zoom>
          <Title text="Szkolenia" size={38} after={true} />{' '}
        </Zoom>
        <MainBox>
          <Zoom>
            <Table>
              <Item>
                <i className="fas fa-pen-nib"></i>
                <span>{training.title}</span>
              </Item>
              <Item>
                <i className="fas fa-users"></i>
                <span>{training.target}</span>
              </Item>
              <Item>
                <i className="far fa-clock"></i>
                <span>{training.date}</span>
              </Item>
              <Item>
                <i className="fas fa-map-marker-alt"></i>
                <span>{training.address}</span>
              </Item>
            </Table>
          </Zoom>
          <Zoom>
            <Description>
              <Title text="Opis i agenda" />
              <Par>{training.description}</Par>
              <List>
                {training.agenda &&
                  training.agenda.map((el) => (
                    <li key={el.id}>
                      {el.hour}: {el.content}
                    </li>
                  ))}
              </List>
              <Form onSubmit={handleSubmit}>
                <div>
                  <input type="checkbox" name="check" />
                  <label htmlFor="check">
                    {' '}
                    Kupując szkolenie wyrażam zgodę na przetwarzanie moich
                    danych osobowych.Zasady przetwarzania danych osobowych
                    znajdziesz w{' '}
                    <Link to="/polityka-prywatnosci">polityce prywatności</Link>
                    .
                  </label>
                </div>
                <div>
                  <input type="submit" value="Kup szkolenie" />
                </div>
              </Form>
              <Button>Kup szkolenie</Button>
            </Description>
          </Zoom>
          {gallery && gallery.map((el) => console.log(el.imgs))}
          {display ? (
            <Gallery>
              <Zoom>
                <Title text="Galeria" />
              </Zoom>
              {gallery &&
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
                ))}
            </Gallery>
          ) : null}
        </MainBox>
      </Container>
      <Testimonials />
    </Box>
  );
}

export default Training;
