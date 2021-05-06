import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';

import './styles/global.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about/:id" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
