import { colors } from './styles';
import GlobalStyles from './globalStyles';
import Background from './components/Background';
import Header from './components/Header';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Main from './components/main/Main';

function App() {
  const color = colors();

  console.log(color);
  return (
    <div className="App">
      <GlobalStyles />
      <Background>
        <Router>
          <Header />
          <Hero />
          <Switch>
            <Main />
          </Switch>
        </Router>
      </Background>
    </div>
  );
}

export default App;
