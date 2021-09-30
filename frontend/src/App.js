import GlobalStyles from './globalStyles';
import Background from './components/Background';
import Header from './components/Header';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Main from './components/main/Main';
import Footer from './components/Footer';
import Consulting from './components/consulting/Consulting';
import Training from './components/training/Training';
import Testimonials from './components/testimonials/Testimonials';

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
            <Route path="/konsultacje">
              <Consulting />
            </Route>
            <Route path="/szkolenia">
              <Training />
            </Route>
          </Switch>
          <Testimonials />
          <Footer />
        </Router>
      </Background>
    </div>
  );
}

export default App;
