import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Item from './Item';
import { breakpoints, colors } from '../../styles';
import { v4 as uuidv4 } from 'uuid';

const ItemsBoxContainer = styled.div`
  /* display: flex; */
  padding: 100px 0;
  overflow-x: hidden;

  width: 100%;
  max-width: 250px;
  margin: 0 auto;
  transition: all 1s;

  /* border: 2px solid red; */

  position: relative;

  @media ${breakpoints('sm')} {
    max-width: 600px;
  }

  @media ${breakpoints('md')} {
    max-width: 900px;
  }

  @media ${breakpoints('lg')} {
    max-width: 1200px;
  }
`;

const OverFlow = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  transition: all 1s;
`;

function ItemsBox({ data }) {
  const [state, setState] = useState(data);

  console.log(data);

  return (
    <ItemsBoxContainer>
      <OverFlow className="overflow">
        {data && data.map((el) => <Item key={uuidv4()} data={el} />)}
      </OverFlow>
    </ItemsBoxContainer>
  );
}

export default ItemsBox;
