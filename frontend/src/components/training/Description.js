import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';
import Title from '../Title';

const Box = styled.div`
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

const Agenda = styled.div`
  padding: 20px 0;
`;

const List = styled.div`
  padding: 10px;
  border: ${(props) =>
    props.bgc ? `1px solid ${colors(0.05).navy3}` : 'unset'};
  /* box-shadow: ${(props) =>
    props.bgc ? `0 0 25px -20px ${colors().navy3}` : 'unset'}; */

  background-color: ${(props) =>
    props.bgc ? colors(0.025).navy1 : 'transparent'};

  > span {
    font-size: 22px;
    font-weight: 700;
    display: inline-block;
    padding-bottom: 5px;
  }
  ul {
    li {
      /* background-color: ${(props) =>
        props.bgc ? props.bgc : 'transparent'}; */
      font-size: 20px;
      padding: 5px;
      margin: 5px 0;
      width: fit-content;
    }
  }
`;

const Button = styled.div`
  width: 100%;
  max-width: 250px;
  margin: 0 auto;
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

  @media (hover: hover) {
    &:hover {
      transform: scale(1.03);
      box-shadow: 0 0 15px -5px ${colors().navy1};
    }
  }
`;

function Description({ training, formOffset }) {
  console.log(formOffset);
  const handleClick = (e) => {
    // window.scrollTo({ top: formOffset, behavior: 'smooth' });
    formOffset.scrollIntoView({ behavior: 'smooth' });
  };

  console.log(training.agenda[0].day1);

  return (
    <Box>
      <Title text="Opis i agenda" />
      <Par>{training.des1}</Par>
      <List bgc={colors().violet}>
        <ul>
          {training.des2 && training.des2.map((el, i) => <li key={i}>{el}</li>)}
        </ul>
      </List>
      <Agenda>
        <List>
          <span>Dzień 1</span>
          <ul>
            {training.agenda[0].day1 &&
              training.agenda[0].day1.map((el, i) => (
                <li key={i}>
                  {el.hour}: {el.content}
                </li>
              ))}
          </ul>
        </List>

        <List>
          <span>Dzień 2</span>
          <ul>
            {training.agenda[0].day2 &&
              training.agenda[0].day2.map((el, i) => (
                <li key={i}>
                  {el.hour}: {el.content}
                </li>
              ))}
          </ul>
        </List>

        {training.agenda[0].day3 ? (
          <List>
            <span>Dzień 3</span>
            <ul>
              {training.agenda[0].day3 &&
                training.agenda[0].day3.map((el, i) => (
                  <li key={i}>
                    {el.hour}: {el.content}
                  </li>
                ))}
            </ul>
          </List>
        ) : null}
      </Agenda>
      <Button onClick={handleClick}>KUPUJĘ SZKOLENIE</Button>
    </Box>
  );
}

export default Description;
