import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import { Link } from 'react-router-dom';
import { breakpoints, colors } from '../styles';

const Head = styled.header`
  height: 100px;
  position: relative;
  /* overflow-x: hidden; */

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  @media ${breakpoints('sm')} {
    height: 130px;
  }

  @media ${breakpoints('md')} {
    height: 150px;
  }
`;

const Logo = styled.div`
  z-index: 100;
  width: 40px;
  line-height: 0.7;
  a {
    color: ${colors().orange};
    font-weight: 700;
    font-size: 22px;

    @media ${breakpoints('sm')} {
      font-size: 24px;
    }

    @media ${breakpoints('md')} {
      font-size: 28px;
    }

    @media ${breakpoints('lg')} {
      font-size: 32px;
    }
  }
`;
const Menu = styled.div`
  display: none;
  flex-grow: 1;

  @media ${breakpoints('md')} {
    display: block;
  }
  nav {
    ul {
      display: flex;
      justify-content: flex-end;

      li {
        margin: 0 6px;
        a {
          font-size: 20px;
          display: inline-block;
          width: 100%;
          height: 100%;
          color: ${colors(0.75).grey};
          padding: 5px 10px;
        }
        &:nth-of-type(4) {
          a {
            border-radius: 2px;
            background-color: ${colors().orange};
            color: ${colors().navy2};
          }
        }
      }
    }
  }
`;

const MobileMenuBox = styled.div`
  /* position: relative; */
  width: 100%;
  height: 100%;

  @media ${breakpoints('md')} {
    display: none;
  }
`;
const MobileMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  transform: translateX(100%);
  background-color: ${colors().navy2};

  @media ${breakpoints('md')} {
    display: none;
  }

  nav {
    /* height: 100%;
    width: 100%; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ul {
      li {
        a {
          display: inline-block;
          width: 100%;
          padding: 15px;
          text-align: center;
          font-size: 32px;
          color: ${colors().orange};
        }
      }
    }
  }
`;

const Hamburger = styled.div`
  width: 40px;
  height: 30px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5%;
  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    display: inline-block;
    width: 100%;
    height: 3px;
    background-color: ${colors().orange};
    border-radius: 20px;
  }

  @media ${breakpoints('md')} {
    display: none;
  }
`;

function Header() {
  return (
    <Head>
      <Container>
        <Logo>
          <a href="/">krzysztof koziol</a>
        </Logo>
        <Menu>
          <nav>
            <ul>
              <li>
                <Link to="/wideo">wideo</Link>
              </li>
              <li>
                <Link to="/konsultacje">konsultacje</Link>
              </li>
              <li>
                <Link to="/szkolenia">szkolenia</Link>
              </li>
              <li>
                <a href="tel:+48-730-173-031">kontakt</a>
              </li>
            </ul>
          </nav>
        </Menu>
        <MobileMenuBox>
          <Hamburger>
            <div></div>
            <div></div>
            <div></div>
          </Hamburger>
          <MobileMenu>
            <nav>
              <ul>
                <li>
                  <Link to="/nieruchomosci">nieruchomości</Link>
                </li>
                <li>
                  <Link to="/konsultacje">konsultacje</Link>
                </li>
                <li>
                  <Link to="/szkolenia">szkolenia</Link>
                </li>
                <li>
                  <a href="tel:+48-730-173-031">kontakt</a>
                </li>
              </ul>
            </nav>
          </MobileMenu>
        </MobileMenuBox>
      </Container>
    </Head>
  );
}

export default Header;
