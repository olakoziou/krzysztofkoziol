import React from 'react';
import { Zoom } from 'react-reveal';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';
import Container from '../Container';
import Testimonials from '../testimonials/Testimonials';
import Title from '../Title';

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
`;
const Item = styled.div`
  width: 100%;
  font-size: 24px;
  padding: 10px;

  @media ${breakpoints('md')} {
    width: 50%;
  }

  &:nth-child(even) {
    /* text-align: end; */
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
`;

const Par = styled.div`
  font-size: 22px;
  line-height: 1.4;
  padding: 10px 0;
`;

const List = styled.ol``;
const FormContainer = styled.div``;
const Form = styled.form``;

function Training() {
  return (
    <Box>
      <Container>
        <Zoom>
          <Title text="Szkolenia" size={38} after={true} />
          <MainBox>
            <Table>
              <Item>
                <i className="fas fa-pen-nib"></i>
                <span>
                  Zarabianie na nieruchomościach. Warsztat praktyczny.
                </span>
              </Item>
              <Item>
                <i className="fas fa-users"></i>
                <span>Fliperzy, początkujący inwestorzy, pośrednicy.</span>
              </Item>
              <Item>
                <i className="far fa-clock"></i>
                <span>10.10.2021</span>
              </Item>
              <Item>
                <i className="fas fa-map-marker-alt"></i>
                <span>Elbląg</span>
              </Item>
            </Table>
            <Description>
              <Title text="Opis i agenda" />
              <Par>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                excepturi deserunt sed veniam. Nihil illo, dolores consequatur
                saepe dolorem autem blanditiis eveniet. Nihil unde dicta animi
                similique dolorem, magnam cupiditate nisi consectetur velit non
                sint repellendus minima consequuntur praesentium deserunt at,
                fugit aliquid excepturi laboriosam? Illum tenetur dolores
                recusandae odit?
              </Par>
              <List>
                <li>9.00-10.00: spotkanie, poznanie się, networking</li>
              </List>
            </Description>
          </MainBox>
        </Zoom>
        <Testimonials />
      </Container>
    </Box>
  );
}

export default Training;
