import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';
import Title from '../Title';
import InfoBoxWithMenu from './InfoBoxWithMenu';
import { Bounce } from 'react-reveal';

const Box = styled.div`
  height: ${(props) => (!props.isOpened === true ? '0' : '500px')};
  overflow-y: ${(props) => (!props.isOpened ? 'hidden' : 'scroll')};
  transition: all 0.5s 0.1s;
  width: 100%;
  margin: 0 auto;

  @media ${breakpoints('sm')} {
    width: 90%;
  }

  @media ${breakpoints('sm')} {
    width: 85%;
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.6;
  color: ${colors().navy1};
  padding-bottom: 30px;
`;

function AboutDetails({ isOpened }) {
  const [state] = useState([
    { id: 1, name: 'eco masuria', text: 'eco masuria bla bla' },
    { id: 2, name: 'sun vibes', text: 'sun vibes bla bla bla' },
    { id: 3, name: 'urocze wzgórze', text: 'urocze wzgórze bla bla bla' },
  ]);
  const [active, setActive] = useState(1);

  const handleClick = (e) => {
    setActive(parseInt(e.target.dataset.id));
  };

  const text = state.filter((el) => el.id === active)[0].text;

  return (
    <Box isOpened={isOpened} className="about">
      <Bounce right>
        <div>
          <Title
            text="o mnie"
            size={68}
            color={colors(0.2).navy3}
            weight={700}
          />
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            ipsum, quam exercitationem aliquam consectetur sint placeat, nihil
            aut quas earum, quae officiis! Velit voluptates vel nesciunt eos a,
            eum animi explicabo maxime fuga unde, consectetur facere et
            voluptate officia, nisi praesentium tenetur fugiat. Perferendis
            pariatur nemo ex mollitia iste modi!
          </Paragraph>
        </div>

        <div>
          <Title
            text="projekty"
            size={68}
            color={colors(0.2).navy3}
            weight={700}
          />
          <InfoBoxWithMenu
            data={state}
            handleClick={handleClick}
            text={text}
            active={active}
          />
        </div>
      </Bounce>
    </Box>
  );
}

export default AboutDetails;
