import GlobalStyles from './globalStyles';
import Background from './components/Background';
import Header from './components/Header';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Main from './components/main/Main';
import Footer from './components/Footer';
import Consulting from './components/consulting/Consulting';
import Training from './components/training/Training';
import Privacy from './components/privacy/Privacy';
import NoMatch404 from './components/NoMatch404';
import Video from './components/video/Video';
import Success from './components/checkout/Success';
import Cancel from './components/checkout/Cancel';

// if any trouble, remove Zoom

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Background>
        <Router>
          <Header />
          <Hero />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            {/* <Route path="/wideo">
              <Video />
            </Route> */}
            <Route path="/konsultacje">
              <Consulting />
            </Route>
            <Route path="/szkolenia">
              <Training />
            </Route>
            <Route path="/polityka-prywatnosci">
              <Privacy />
            </Route>
            <Route path="/zakupiono-szkolenie">
              <Success />
            </Route>
            <Route path="/anulowano-zakup">
              <Cancel />
            </Route>
            <Route path="*">
              <NoMatch404 />
            </Route>
          </Switch>

          <Footer />
        </Router>
      </Background>
    </div>
  );
}

export default App;
