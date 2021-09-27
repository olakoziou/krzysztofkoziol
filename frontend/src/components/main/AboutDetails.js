import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';
// import Title from '../Title';
import InfoBoxWithMenu from './InfoBoxWithMenu';
import { Bounce } from 'react-reveal';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import Paragraph from './Paragraph';

const Box = styled.div`
  height: ${(props) => (!props.isOpened === true ? '0' : '500px')};
  overflow-y: ${(props) => (!props.isOpened ? 'hidden' : 'scroll')};
  transition: all 0.5s 0.1s;
  width: 100%;
  margin: 0 auto;

  @media ${breakpoints('lg')} {
    width: 90%;
  }
`;

const About = styled.div`
  width: 100%;
  position: relative;

  @media ${breakpoints('md')} {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`;

const AboutContentBox = styled.div`
  position: relative;

  @media ${breakpoints('md')} {
    > div {
      /* position: absolute;
      transform: rotate(90deg);
      transform-origin: 50% 50%; */
      /* right: 0;
      top: 0; */
    }
  }
`;

const Projects = styled.div``;
const ProjectsContentBox = styled.div`
  @media ${breakpoints('md')} {
    display: flex;
    align-items: center;
  }
`;

const Title = styled.h3`
  font-size: 68px;
  font-weight: 700;
  color: ${colors(0.2).navy2};
  position: relative;
`;

const Par = styled.p`
  font-size: 20px;
  line-height: 1.6;
  color: ${colors().navy1};
  /* padding-bottom: 30px; */
  padding: 20px;
  /* margin-top: ${(props) => props.projects && '20px'}; */

  @media ${breakpoints('md')} {
    font-size: 22px;
    /* margin-top: ${(props) => props.projects && '60px'}; */
  }
`;

const ImagesBox = styled.div`
  display: flex;

  @media ${breakpoints('md')} {
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
  height: 300px;
  margin: 0 10px;
  box-shadow: 0 0 12px -8px ${colors().navy1};
  transition: all 0.2s;

  @media ${breakpoints('md')} {
    &:hover {
      transform: scale(1.05);
    }
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
      text: 'Jest to moja pierwsza inwestycja deweloperska, którym głównym wykonawcą jest firma deweloperska Docotr QBud. ',
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
                <a href="https://sunstreetinvestment.pl/#/" target="_blank">
                  SunStreet Investments
                </a>
              </span>
              , którą prowadzę do dziś. Od tej pory moje życie zawodowe toczy
              się wokół obrotu nieruchomościami, inwestowania oraz pomnażania
              gotówki moich inwestorów. W maju 2020 roku współzałożyłem firmę{' '}
              <span>
                <a href="https://ecomasuria.pl/" target="_blank">
                  Eco Masuria
                </a>
              </span>
              , w której odpowiadam za budowę kompleksu
              konferencyjno-wypoczynkowego{' '}
              <span>
                <a href="https://narusa.pl/" target="_blank">
                  Narusa - Leśna Przystań
                </a>
              </span>
              .
            </Par>
          </AboutContentBox>
          <ImagesBox>
            <Image img={img2}></Image>
            <Image img={img3}></Image>
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
