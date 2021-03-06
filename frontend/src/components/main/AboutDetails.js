import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';
import InfoBoxWithMenu from './InfoBoxWithMenu';
import { Bounce } from 'react-reveal';
import kkoziol1 from '../../assets/kkoziol1.jpg';
import kkoziol2 from '../../assets/kkoziol2.jpg';

const Box = styled.div`
  height: ${(props) => (!props.isOpened === true ? '0' : '500px')};
  overflow-y: ${(props) => (!props.isOpened ? 'hidden' : 'scroll')};
  transition: all 0.5s 0.1s;
  width: 100%;
  margin: 0 auto;

  @media ${breakpoints().lg} {
    width: 90%;
  }
`;

const About = styled.div`
  width: 100%;
  position: relative;

  @media ${breakpoints().md} {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`;

const AboutContentBox = styled.div`
  position: relative;
`;

const Projects = styled.div`
  padding: 50px 10px 20px;
`;
const ProjectsContentBox = styled.div`
  @media ${breakpoints().md} {
    display: flex;
    /* align-items: center; */
  }
`;

const Title = styled.h3`
  font-size: 68px;
  font-weight: 700;
  color: ${colors(0.2).navy2};
  position: relative;
`;

const Par = styled.p`
  font-size: 22px;
  line-height: 1.6;
  color: ${colors().navy1};
  padding: ${(props) => (props.projects ? '20px 10px' : '20px 10px')};

  @media ${breakpoints().md} {
    font-size: 24px;
    line-height: 1.8;
    padding: ${(props) => (props.projects ? '20px 40px' : '20px 0')};
  }

  span {
    a {
      color: ${colors().orange};
      font-weight: 700;
    }
  }
`;

const ImagesBox = styled.div`
  display: flex;

  @media ${breakpoints().md} {
    margin-right: 50px;
    margin-bottom: 20px;

    > div:nth-of-type(2) {
      margin-left: -80px;
      margin-top: 50px;
    }
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 200px;
  height: 250px;
  margin: 0 10px;
  box-shadow: 0 0 12px -8px ${colors().navy1};
  transition: all 0.2s;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.05);
    }
  }

  @media ${breakpoints().md} {
    height: 300px;
  }
`;

function AboutDetails({ isOpened }) {
  const [state] = useState([
    {
      id: 1,
      name: 'eco masuria',
      text: 'Zesp???? Eco Masurii to pi??ciu do??wiadczonych inwestor??w i przedsi??biorc??w. Ludzie, kt??rzy dostrzegli ogromny potencja?? drzemi??cy w terenach p????nocnej Warmii, w najbli??szej okolicy Zalewu Wi??lanego. Wsp??lnie tworzymy nowoczesny kompleks wypoczynkowy, w kt??rego sk??ad b??dzie wchodzi?? apart hotel oraz domki sezonowe. Tworz??c nasz kompleks, zwracamy szczeg??ln?? uwag?? na ekologi?? oraz obecn?? tam przyrod??, do kt??rej chcemy si?? w pe??ni dopasowa??.',
      url1: 'https://ecomasuria.pl/',
      url2: 'https://narusa.pl/',
    },
    {
      id: 2,
      name: 'sun vibes',
      text: 'Od dawna chcia??em stworzy?? us??ug??, kt??ra pozwoli do????cza?? do inwestycji z poziomu smartfona. Niestety brakowa??o mi wiedzy technologicznej. Wszystko si?? zmieni??o, kiedy pozna??em Janusza Krawca, w??a??ciciela firmy softwarowej, Inspiration Vibes. Wsp??lnie stworzyli??my rewolucyjn?? aplikacj??, kt??ra pozwoli powiadomi Ci?? o nowych inwestycjach i pozwoli do????czy?? do projektu w dowolnym miejscu i czasie.',
      url1: 'https://sunvibes.com.pl/',
      url2: 'https://inspirationvibes.com/',
    },
    {
      id: 3,
      name: 'urocze wzg??rze',
      text: 'Jest to moja pierwsza inwestycja deweloperska, kt??rym g????wnym wykonawc?? jest firma deweloperska Docotr QBud. Ca??a budowa zosta??a podzielona na trzy etapy, a ja bra??em udzia?? w dw??ch ostatnich. Inwestycja powsta??a w miejscowo??ci Balice, tu?? obok Krakowa. W jej sk??ad wchodzi xxx dom??w w zabudowie bli??niaczej.',
    },
  ]);
  const [active, setActive] = useState(1);

  const handleClick = (e) => {
    setActive(parseInt(e.target.dataset.id));
  };

  const text = state.filter((el) => el.id === active)[0].text;

  return (
    <Box isOpened={isOpened} className="about">
      <Bounce right>
        <About>
          <AboutContentBox>
            <Title change={true}>o mnie</Title>
            <Par>
              Z rynkiem nieruchomo??ci zwi??za??em si?? na pocz??tku 2015 roku.
              Najpierw pracowa??em jako po??rednik w biurach <span>K2Estate</span>{' '}
              oraz <span>Metrohouse</span>, w kt??rych przeprowadzi??em swoje
              pierwsze transakcje zakupu/sprzeda??y nieruchomosci oraz odby??em
              kilka bardzo warto??ciowych szkole?? bran??owych. Ju?? w sierpniu tego
              roku wsp????za??o??y??em firm??{' '}
              <span>
                <a
                  href="https://sunstreetinvestment.pl/#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  SunStreet Investments
                </a>
              </span>
              , kt??r?? prowadz?? do dzi??. Od tej pory moje ??ycie zawodowe toczy
              si?? wok???? obrotu nieruchomo??ciami, inwestowania oraz pomna??ania
              got??wki moich inwestor??w. W maju 2020 roku wsp????za??o??y??em firm??{' '}
              <span>
                <a
                  href="https://ecomasuria.pl/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Eco Masuria
                </a>
              </span>
              , w kt??rej odpowiadam za budow?? kompleksu
              konferencyjno-wypoczynkowego{' '}
              <span>
                <a href="https://narusa.pl/" target="_blank" rel="noreferrer">
                  Narusa - Le??na Przysta??
                </a>
              </span>
              .
            </Par>
          </AboutContentBox>
          <ImagesBox>
            <Image img={kkoziol1}></Image>
            <Image img={kkoziol2}></Image>
          </ImagesBox>
        </About>

        <Projects>
          <Title>projekty</Title>
          <ProjectsContentBox>
            <InfoBoxWithMenu
              data={state}
              handleClick={handleClick}
              text={text}
              active={active}
            />
            <Par projects={true}>{text}</Par>
          </ProjectsContentBox>
        </Projects>
      </Bounce>
    </Box>
  );
}

export default AboutDetails;
