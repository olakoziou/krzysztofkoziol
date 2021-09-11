import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles';
import Title from '../Title';
import Paragraph from './Paragraph';

const ProjectNameBox = styled.div`
  overflow-x: scroll;

  ul {
    min-width: 600px;
    padding: 10px 0;
    display: flex;
  }
`;

const ProjectName = styled.li`
  width: 50%;
  max-width: 180px;
  padding: 15px;
  margin: 10px 10px 0;
  background-color: ${colors().violet};
  border-radius: 10px;
  text-align: center;
  color: ${colors().grey};
  font-weight: 700;
  box-shadow: ${(props) =>
    props.isActive
      ? `0 0 14px -3px ${colors().navy1}`
      : `0 0 12px -5px ${colors().navy1}`};
  transition: all 0.2s;
`;

function InfoBoxWithMenu({ data, handleClick, text, active, bgc }) {
  return (
    <div>
      <ProjectNameBox>
        <ul>
          {data.map((el) => (
            <ProjectName
              data-id={el.id}
              onClick={handleClick}
              key={`id-${el.id}`}
              isActive={active === el.id ? true : false}
            >
              {el.name}
            </ProjectName>
          ))}
        </ul>
      </ProjectNameBox>
      <Paragraph text={text} bgc={bgc} />
    </div>
  );
}

export default InfoBoxWithMenu;
