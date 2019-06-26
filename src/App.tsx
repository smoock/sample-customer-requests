import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Index from './pages/Index';
import Login from './pages/Login';
import Issue from './pages/Issue';

import Main from './components/AppContainer';
import GlobalStyle from './components/GlobalStyle';

const App: React.FC = () => {
  return (
    <Router>
      <Main>
        <Route path="/" exact component={Index} />
        <Route path="/issue/:id" exact component={Issue} />
      </Main>
      <Route path="/login" exact component={Login} />
      <GlobalStyle />
    </Router>
  );
};

export default App;
