import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';

const ItemBox = styled.div`
  min-height: 300px;
  width: 90%;
  margin: 0 auto;

  background-color: ${colors(0.35).grey};
  backdrop-filter: blur(10px);
  position: relative;
  border-radius: 12px;
  transition: all 2s;
  box-shadow: 0 0 20px -5px ${colors().navy1};
`;
const ItemImg = styled.div`
  width: 130px;
  height: 130px;
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: cover;
  border: 2px solid ${colors().orange};
  border-radius: 50%;
  position: absolute;
  top: -45%;
  left: 50%;
  transform: translate(-50%, 50%);
`;
const ItemContent = styled.div`
  padding: 75px 15px 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h5 {
    text-align: center;
    font-size: 24px;
    color: ${colors().navy1};
    margin-bottom: 5px;
  }

  span {
    display: inline-block;
    width: 100%;
    text-align: center;
    margin-bottom: 5px;

    a {
      font-size: 20px;
      color: ${colors().navy1};
      font-weight: 700;
      cursor: pointer;

      @media ${breakpoints().md} {
        font-size: 22px;
      }
    }
  }
  p {
    color: ${colors().navy1};
    text-align: center;
    padding: 0 8px 5px;
    font-size: 18px;

    @media ${breakpoints().md} {
      font-size: 20px;
    }
  }
`;

function Item({ data }) {
  return (
    <ItemBox>
      <ItemImg img={data.img}></ItemImg>
      <ItemContent>
        <h5>{data.name}</h5>
        <span>
          <a href={data.url}>{data.company}</a>
        </span>
        <p>{data.text}</p>
      </ItemContent>
    </ItemBox>
  );
}

export default Item;
