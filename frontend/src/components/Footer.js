import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../styles';
import Container from './Container';
import Title from './Title';

const Foot = styled.footer`
  background-color: ${colors().grey};
  min-height: 200px;
  padding: 30px 0;
`;

function Footer() {
  return (
    <Foot>
      <Container>
        <ul>
          <li>
            <Link to="/">główna</Link>
          </li>
          <li>
            <Link to="/konsultacje">konsultacje</Link>
          </li>
          <li>
            <Link to="/szkolenia">szkolenia</Link>
          </li>
        </ul>
        <Title text="KONTAKT" color={colors().orange} size={44} />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
          quaerat?
        </p>
        <a href="tel:+48-730-173-031">730 173 031</a>
      </Container>
    </Foot>
  );
}

export default Footer;
