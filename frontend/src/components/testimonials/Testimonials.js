import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import testimonialsXsm from '../../assets/testimonials-xsm.jpg';
import testimonialsSm from '../../assets/testimonials-sm.jpg';
import testimonialsMd from '../../assets/testimonials-md.jpg';
import testimonialsLg from '../../assets/testimonials-lg.jpg';
import testimonialsXl from '../../assets/testimonials-xl.jpg';
import { colors } from '../../styles';
import koziol1300x300 from '../../assets/koziol1300x300.png';
import mm_small from '../../assets/mm_small.jpg';
import jp_small from '../../assets/jp_small.jpg';
import kz_small from '../../assets/kz_small.jpg';
import Container from '../Container';
import Slider from './Slider';
import { SM, XSM, MD, LG } from '../../constans';

const TestimonialsBox = styled.div`
  min-height: 300px;
  padding: 100px 0;
  background-image: ${(props) => `url(${props.bgc})`};
  background-position: center;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${colors(0.85).violet};
  }
`;

const data = [
  {
    id: 1,
    name: 'Karol Żądło',
    img: kz_small,
    company: 'Inwestor, deweloper',
    // url: 'https://www.booking.com/hotel/pl/wawel-apartments-old-town-krakow.pl.html',
    text: 'Ekspert w branży nieruchomości, deweloper i zawodowy flipper. Dodatkowo jest bardzo miłą osobą. Gdy zaczynałem w  branży, chciałem zapytać Krzyśka o parę spraw z nią związanych. Nie dość, że Krzysiek normalnie mi odpisał, to jeszcze porozmawialiśmy przez telefon.',
  },
  {
    id: 2,
    name: 'Magdalena Makuch',
    img: mm_small,
    company: 'Record Consultings',
    url: 'https://recordconsulting.pl/',
    text: 'Krzyśka poznałam na niedługo przed tym, jak zakładał firmę SunStreet Investment. Widziałam jak się od tamtej pory rozwinął. Ma bardzo dużą wiedzę z zakresu inwestowania w nieruchomości i chętnie się nią dzieli. Jeśli chcesz się czegoś nauczyć, to tylko od niego.',
  },
  {
    id: 3,
    name: 'Jarosław Pawlikowski',
    img: jp_small,
    company: 'Idea Box Pracownia Projektowa',
    url: 'https://idea-box.eu/',
    text: 'Najwyższa jakość świadczonych usług w zakresie inwestowania w nieruchomości. Pełen profesjonalizm, transparentność i łatwość w komunikacji są autem. Budowanie zdrowych relacji biznesowych to najlepszy opis działań Pana Krzysztofa. Polecam.',
  },
  // {
  //   id: 4,
  //   name: 'Dominika Dominika',
  //   img: koziol1300x300,
  //   company: 'Inspektor budowy',
  //   url: '#',
  //   text: 'Krzysztof jest prawdziwym ekspertem w swym fachu. Jest świetnym negocjatorem i sprzedawcą, a do tego posiada bardzo dużą wiedzę techniczną oraz prawną. Potrafi znaleźć wyjście z naprawdę kiepskich sytuacji, a negocjacje prowadzi w taki sposób, aby obie strony były zadowolone.',
  // },
  // {
  //   id: 5,
  //   name: 'Wojciech Matuszny',
  //   img: koziol1300x300,
  //   company: 'Eco Masuria',
  //   url: 'https://ecomasuria.pl/',
  //   text: 'Krzyś jest niezastąpioną częścią naszego zespołu i nie jestem w stanie wyobrazić sobie budowy kompleksu Narusa - Leśna Przystań bez niego. Jest kompetentny, odpowiedzialny, pracowity i bardzo kreatywny. Świetnie radzi sobie w stresowych sytuacjach, potrafi znaleźć rozwiązanie każdego problemu. ',
  // },
  // {
  //   id: 6,
  //   name: 'Ten ZeSzkolenia',
  //   img: koziol1300x300,
  //   company: 'Ubezpieczenia',
  //   url: '#',
  //   text: 'Byłem uczestnikiem pierwszego szkolenia Krzyśka. ',
  // },
];

function Testimonials() {
  const [state, setState] = useState(window.innerWidth);

  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return width;
  }

  const checkWidth = () => {
    if (state <= XSM) {
      return testimonialsXsm;
    } else if (state >= XSM && state <= SM) {
      return testimonialsSm;
    } else if (state >= SM && state <= MD) {
      return testimonialsMd;
    } else if (state >= MD && state <= LG) {
      return testimonialsLg;
    } else {
      return testimonialsXl;
    }
  };

  useEffect(() => {
    function handleResize() {
      setState(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <TestimonialsBox bgc={checkWidth()}>
      <Container>
        <Slider data={data} />
      </Container>
    </TestimonialsBox>
  );
}

export default Testimonials;
