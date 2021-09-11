import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles';
import Title from '../Title';
import InfoBoxWithMenu from './InfoBoxWithMenu';
import { Bounce } from 'react-reveal';

const Box = styled.div`
  height: ${(props) => (!props.isOpened === true ? '0' : '500px')};
  overflow-y: ${(props) => (!props.isOpened ? 'hidden' : 'scroll')};
  /* overflow-x: hidden; */
  transition: all 0.5s 0.1s;

  /* > div {
    overflow-x: scroll;
  } */
`;

const Paragraph = styled.p`
  /* margin-top: -40px; */
  font-size: 20px;
  line-height: 1.6;
  color: ${colors().navy1};
  padding-bottom: 30px;
`;

const ProjectNameBox = styled.div`
  overflow-x: scroll;

  ul {
    width: 1000px;
    display: flex;
  }
`;

const ProjectName = styled.li`
  width: 50%;
  max-width: 180px;
  padding: 15px;
  margin: 10px 10px 20px;
  background-color: ${colors().violet};
  border-radius: 20px;
  text-align: center;
  color: ${colors().grey};
  font-weight: 700;
  box-shadow: ${(props) =>
    props.isActive
      ? `0 0 14px -3px ${colors().navy1}`
      : `0 0 12px -5px ${colors().navy1}`};
  transition: all 0.2s;
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
