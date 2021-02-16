import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import AppHeader from './components/AppHeader';
import Drawer from './components/Drawer';
import Home from './views/Home';
import Contact from './views/Contact';

export default function App() {
  const [showPedals, setShowPedals] = useState(false);
  const [showPedalboards, setShowPedalboards] = useState(false);

  const toggleDrawer = (btnId) => {
    if (btnId.indexOf('add-pedal') > -1) {
      setShowPedals(!showPedals);
      setShowPedalboards(false);
    }

    if (btnId.indexOf('pedalboard') > -1) {
      setShowPedalboards(!showPedalboards);
      setShowPedals(false);
    }
  };

  const closeDrawer = () => {
    setShowPedals(false);
    setShowPedalboards(false);
  };

  return (
    <Router>
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <AppHeader
            showPedals={showPedals}
            showPedalboards={showPedalboards}
            toggleDrawer={toggleDrawer}
          />
          <Drawer
            closeDrawer={closeDrawer}
            showPedals={showPedals}
            showPedalboards={showPedalboards}
          />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
