import React from 'react';
import styled from 'styled-components';
import Testimonials from '../testimonials/Testimonials';
import About from './About';
import Coworking from './Coworking';
import Investors from './Investors';
import MetaTags from 'react-meta-tags';

const Box = styled.div``;

function Main() {
  return (
    <Box>
      <MetaTags>
        <title>Krzysztof Kozioł - zarabiamy na nieruchomościach</title>
        <meta
          name="description"
          content="Nauczę Cię jak dobrze i bezpiecznie inwestować w nieruchomości. Pokażę Ci jak wyszukiwać okazje inwestycyjne, jak negocjować oraz jak przeprowadzić transakcję zakupu oraz sprzedaży nieruchomości."
        />
      </MetaTags>
      <About />
      <Investors />
      <Coworking />
      <Testimonials />
    </Box>
  );
}

export default Main;
