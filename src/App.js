import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import AppHeader from './components/AppHeader';
import Home from './views/Home';
import Contact from './views/Contact';

export default function App() {
  return (
    <Router>
      <AppHeader />
      <main>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
