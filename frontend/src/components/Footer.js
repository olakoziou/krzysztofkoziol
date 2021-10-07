import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';
import Container from './Container';
import Title from './Title';

const Foot = styled.footer`
  background-color: ${colors().grey};
  min-height: 200px;
  padding: 30px 0;
  text-align: center;
`;

const FooterBox = styled.div``;

const Par = styled.p`
  padding: 20px 0;
  font-size: 20px;
  line-height: 1.4;
  color: ${colors().navy1};
`;

const Phone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  i {
    color: ${colors().orange};
    margin: 0 8px;
    font-size: 22px;
  }

  a {
    font-size: 20px;
    font-weight: 700;
    color: ${colors().navy2};
  }
`;

const Copyright = styled.div`
  margin: 0 -20px;

  span {
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: ${colors().navy1};
  }
`;

const Privacy = styled.div`
  span {
    a {
      color: ${colors().navy1};
      cursor: pointer;
    }
  }
`;

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Foot>
      <Container>
        <FooterBox>
          <Title text="KONTAKT" color={colors().orange} size={44} />
          <Par>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
            quaerat?
          </Par>
          <Phone>
            <i className="fas fa-phone-alt"></i>
            <a href="tel:+48-730-173-031">730 173 031</a>
          </Phone>
          <Privacy>
            <span>
              <a href="/polityka-prywatnosci">Polityka prywatności</a>
            </span>
          </Privacy>
          <Copyright>
            <span>Created by Aleksandra Kozioł &copy; {year}</span>
          </Copyright>
        </FooterBox>
      </Container>
    </Foot>
  );
}

export default Footer;
