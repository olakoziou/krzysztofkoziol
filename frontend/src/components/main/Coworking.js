import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';
import Container from '../Container';
import Title from '../Title';
import InfoBoxWithMenu from './InfoBoxWithMenu';
import { Zoom } from 'react-reveal';

const Box = styled.div`
  background-color: ${colors().navy2};
  min-height: 300px;
  padding: 30px 0;

  > div h3 {
    text-align: center;
    padding-top: 20px;

    @media ${breakpoints().md} {
      font-size: 52px;
    }
  }
`;

const CoworkingContentBox = styled.div`
  display: flex;
  flex-direction: column;

  @media ${breakpoints().md} {
    flex-direction: row;
  }
`;

const Par = styled.p`
  font-size: 22px;
  line-height: 1.6;
  text-align: center;
  color: ${colors().grey};
  background-color: ${(props) => (props.bgc ? props.bgc : 'transparent')};
  border-radius: 12px;
  margin: 10px 0 0 0;

  @media ${breakpoints().md} {
    padding: 5px 40px;
    text-align: left;
    font-size: 24px;
  }
`;

function Coworking() {
  const [state] = useState([
    {
      id: 1,
      name: 'inwestycje',
      text: 'Od 2015 roku skutecznie pomnażam majątek moich inwestorów. Do tej pory przeprowadziłem kilkadziesiąt inwestycji - od flipowania piwnicami na krakowskim kazimierzu, poprzez zakup, remont i sprzedaż kamienicy, po budowę kompleksu wypoczynkowego na Warmii. ',
    },
    {
      id: 2,
      name: 'szkolenia',
      text: 'Wiedzą dzielę się chętnie. Wytłumaczę Ci jak i dlaczego inwestować w nieruchomości, a następnie wspólnie poszukamy okazji i pojedziemy je obejrzeć. Po moim szkoleniu będziesz w stanie ocenić potencjalny zysk z danej inwestycji oraz samodzielnie ją przeprowadzić.',
    },
    {
      id: 3,
      name: 'konsultacje',
      text: 'Jeżeli masz jakieś wątpliwości w związku z nieruchomościami, zapraszam do kontaktu. Pomogę Ci rozwiązać kwestie prawne oraz techniczne, doradzę podczas zakupu czy sprzedaży.',
    },
    {
      id: 4,
      name: 'zakup',
      text: 'Powiedz mi czego szukasz, a ja to znajdę. W Twoim imieniu poszukam odpowiedniej nieruchomości lub klienta, wynegocjuję atrakcyjną cenę, poprowadzą proces transakcji.',
    },
  ]);
  const [active, setActive] = useState(1);

  const text = state.filter((el) => el.id === active)[0].text;

  const handleClick = (e) => {
    setActive(parseInt(e.target.dataset.id));
  };
  return (
    <Box>
      <Container>
        <Zoom>
          <Title
            size={44}
            color={colors(0.8).grey}
            text="WSPÓŁPRACA"
            weight={700}
          />
          <CoworkingContentBox>
            <InfoBoxWithMenu
              data={state}
              handleClick={handleClick}
              text={text}
              active={active}
              bgc={colors(0.25).grey}
            />
            <Par>{text}</Par>
          </CoworkingContentBox>
        </Zoom>
      </Container>
    </Box>
  );
}

export default Coworking;
