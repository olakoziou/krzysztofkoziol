import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';
import Container from '../Container';
import Title from '../Title';
import { Zoom } from 'react-reveal';

const Box = styled.div`
  padding: 40px 0;

  > div h3 {
    text-align: center;
    margin-top: 40px;
  }
`;

const InvestorsBox = styled.div`
  padding: 40px 0;

  @media ${breakpoints('md')} {
    display: flex;
    flex-wrap: wrap;

    > div {
      width: 50%;
    }
  }
`;

const InvestorItem = styled.div`
  width: 85%;
  margin: 25px auto;
  font-size: 20px;
  line-height: 1.3;
  color: ${colors().darkGrey};
  background-color: ${colors(0.1).grey};
  box-shadow: 0 0 12px -2px ${colors().navy2};
  position: relative;
  /* border-radius: 0px 10px 10px 10px; */

  @media ${breakpoints('sm')} {
    width: 65%;
  }

  @media ${breakpoints('md')} {
    width: 80%;
  }

  &.topLeft {
    border-radius: 0 20px 20px 20px;
    left: -8px;
    padding: 15px 15px 15px 30px;

    &::before {
      top: -50px;
      left: -40px;
    }
  }

  &.topRight {
    border-radius: 20px 0 20px 20px;
    right: -8px;
    text-align: right;
    padding: 15px 30px 15px 15px;

    &::before {
      top: -50px;
      right: -40px;
    }
  }

  &.bottomLeft {
    border-radius: 20px 20px 20px 0;
    left: -8px;
    padding: 15px 15px 15px 30px;

    &::before {
      bottom: -50px;
      left: -40px;
    }
  }

  &.bottomRight {
    border-radius: 20px 20px 0 20px;
    right: -8px;
    text-align: right;
    padding: 15px 30px 15px 15px;

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
    color: ${colors(0.4).violet};
  }

  h4 {
    font-size: 20px;
    font-weight: 700;
    color: ${colors().navy1};
    padding: 5px 0;
  }
`;

function Investors() {
  const [state] = useState([
    {
      id: 1,
      name: 'Pośrednik ds. nieruchomości',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ligula mi. Pellentesque eu odio ac nunc mollis lobortis. Aenean nec urna ante. In molestie nunc ut dapibus mollis. Aliquam tristique ultrices elit aliquet posuere. Vestibulum aliquet tincidunt nulla at mollis.',
      type: 'topLeft',
    },
    {
      id: 2,
      name: 'Inwestor',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ligula mi. Pellentesque eu odio ac nunc mollis lobortis. Aenean nec urna ante. In molestie nunc ut dapibus mollis. Aliquam tristique ultrices elit aliquet posuere. Vestibulum aliquet tincidunt nulla at mollis.',
      type: 'topRight',
    },
    {
      id: 3,
      name: 'Deweloper',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ligula mi. Pellentesque eu odio ac nunc mollis lobortis. Aenean nec urna ante. In molestie nunc ut dapibus mollis. Aliquam tristique ultrices elit aliquet posuere. Vestibulum aliquet tincidunt nulla at mollis.',
      type: 'bottomLeft',
    },
    {
      id: 4,
      name: 'Flipper',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ligula mi. Pellentesque eu odio ac nunc mollis lobortis. Aenean nec urna ante. In molestie nunc ut dapibus mollis. Aliquam tristique ultrices elit aliquet posuere. Vestibulum aliquet tincidunt nulla at mollis.',
      type: 'bottomRight',
    },
  ]);
  return (
    <Box>
      <Container>
        <Zoom>
          <Title
            size={38}
            color={colors().grey}
            text="Kto zarabia na nieruchomościach"
            after={true}
          />
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
