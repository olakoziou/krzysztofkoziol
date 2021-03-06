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
      text: 'Zespół Eco Masurii to pięciu doświadczonych inwestorów i przedsiębiorców. Ludzie, którzy dostrzegli ogromny potencjał drzemiący w terenach północnej Warmii, w najbliższej okolicy Zalewu Wiślanego. Wspólnie tworzymy nowoczesny kompleks wypoczynkowy, w którego skład będzie wchodzić apart hotel oraz domki sezonowe. Tworząc nasz kompleks, zwracamy szczególną uwagę na ekologię oraz obecną tam przyrodę, do której chcemy się w pełni dopasować.',
      url1: 'https://ecomasuria.pl/',
      url2: 'https://narusa.pl/',
    },
    {
      id: 2,
      name: 'sun vibes',
      text: 'Od dawna chciałem stworzyć usługę, która pozwoli dołączać do inwestycji z poziomu smartfona. Niestety brakowało mi wiedzy technologicznej. Wszystko się zmieniło, kiedy poznałem Janusza Krawca, właściciela firmy softwarowej, Inspiration Vibes. Wspólnie stworzyliśmy rewolucyjną aplikację, która pozwoli powiadomi Cię o nowych inwestycjach i pozwoli dołączyć do projektu w dowolnym miejscu i czasie.',
      url1: 'https://sunvibes.com.pl/',
      url2: 'https://inspirationvibes.com/',
    },
    {
      id: 3,
      name: 'urocze wzgórze',
      text: 'Jest to moja pierwsza inwestycja deweloperska, którym głównym wykonawcą jest firma deweloperska Docotr QBud. Cała budowa została podzielona na trzy etapy, a ja brałem udział w dwóch ostatnich. Inwestycja powstała w miejscowości Balice, tuż obok Krakowa. W jej skład wchodzi xxx domów w zabudowie bliźniaczej.',
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
              Z rynkiem nieruchomości związałem się na początku 2015 roku.
              Najpierw pracowałem jako pośrednik w biurach <span>K2Estate</span>{' '}
              oraz <span>Metrohouse</span>, w których przeprowadziłem swoje
              pierwsze transakcje zakupu/sprzedaży nieruchomosci oraz odbyłem
              kilka bardzo wartościowych szkoleń branżowych. Już w sierpniu tego
              roku współzałożyłem firmę{' '}
              <span>
                <a
                  href="https://sunstreetinvestment.pl/#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  SunStreet Investments
                </a>
              </span>
              , którą prowadzę do dziś. Od tej pory moje życie zawodowe toczy
              się wokół obrotu nieruchomościami, inwestowania oraz pomnażania
              gotówki moich inwestorów. W maju 2020 roku współzałożyłem firmę{' '}
              <span>
                <a
                  href="https://ecomasuria.pl/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Eco Masuria
                </a>
              </span>
              , w której odpowiadam za budowę kompleksu
              konferencyjno-wypoczynkowego{' '}
              <span>
                <a href="https://narusa.pl/" target="_blank" rel="noreferrer">
                  Narusa - Leśna Przystań
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
