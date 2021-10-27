import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';
import BackBtn from './backBtn/BackBtn';
import CookieConsent from 'react-cookie-consent';

const Box = styled.div`
  background: ${(props) =>
    `linear-gradient(160deg, ${props.navy1} 0%, ${props.navy2} 33%, ${props.navy3} 100%)`};
  overflow: hidden;
  position: relative;
`;

function Background({ children }) {
  const color = colors();
  return (
    <Box navy1={color.navy1} navy2={color.navy2} navy3={color.navy3}>
      {children}
      <BackBtn />
      <CookieConsent
        buttonText="Ok! :)"
        enableDeclineButton
        declineButtonText="Nie ok :( opuszczam stronę."
        flipButtons
        location="bottom"
        cookieName="myAwesomeCookieName2"
        // visible="show"
        style={{
          background: '#2B373B',
          width: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          alignItems: 'center',
          fontSize: '18px',
        }}
        buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
        expires={150}
      >
        Cześć! Dla poprawnego działania, strona ta wykorzystuje pliki cookie.
        Ok?{' '}
      </CookieConsent>
    </Box>
  );
}

export default Background;
