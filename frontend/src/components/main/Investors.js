import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';
import Container from '../Container';
import { Zoom } from 'react-reveal';

const Box = styled.div`
  padding: 80px 0 40px;

  > div h3 {
    text-align: center;
    margin-top: 40px;
  }
`;

const InvestorsBox = styled.div`
  padding: 40px 0;

  @media ${breakpoints().md} {
    display: flex;
    flex-wrap: wrap;

    > div {
      width: 50%;
    }
  }
`;

const InvestorItem = styled.div`
  width: 85%;
  max-width: 400px;
  margin: 25px auto;
  font-size: 20px;
  line-height: 1.5;
  color: ${colors(0.9).grey};
  background-color: ${colors(0.5).navy1};
  box-shadow: 0 0 30px -18px ${colors().navy1};
  position: relative;

  @media ${breakpoints().sm} {
    width: 65%;
  }

  @media ${breakpoints().md} {
    width: 80%;
    font-size: 24px;
  }

  &.topLeft {
    border-radius: 0 20px 20px 20px;
    left: -8px;
    padding: 25px 25px 25px 35px;

    &::before {
      top: -50px;
      left: -40px;
    }
  }

  &.topRight {
    border-radius: 20px 0 20px 20px;
    right: -8px;
    text-align: right;
    padding: 25px 35px 25px 25px;

    &::before {
      top: -50px;
      right: -40px;
    }
  }

  &.bottomLeft {
    border-radius: 20px 20px 20px 0;
    left: -8px;
    padding: 25px 25px 25px 35px;

    &::before {
      bottom: -50px;
      left: -40px;
    }
  }

  &.bottomRight {
    border-radius: 20px 20px 0 20px;
    right: -8px;
    text-align: right;
    padding: 25px 35px 25px 25px;

    &::before {
      bottom: -50px;
      right: -40px;
    }
  }

  &::before {
    content: '${(props) => `${props.id}`}';
    position: absolute;

    font-family: 'Ubuntu', sans-serif;
    font-size: 112px;
    font-weight: 700;
    color: ${colors(0.7).violet};
  }

  h4 {
    font-size: 24px;
    font-weight: 700;
    color: ${colors().grey};
    padding: 5px 0;

    @media ${breakpoints().md} {
      font-size: 26px;
    }
  }
`;

const Title = styled.div`
  font-size: 38px;
  text-align: center;
  color: ${colors().grey};
  /* margin-top: 35px; */

  @media ${breakpoints().md} {
    font-size: 42px;
  }

  h4 {
    width: 80%;
    margin: 0 auto;
    position: relative;
    > span {
      /* position: absolute; */
      font-size: 60px;
      font-weight: 700;
      color: ${colors().orange};
    }
  }
`;

function Investors() {
  const [state] = useState([
    {
      id: 1,
      name: 'Pośrednik ds. nieruchomości',
      text: 'Jeżeli chcesz swoją przyszłość związać z rynkiem nieruchomości, praca jako pośrednik, może być dla Ciebie dobrym pomysłem na start. Nie dosyć, że dowiesz się jak wygląda proces szukania nieruchomości, negocjowania cen oraz finalizacja transakcji u notariusza, to przy okazji zarobisz. A im lepszym będziesz pośrednikiem, tym więcej zarobisz.',
      type: 'topLeft',
    },
    {
      id: 2,
      name: 'Inwestor',
      text: 'Wiele osób wciąż uważa, że żeby zacząć inwestować w nieruchomości, trzeba posiadać pokaźną sumę oszczędności. To mit. Sam prowadziłem kilka inwestycji, gdzie próg startowy zaczynał się już od 30 tysięcy. Pieniądze trzymane na koncie bankowym, stale tracą na wartości. Aby tego uniknąć, trzeba je mądrze zainwestować.',
      type: 'topRight',
    },
    {
      id: 3,
      name: 'Deweloper',
      text: 'Planowanie budowy, negocjowanie cen, organizowanie projektu i wykonawców, zarządzanie budową, sprzedaż... A to tylko część zadań dewelopera budowlanego. Z doświadczenia wiem, że łatwo nie jest, jednak dobrze zaplanowana inwestycja, może solidnie się opłacić. ',
      type: 'bottomLeft',
    },
    {
      id: 4,
      name: 'Fliper',
      text: 'Dobry fliper musi umieć szybko ocenić stan techniczny oraz prawny nieruchomości, obliczyć koszt ewentualnego remontu i podjąć decyzje czy ta inwestycja przyniesie mu satysfakcjonujące zyski. Dlaczego? Bo prawdziwe okazje znikają naprawdę szybko. ',
      type: 'bottomRight',
    },
  ]);
  return (
    <Box>
      <Container>
        <Zoom>
          <Title>
            <h4>
              Kto zarabia na nieruchomościach<span>?</span>
            </h4>
          </Title>
        </Zoom>
        <InvestorsBox>
          {state.map((el) => (
            <Zoom key={el.id}>
              <InvestorItem id={el.id} data-id={el.id} className={el.type}>
                <h4>{el.name}</h4>
                <span>{el.text}</span>
              </InvestorItem>
            </Zoom>
          ))}
        </InvestorsBox>
      </Container>
    </Box>
  );
}

export default Investors;
