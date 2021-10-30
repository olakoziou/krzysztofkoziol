import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';

const InfoBox = styled.div``;

const ProjectNameBox = styled.div`
  /* padding: 0 50px 0 0; */

  ul {
    padding: 10px 10px 20px;
    display: flex;
    justify-content: start;
    min-width: 150px;
    overflow-x: scroll;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }

    @media ${breakpoints().md} {
      /* flex-direction: column; */
      flex-wrap: wrap;
      overflow-x: unset;
    }
  }
`;

const ProjectName = styled.li`
  width: 100%;
  min-width: 150px;
  max-width: 200px;
  padding: 15px;
  margin: 10px 10px 0;
  background-color: ${colors().violet};
  border-radius: 10px;
  text-align: center;
  color: ${(props) =>
    props.isActive ? `${colors().orange}` : `${colors().grey}`};
  /* color: ${colors().grey}; */
  font-weight: 700;
  /* text-transform: ${(props) =>
    props.isActive ? `uppercase` : `lowercase`}; */
  box-shadow: ${(props) =>
    props.isActive
      ? `0 0 18px -3px ${colors().violet}`
      : `0 0 12px -4px ${colors().violet}`};
  transform: ${(props) => (props.isActive ? 'scale(1.018)' : 'scale(1)')};
  transition: all 0.2s;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      color: ${colors().orange};
    }
  }

  @media ${breakpoints().sm} {
    width: 50%;
  }

  @media ${breakpoints().md} {
    min-width: 180px;
    width: 100%;
    font-size: 20px;
  }
`;

function InfoBoxWithMenu({ data, handleClick, active }) {
  return (
    <InfoBox>
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
    </InfoBox>
  );
}

export default InfoBoxWithMenu;
