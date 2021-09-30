import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';

let item;
let width;

const children = (width) => {
  // let styles = ` &:nth-child(1) {
  //   left: ${-1 * width}px;
  // }`;
  // let x = 1;
  let styles = '';

  for (let i = 0; i <= 6; i++) {
    styles += `
    &:nth-child(${i + 1}) {
      left: ${i * width}px;
    }
    `;
    // x++;
  }
  return styles;
};

const ItemBox = styled.div`
  min-height: 300px;
  min-width: 100%;

  background-color: ${colors(0.35).grey};
  backdrop-filter: blur(10px);
  position: relative;
  border-radius: 12px;
  /* opacity: 0.75; */
  transition: all 1s;
  /* position: absolute; */
  width: 25%;

  @media ${breakpoints('sm')} {
    min-width: calc(50% - 20px);
    margin: 0 10px;
  }

  @media ${breakpoints('md')} {
    min-width: calc(33% - 30px);
    margin: 0 15px;
  }

  @media ${breakpoints('lg')} {
    min-width: calc(25% - 30px);
    margin: 0 15px;
  }
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
  margin-top: 75px;
  padding: 15px;

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
    }
  }
  p {
    color: ${colors().navy1};
    text-align: center;
    padding: 0 8px 5px;
    font-size: 18px;
  }
`;

function Item({ data }) {
  const [state, setState] = useState(null);
  useEffect(() => {
    item = Array.from(document.querySelectorAll('.overflow div'))[0];
    width = item.clientWidth + item.offsetLeft * 2;
    setState(width);
  }, []);
  return (
    <ItemBox width={state}>
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
