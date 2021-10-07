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
  font-size: 20px;
  line-height: 1.6;
  text-align: center;
  color: ${colors().grey};
  background-color: ${(props) => (props.bgc ? props.bgc : 'transparent')};
  border-radius: 12px;
  margin: 10px 0 0 0;
  padding: 20px;

  @media ${breakpoints().md} {
    text-align: left;
  }
`;

function Coworking() {
  const [state] = useState([
    {
      id: 1,
      name: 'inwestycje',
      text: 'inwestycje ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor erat sit amet orci egestas convallis. Donec hendrerit, massa ut lacinia aliquet, purus lorem tempor magna, maximus varius leo quam a dolor. Suspendisse bibendum tortor in nisi imperdiet maximus.',
    },
    {
      id: 2,
      name: 'szkolenia',
      text: 'szkolenia ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor erat sit amet orci egestas convallis. Donec hendrerit, massa ut lacinia aliquet, purus lorem tempor magna, maximus varius leo quam a dolor. Suspendisse bibendum tortor in nisi imperdiet maximus.',
      url: '/szkolenia',
    },
    {
      id: 3,
      name: 'konsultacje',
      text: 'konsultacje ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor erat sit amet orci egestas convallis. Donec hendrerit, massa ut lacinia aliquet, purus lorem tempor magna, maximus varius leo quam a dolor. Suspendisse bibendum tortor in nisi imperdiet maximus.',
      url: '/konsultacje',
    },
    {
      id: 4,
      name: 'zakup',
      text: 'zakup ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor erat sit amet orci egestas convallis. Donec hendrerit, massa ut lacinia aliquet, purus lorem tempor magna, maximus varius leo quam a dolor. Suspendisse bibendum tortor in nisi imperdiet maximus.',
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
            color={colors().navy3}
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
