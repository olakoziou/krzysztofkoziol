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

const List = styled.ol`
  li {
    font-size: 20px;
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
  return (
    <Box>
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
      <Button onClick={handleClick}>KUPUJĘ SZKOLENIE</Button>
    </Box>
  );
}

export default Description;
