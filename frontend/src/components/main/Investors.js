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
      name: 'Po??rednik ds. nieruchomo??ci',
      text: 'Je??eli chcesz swoj?? przysz??o???? zwi??za?? z rynkiem nieruchomo??ci, praca jako po??rednik, mo??e by?? dla Ciebie dobrym pomys??em na start. Nie dosy??, ??e dowiesz si?? jak wygl??da proces szukania nieruchomo??ci, negocjowania cen oraz finalizacja transakcji u notariusza, to przy okazji zarobisz. A im lepszym b??dziesz po??rednikiem, tym wi??cej zarobisz.',
      type: 'topLeft',
    },
    {
      id: 2,
      name: 'Inwestor',
      text: 'Wiele os??b wci???? uwa??a, ??e ??eby zacz???? inwestowa?? w nieruchomo??ci, trzeba posiada?? poka??n?? sum?? oszcz??dno??ci. To mit. Sam prowadzi??em kilka inwestycji, gdzie pr??g startowy zaczyna?? si?? ju?? od 30 tysi??cy. Pieni??dze trzymane na koncie bankowym, stale trac?? na warto??ci. Aby tego unikn????, trzeba je m??drze zainwestowa??.',
      type: 'topRight',
    },
    {
      id: 3,
      name: 'Deweloper',
      text: 'Planowanie budowy, negocjowanie cen, organizowanie projektu i wykonawc??w, zarz??dzanie budow??, sprzeda??... A to tylko cz?????? zada?? dewelopera budowlanego. Z do??wiadczenia wiem, ??e ??atwo nie jest, jednak dobrze zaplanowana inwestycja, mo??e solidnie si?? op??aci??. ',
      type: 'bottomLeft',
    },
    {
      id: 4,
      name: 'Fliper',
      text: 'Dobry fliper musi umie?? szybko oceni?? stan techniczny oraz prawny nieruchomo??ci, obliczy?? koszt ewentualnego remontu i podj???? decyzje czy ta inwestycja przyniesie mu satysfakcjonuj??ce zyski. Dlaczego? Bo prawdziwe okazje znikaj?? naprawd?? szybko. ',
      type: 'bottomRight',
    },
  ]);
  return (
    <Box>
      <Container>
        <Zoom>
          <Title>
            <h4>
              Kto zarabia na nieruchomo??ciach<span>?</span>
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
